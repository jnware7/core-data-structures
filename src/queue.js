'use strict'

export default class Queue {

  constructor() {
    this.array = []
    this.count = 0
  }

  lengths() {
    return this.count
  }

  enqueue(element) {
    return this.array[this.count++] = element
  }

  dequeue() {
    if (this.count) {
      this.count--
      this.array = this.array.splice(0, 1)
    }

    return null
  }

  front() {
    return this.count > 0 ? this.array[0] : null
  }

  back() {
    return this.count > 0 ? this.array[this.array.length-1] : null
  }

  isEmpty() {
    return this.count <= 0
  }

}
