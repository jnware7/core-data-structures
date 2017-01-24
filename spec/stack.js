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

      expect(() => myStack.add('foo'))
        .to.alter(() => myStack.size(), { from: 0, to: 1 })
    })
  })

  context('removeTop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      myStack.add('value')
      myStack.add('value1')
      myStack.add('value2')
      expect(myStack.removeTop()).to.eql('value2')
    })
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.removeTop()).to.eql(null)
    })
  })
  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty', () => {
      const myStack = new Stack()
      myStack.add('value')
      myStack.add('value1')
      myStack.add('value2')
      expect(myStack.peek()).to.eql('value2')
    })
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()
      myStack.add('value')
      myStack.add('value1')
      myStack.add('value2')
      expect(myStack.isEmpty()).to.eql(false)
    })
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.eql(true)
    })
  })
  context('length()', () => {
    it('returns the number of elements in the stack', () => {
      const myStack = new Stack()
      myStack.add('value')
      myStack.add('value1')
      myStack.add('value2')
      expect(myStack.size()).to.eql(3)
    })
  })
})
