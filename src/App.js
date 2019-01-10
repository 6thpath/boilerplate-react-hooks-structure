import React, { Component } from 'react'
import './styles/App.less'
import { translate } from 'react-i18next'
import { Count } from '@components'

class App extends Component {
  render () {
    const { i18n } = this.props
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }
    return (
      <div className='App'>
        <Count />
        <div className='App-header'>
          <p>{i18n.t('Hello')}</p>
          <button onClick={() => changeLanguage('vn')}>vn</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
      </div>
    )
  }
}

export default translate('translations')(App)
