import React, { useReducer } from 'react'
import { exampleReducer } from '@reducers'
import { exampleStore } from '@stores'

function Count() {
  const [state, dispatch] = useReducer(exampleReducer, exampleStore)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}

export default Count