
<script type="text/javascript" charset="utf-8">

function js_async_relevance_webReports(query, callback, tmpobj) {    

    function js_async_relevance(query, callback, tmpobj) {       

        Relevance(query, {
            success: function (result) {               
                callback(result, tmpobj);
            },
            failure: function (error) {                
                var errdesc = '<BR><font color="red">ERROR:' + error + '</font>'
                console.log(errdesc);
            }
        }, tmpobj);
    }

    // Call the relevance function with the provided parameters
    js_async_relevance(query, callback, tmpobj);
}

function exampleCallback(result, tmpobj) {
    console.log("exampleCallback executed!", tmpobj);
    console.log("Relevance Query Result:", result);
}

// Example relevance query
var relevanceQuery = "names of bes computers";

// Example function call
js_async_relevance_webReports(relevanceQuery, exampleCallback, '1');
js_async_relevance_webReports("(id of it, type of it) of bes fixlets", exampleCallback, '2');

</script>