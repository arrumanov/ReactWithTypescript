import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from 'history'
// eslint-disable-next-line import/no-useless-path-segments
import { ApplicationState, reducers } from './'

export default function configureStore(history: History, initialState?: ApplicationState) {
  const middleware = [thunk, routerMiddleware(history)]

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  })

  const enhancers = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const windowIfDefined = typeof window === 'undefined' ? null : (window as any)
  // eslint-disable-next-line no-underscore-dangle
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-next-line no-underscore-dangle
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
  )
}
