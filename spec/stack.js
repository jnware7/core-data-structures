import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.addTop('foo'))
        .to.alter(() => myStack.lengths(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.removeTop()).to.equal(null);
    })
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
        myStack.addTop('value')
        myStack.addTop('value1')
        myStack.addTop('value2')
      expect(myStack.removeTop()).to.equal('value2')
      })
    })
  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.equal(null);
      })
    })
    it('returns the top element in the stack or null if the stack is empty', () => {
      const myStack = new Stack()
        myStack.addTop('value')
        myStack.addTop('value1')
        myStack.addTop('value2')
      expect(myStack.peek()).to.equal('value2')
      })
  context('isEmpty',() =>{
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()
      myStack.addTop('value')
      expect(myStack.isEmpty()).to.equal(false)
    })
  })
  context('lengths',() =>{
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      myStack.addTop('value')
      expect(myStack.lengths()).to.equal(1)
    })
  })
})
