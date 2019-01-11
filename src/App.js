import React, { Component, Suspense, lazy } from 'react'
import './styles/App.less'
const Count = lazy(() => import('./components/Count'))
const Translate = lazy(() => import('./components/Translate'))

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Suspense fallback={<>x</>}>
          <Count />
          <Translate />
        </Suspense>
      </div>
    )
  }
}

export default App
