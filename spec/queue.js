import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('dude')
      myQueue.enqueue('talk')
      myQueue.enqueue('cool')
      console.log(myQueue)
    expect(myQueue.enqueue('foo')).to.eql('foo')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('foo')
      myQueue.enqueue('too')
      myQueue.enqueue('dude')
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.lengths(), { from: 3, to: 2 })
        console.log('what is the length', myQueue.lengths());
      it('testing to see if the first element in the queue is removed and returned', () => {
      const myQueue = new Queue()

      myQueue.enqueue('foo')
      myQueue.enqueue('too')
      myQueue.enqueue('dude')
      expect(myQueue.dequeue()).to.eql('foo')
    })
  })
})

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('foo')
      myQueue.enqueue('too')
      myQueue.enqueue('dude')
      expect(myQueue.front()).to.eql('foo')
    })
  })
})

  context('back()', () => {
    it('returns the back element in queue or null if the queue is empty.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('foo')
      myQueue.enqueue('too')
      myQueue.enqueue('dude')
      expect(myQueue.back()).to.eql('dude')
    })
  })

  context('isEmpty()', () => {
    it('returns true if queue is empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.isEmpty()).to.equal(true)
  })
    it('returns null if queue is empty.', () => {
    const myQueue = new Queue()
    myQueue.enqueue('this')
    myQueue.enqueue('is')
    myQueue.enqueue('foo')
    expect(myQueue.isEmpty()).to.equal(false)
  })
})

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('dude')
      myQueue.enqueue('adam')
      expect(myQueue.lengths()).to.equal(3)
    })
  })
