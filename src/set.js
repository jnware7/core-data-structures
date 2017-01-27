'use strict'
export default class Set {
  constructor() {
    this.s = {}
    this.count = 0
  }

  add(value){
    this.s[value] = value
    console.log(this.s)
    return this.s
  }

  contains(key) {
    return this.s[key] !== undefined
    // for(var key in this.s) {
    //   if(!this.s.hasOwnProperty(key)) {
    //     return false;
    //   }
    //   return true;
    // }
  }

  isEmpty() {
    for ( var key in this.s ) {
      return false
    }
    return true

    // for(var key in this.s) {
    //   if(this.s.hasOwnProperty(key)) {
    //     console.log('message',this.s.hasOwnProperty(key));
    //     return false;
    //   }
    //   return true;
    // }
  }

  remove(key){
    if ( this.s[key] ) {
      delete this.s[key]
    } else {
      return null
    }
    return this.s
    // this.s[key] ? delete this.s[key] : null
    // return this.s
  }


  forEach(callback) {
    for ( var key in this.s ) {
      callback(this.s[key])
    }
  }
}











// itirate through every element in the object
//
