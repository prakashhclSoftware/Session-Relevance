/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */

  /*
Initialization:
The script starts by executing the test function multiple times. This function initializes a series of static queries and sends them to an asynchronous processing queue (asyncQueue).

Query Queueing / Execution:
The asyncQueue function manages the lifecycle of each query. It checks if the system is initialized and manages the queue based on current load and predefined thresholds (callThreshold).
If the number of active queries (openQueryCounter) exceeds the callThreshold, new queries are delayed (manageCallDelays). Otherwise, they are executed immediately (executeQuery).

Query Processing:
executeQuery handles the execution of each query, incrementing counters.
Each query's execution is tracked, and its result is handled by either handleQueryResult or handleQueryError.

Result / Error Handling:
Both handleQueryResult and handleQueryError update the global statistics (globalStats) with the query results.
After processing each query, these functions check if all queries have been completed using checkAllQueriesComplete, comparing the total number of sent queries (asyncCounter) with the number of processed queries (totalBatchProgressCounter).

Logging / Debugging:
The script includes various logging functions (logQuery, logDebug, logError). These are just currently stubbed out, but provide the entry point for tieing into other facilities. 

Progress Updates:
The updateProgressStats function (currently a placeholder for future development) is intended to update the progress of the query processing. 

Outcomes / Dynamic Table Update:
Each query's result is dynamically displayed in an HTML table. The callback function within test creates a new table row for each query, displaying its ID (at query entry time), the query itself, and the result.
Global Settings and Stats:
Within the console the utility is also dropping the globalStats object

globalStats maintains the state of the entire system, tracking various metrics like query counts, error counts, and system settings and lastly results... The results returned to the table are also available within the object. 
This code demonstrates the approach we have usually taken in good web reports development. 

So how does this tie into our Grease project... So you will have your queries, throw it to the queue, construct a JSON object that you ultimately will build a UI around..

*/
  

let  gblQueryCnt = 0;
let gblQueryResults = new Object();
function test() {
  let queryQueue = new Array();

  queryQueue.push("now");
  queryQueue.push("now - (1 * day)");
  queryQueue.push("number of bes fixlets");
  queryQueue.push("number of bes computers");
  queryQueue.push("number of bes sites");
  queryQueue.push("number of bes users");
  queryQueue.push("Names of Bes Computers");
  queryQueue.push(
    "Number of unique values of operating systems of bes computers"
  );
  queryQueue.push(
    `maximum of unique values of last report times of bes computers whose (exist last report time of it)`
  );
  queryQueue.push(`sha1 of "ABC"`);

  for (let i = 0; i < queryQueue.length; i++) {
    let q = queryQueue[i];
    let callback = function (result, tmpObj) {
      // Create a new row and cells
      let newQueryResult = new Object();      

      // Set the text content for cells
      newQueryResult.queryId = tmpObj; // Query ID (index + 1)
      newQueryResult.query = q; // Query
      newQueryResult.result = result; // Result of the query

      // Append the new row to the table
      console.log(newQueryResult);
      gblQueryResults[tmpObj] = newQueryResult;
    };
    gblQueryCnt++; //Here I am passing over the global var into tmpObj, this is passed into the callback and referenced in the table..
    asyncQueue(q, callback, gblQueryCnt, "Tests");
  }
}

//Look in your console to confirm async,

/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////[Async_Relevance START ]//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//Async Logic, These Vars are Global...

let globalStats = {
  // Holds information about the queries and metrics.
  queries: {}, // Stores individual query tracking objects, keyed by call number.
  metrics: {}, // Stores metrics related to the queue operation.

  // Settings and counters for managing the asynchronous query queue.
  queueSettings: {
    openQueryCounter: 0, // Counts the number of queries currently being processed.
    totalQueryErrorCounter: 0, // Counts the total number of query errors that have occurred.
    callThreshold: 2, //Represents the number of concurrent calls that can be active simultaneously before the system starts delaying new queries. When the number of active queries reaches this threshold, additional queries are delayed according to the logic defined in the manageCallDelays function.
    instanceTracker: 0, // Tracks the number of times the queue has been filled and is used within the manageCallDelays function
    callMultiplier: 20, // Multiplier used to calculate the delay for a query, as the system backs off it will increment by this interval for example 20,40,60 etc.
    callDelayMaxMs: 1500, // Maximum delay for a query in milliseconds.
    initialized: false, // Indicates if the queue has been initialized.
    startTime: new Date(), // Records the start time of the queue operation.
    totalBatchProgressCounter: 0, // Counts the total number of queries processed.
    batchTotalCounter: 0, // Counts the total number of queries in the current batch.
    batchSuccessCounter: 0, // Counts the number of successful queries in the current batch.
    queueDebug: true, // Flag to enable or disable debug logging.
    asyncCounter: 0, // Counts the total number of asynchronous calls made.
    asyncHaltAllCalls: false, // Flag to halt all asynchronous calls.
    alertOnError: false, //Flag that will alert when the system hits an error in a query... Regardless it will log to the console as an error.
  },
  // Configuration settings for the script.
  settings: {
    logRawResponse: true, // Log the raw response of each query.
  },
};

// Function to reset the async queue
function resetAsyncQueue() {
  logDebug("resetAsyncQueue","Resetting async queue.");
  globalStats.queueSettings.initialized = false;
  globalStats.metrics.startDate = new Date();
  globalStats.metrics.startTime = globalStats.metrics.startDate.getTime();

  // Reset query counters
  globalStats.queueSettings.asyncCounter = 0;
  globalStats.queueSettings.openQueryCounter = 0;
}

// Main async queue function
export const asyncQueue= (query, callback, tmpObj, queryClass, sentBackToQueue)=> {
  let { queueSettings, metrics } = globalStats;
  logDebug("syncQueue",
    `Entering asyncQueue with query: ${query}, queryClass: ${queryClass}`
  );
  logDebug("syncQueue", "AsyncQueueCaller=", sentBackToQueue?"manageCallDelays" :"test");

  // Initialize queue if not already done
  if (!queueSettings.initialized) {
    initializeQueue();
  }

  // Handle re-queued calls
  if (sentBackToQueue) {
    logDebug("syncQueue", "Query re-queued");
    queueSettings.batchTotalCounter++;
  } else {
    logDebug("syncQueue", "New query added:");
    queueSettings.instanceTracker++;
  }

  // Manage call delays based on queue thresholds
  manageCallDelays(query, callback, tmpObj, queryClass);
}

// Helper function to initialize the queue
function initializeQueue() {
  logDebug("initializeQueue", "Initializing queue.");
  let { queueSettings, metrics } = globalStats;
  queueSettings.instanceTracker = queueSettings.callThreshold - 1;
  queueSettings.initialized = true;
  queueSettings.startTime = new Date();
  metrics.queueInitializedTime = queueSettings.startTime.getTime();
  metrics.queueCallCounter = 0;
}

// Helper function to manage call delays and execute queries
function manageCallDelays(query, callback, tmpObj, queryClass) {
  let { queueSettings } = globalStats;
  logDebug("manageCallDelays", "Current calls open: " + queueSettings.openQueryCounter);
  if (queueSettings.openQueryCounter > queueSettings.callThreshold) {
    // Increment instanceTracker, queue is full
    queueSettings.instanceTracker++;

    let delay = Math.min(
      queueSettings.callMultiplier * queueSettings.instanceTracker,
      queueSettings.callDelayMaxMs
    );
    logDebug("manageCallDelays", "Queue full. Delaying query: " + delay + "ms");

    setTimeout(() => {
      asyncQueue(query, callback, tmpObj, queryClass, true);
    }, delay);
  } else {
    // Execute query directly , we got room in the queue
    executeQuery(query, callback, tmpObj, queryClass);

    // Reset instanceTracker after successful execution
    queueSettings.instanceTracker = 0;
  }
}

function executeQuery(query, callback, tmpObj, queryClass) {
  if (typeof queryClass === "undefined") {
    queryClass = "none";
  }

  //Hard stop to end calls
  if (globalStats.queueSettings.asyncHaltAllCalls) {
    return;
  }

  globalStats.queueSettings.asyncCounter++;
  globalStats.queueSettings.openQueryCounter++;
  let qTrack = {
    start: new Date(),
    query: query,
    callNumber: globalStats.queueSettings.asyncCounter,
    // sha1: sha1(query), // Uncomment if needed
    queryClass: queryClass,
  };

  globalStats.queries[qTrack.callNumber] = qTrack;
  if (qTrack.callNumber === 1) {
    globalStats.metrics.startDate = new Date();
    globalStats.metrics.startTime = globalStats.metrics.startDate.getTime();
  }
  logQuery(
    `Executing Async Query: [ID= ${qTrack.callNumber}] Query=${query}`
  );

  // Perform the actual query
  asyncQueryExecution(
    query,
    (result) => {
      // Process successful result
      handleQueryResult(query, result, callback, tmpObj, qTrack);
    },
    (error) => {
      handleQueryError(query, error, qTrack);
    }
  );
}

function asyncQueryExecution(query, successCallback, errorCallback) {
  logDebug("asyncQueryExecution", "Exec Call Now");
  Relevance(query, {
    success: function (result) {
      successCallback(result);
    },
    failure: function (error) {
      errorCallback(error);
    },
  });
}

function handleQueryResult(query, result, callback, tmpObj, qTrack) {
  let endTime = new Date().getTime();
  qTrack.end = new Date();
  qTrack.mstime = (endTime - qTrack.start.getTime()).toString();
  if (globalStats.settings.logRawResponse) {
    qTrack.result = result; // This logs the raw responses into the Qtrack Object.
  } else {
    qTrack.result = "";
  }
  globalStats.queueSettings.batchSuccessCounter++;
  globalStats.queueSettings.totalBatchProgressCounter++;

  globalStats.queries[qTrack.callNumber] = qTrack;
  logQuery(
    `Query completed: [ID= ${qTrack.callNumber}] Query=${query} Evaltime: ${qTrack.mstime}`
  );
  checkAllQueriesComplete();
  globalStats.queueSettings.openQueryCounter--;
  logDebug("handleQueryResult",
    "Query Result Handled. Counter decremented. Current count: " +
      globalStats.queueSettings.openQueryCounter
  );

  updateProgressStats();
  callback(result, tmpObj);
}

function handleQueryError(query, error, qTrack) {
  let endTime = new Date().getTime();
  qTrack.end = new Date();
  qTrack.mstime = (endTime - qTrack.start.getTime()).toString();
  qTrack.error = error;
  globalStats.queueSettings.totalQueryErrorCounter++;
  globalStats.queueSettings.totalBatchProgressCounter++;
  globalStats.queries[qTrack.callNumber] = qTrack;
  logError(`Query Error: Query:${qTrack.query} Error: ${error}`);
  checkAllQueriesComplete();
  globalStats.queueSettings.openQueryCounter--; // Decrement here
  logDebug("handleQueryError",
    "Query Error Handled. Counter decremented. Current count: " +
      globalStats.queueSettings.openQueryCounter
  );
  updateProgressStats();
}

function checkAllQueriesComplete() {
  // Check if the number of processed queries equals the total number of queries sent
  if (
    globalStats.queueSettings.asyncCounter ===
    globalStats.queueSettings.totalBatchProgressCounter
  ) {
    console.log("All queries completed.");
    console.log(gblQueryResults);
    // This is where you would hook additional code to run when all queries are complete
  }
}
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////[Async_Relevance END ]///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//Stubbed Hooks
// Update progress statistics
function updateProgressStats() {
  logDebug("updateProgressStats", "Future Hook to update Progress");
  //For now I am just dropping the global object
  console.log(globalStats);
}

function logQuery(evt) {
  let log = `${retLogTime()} evt: ${evt}`;
  console.log(log);
}

function logDebug(callerName, evt) {
    if (globalStats?.queueSettings?.queueDebug) {
      callerName = callerName || "Unknown";
      let log = `${retLogTime()} caller: ${callerName} evt: ${evt}`;
      console.debug(log);
    }
  }

function logError(evt) {
  let log = `${retLogTime()} evt: ${evt}`;
  console.error(log);
  if (globalStats?.queueSettings?.alertOnError) {
    alert(evt);
  }
}

function retLogTime() {
  var dt = new Date();
  return (
    dt.getUTCFullYear() +
    "-" +
    ("0" + (dt.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dt.getUTCDate()).slice(-2) +
    "-" +
    ("0" + dt.getUTCHours()).slice(-2) +
    ":" +
    ("0" + dt.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + dt.getUTCSeconds()).slice(-2)
  );
}