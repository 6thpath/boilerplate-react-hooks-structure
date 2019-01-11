import React, { Component } from 'react'
import { translate } from 'react-i18next'

class Translate extends Component {

  render () {
    const { i18n } = this.props
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }
    return (
      <div className='App-header'>
        <p>{i18n.t('Hello')}</p>
        <button onClick={() => changeLanguage('vn')}>vn</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
    )
  }
}

export default translate('translations')(Translate)
