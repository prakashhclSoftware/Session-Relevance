import Navbar from './Components/Navbar'

import React, { useReducer } from 'react'
import Chart from 'chart.js/auto';
import { useDispatch, useSelector, useStore } from 'react-redux'

export const ACTIONS = {
  SET_BAR_CHART_DATA: 'set_bar_chart_data',
}

const initialState = {
  barChartData: []
}


export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_BAR_CHART_DATA:
      return {
        ...state,
        barChartData: [1]     
        // barChartData: action.payload.customeTabIndex
      }
    default:
      return initialState
  }
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
     <Navbar state={state}  dispatch={dispatch}/>
   
    </div>
  );
}

export default App;
