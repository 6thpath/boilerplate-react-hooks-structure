import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { i18n, serviceWorker } from '@constants'
import { I18nextProvider } from 'react-i18next'

render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
)

serviceWorker.register()
