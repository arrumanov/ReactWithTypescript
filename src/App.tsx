import * as React from 'react'
import { Route } from 'react-router'
import { ConfigProvider } from 'antd'
import ru_RU from 'antd/es/locale/ru_RU'
import Layout from './components/Layout'
import Home from './components/Home'
import Counter from './components/Counter'
import FetchData from './components/FetchData'

const App = () => (
  <ConfigProvider locale={ru_RU}>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Layout>
  </ConfigProvider>
)

export default App
