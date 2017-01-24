'use strict'

export default class Stack {
  
  constructor () {
    this.array = []
    this.count = 0
  }

  size() {
    return this.count
  }

  add(element) {
    return this.array[this.count++] = element
  }

  removeTop() {
    // this.count > 0 ? this.count-- : null
    if (this.count) {
      const removedTop = this.array[this.count - 1]
      delete this.array[this.count - 1]
      return removedTop
    }

    return null
  }

  peek() {
    return this.count > 0 ? this.array[this.count - 1] : null
  }

  isEmpty() {
    return this.count <= 0
  }
}
