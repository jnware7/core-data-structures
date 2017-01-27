'use strict'
export default class pQueue {
  constructor() {
    this.q = []
  }

  enqueue(element, priority){
    // push an object to the end of the arrat
    // sort the array according to priority
    this.q[this.q.length] = {element, priority}

    var sorted = this.q.sort(function(a,b){
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
    return sorted
  }

  front() {
    return this.q.length > 0 ? this.q[0] : null
  }

  back() {
    return this.q.length > 0 ? this.q[this.q.length - 1] : null
  }

  dequeue() {
    return this.q.length > 0 ? this.q.shift() : null
  }

  isEmpty() {
    return this.q.length <= 0
  }

  lengths() {
    return this.q.length 
  }
}
