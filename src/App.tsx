import React, { FC } from 'react'
// import { Route } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import { ConfigProvider } from 'antd'
import ru_RU from 'antd/es/locale/ru_RU'
// import DevTools from 'mobx-react-devtools'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import Counter from './components/Counter'
import FetchData from './components/FetchData'

const AppComponent: FC = () => {
  return (
    <ConfigProvider locale={ru_RU}>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
      </Layout>
    </ConfigProvider>
  )
}

export const App = observer(AppComponent)

// const App = () => (
//   <ConfigProvider locale={ru_RU}>
//     {/* <DevTools /> */}
//     <Layout>
//       <Route exact path="/" component={Home} />
//       <Route path="/counter" component={Counter} />
//       <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
//     </Layout>
//   </ConfigProvider>
// )

// export default App
