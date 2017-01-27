'use strict'

// function Node(data){
//   this.data = data
//   this.next= null
// }

class Node {
  constructor( data, next=null ) {
    this.data = data
    this.next = next
  }

  getData() {
    return this.data
  }

  getNext() {
    return this.next
  }

  setNext( next ) {
    this.next = next
  }
}

export default class Linkedlist {
  //creates linked list
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
//or insert
  add(data) {
    const node = new Node(data)

    if( this.head === null ) {
      this.head = this.tail = node
      // this.tail = node
    } else {
      this.tail.setNext( node )
      this.tail = node
    }

    this.length++
  }

  getHeadNode(){
    if( this.head === undefined ){
      return null
    }else{
      return this.head
    }
  }

  getTailNode(){
    if( this.tail === undefined ){
      return null
    }else{
      return this.tail
    }
  }

  contains(data){
    // Start at head
    let current = this.head

    // while current is not null
    while( current !== null ) {
      // compare data with node's data
      if( current.getData() === data ) {
        // if data matches node's data, return true
        return true
      } else {
        // else go to next node
        current = current.getNext()
      }
    }

    return false

    // console.log('here!!!',this.data.hasOwnProperty(data))
    // return this.data.hasOwnProperty(data)
  }
  find(data){
    let current = this.head

    // while current is not null
    while( current !== null ) {
      // compare data with node's data
      if( current.getData() === data ) {
        // if data matches node's data, return data
        console.log('heres your data :', current.data);
        return current.data
      } else {
        // else go to next node
        current = current.getNext()
      }
    }

    return -1
  }

  insertFirst(data){
    //create the new node
    const node = new Node(data)
    if(!this.head){
      //see if there is a head
      this.head = this.tail = node
      this.length++
    }else{
      //set the pointer of the new node to the current head
      node.setNext(this.head)
      //set the new head to the new node
      this.head = node
      //keep the count
      this.length++
      console.log(this.head);
    }
  }

  insertBefore(data,newData){
    let current = this.head
    //create the new node
    const node = new Node(data)
    while(current !== null ){
    if( current.getNext().getData() === data ) {
      node = current.next.next
      current.next = node
    // // if data matches node's data, return data
    // console.log('heres your data :', Linkedlist)
    }
    current = current.next
    }
  }
}


insertBefore(data, newData) {
  let current = this.head
  const node = new Node(newData)
  while( current !== null )
  if ( this.next === data ) {
    this.next === node
    this.data === this.tail
  }
  current = current.next
}
