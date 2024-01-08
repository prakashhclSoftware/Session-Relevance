import React, { createContext, useReducer, useEffect } from 'react';
import {asyncQueue} from './Utils/utility';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {
        ...state,
        queryResults: {
          ...state.queryResults,
          [action.payload.queryId]: {
            query: action.payload.query,
            result: action.payload.result,
          },
        },
      };
    default:
      return state;
  }
};


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { queryResults: {} });

  // Function to dispatch an action to update results
  const updateResults = (queryId, query, result) => {
    dispatch({
      type: 'UPDATE_RESULTS',
      payload: { queryId, query, result },
    });
  };

  useEffect(() => {
   
    const test = (queryArray) => {
      let gblQueryCnt = 0;

      const callback = (result, tmpObj) => {
        // Dispatch an action to update results
        updateResults(tmpObj, queryArray[tmpObj - 1], result);
      };

      for (let i = 0; i < queryArray.length; i++) {
        let q = queryArray[i];
        gblQueryCnt++;   
        // asyncQueue(q, callback, gblQueryCnt, 'Tests');
      }
    };

    // Example test queries
    test([
      'now',
      'now - (1 * day)',
      'number of bes fixlets',
      'number of bes computers',
      'number of bes sites',
      'number of bes users',
      'Names of Bes Computers',
      'Number of unique values of operating systems of bes computers',
      `maximum of unique values of last report times of bes computers whose (exist last report time of it)`,
      `sha1 of "ABC"`,
    ]);
  }, []); 

  // Provide the state and dispatch function to the entire application
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
