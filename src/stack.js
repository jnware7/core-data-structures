'use strict'

export default class Stack {
  // your code here
  constructor () {
    this.array = []
  }
  lengths () {
    return this.array.length
  }
  addTop(value) {
    return this.array.push(value)
  }

  removeTop(){
    return this.array.length > 0 ? this.array.pop() : null
  }
  peek(){
    return this.array.length > 0 ? this.array[this.array.length-1] : null
  }
  isEmpty(){
    return this.array.length > 0 ? false : true
  }
}
