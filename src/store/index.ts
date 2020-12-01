import { observable, action } from 'mobx'

export class ApplicationState {
  @observable counter: number = 1

  @action
  increment = () => {
    console.log(345)
    console.log(this.counter)
    this.counter += 1
    console.log(this.counter)
  }

  @action
  decrement = () => {
    this.counter -= 1
  }
}
