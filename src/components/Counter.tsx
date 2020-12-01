/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
import * as React from 'react'
import { makeObservable, observable, action } from 'mobx'
import { observer } from 'mobx-react'
// import { ApplicationState } from '../store'

export class ApplicationState {
  public counter: number

  constructor(value: number) {
    makeObservable(this, {
      counter: observable,
      increment: action,
    })
    this.counter = value
  }

  increment = () => {
    this.counter += 1
  }

  decrement = () => {
    this.counter -= 1
  }
}

const store = new ApplicationState(1)

export const Counter = observer(
  class Counter extends React.Component<ApplicationState> {
    render() {
      return (
        // eslint-disable-next-line react/jsx-fragments
        <React.Fragment>
          <h1>Counter</h1>

          <p>This is a simple example of a React component.</p>

          <p aria-live="polite">
            Current count: <strong>{store.counter}</strong>
          </p>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => {
              store.increment()
            }}
          >
            Increment
          </button>
        </React.Fragment>
      )
    }
  },
)
