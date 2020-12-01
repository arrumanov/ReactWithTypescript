import 'bootstrap/dist/css/bootstrap.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configure as configureMobx } from 'mobx'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

import './styles/style.scss'
import 'antd/dist/antd.css'

configureMobx({ enforceActions: 'observed' })

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
