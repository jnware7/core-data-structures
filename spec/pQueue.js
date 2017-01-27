
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pQueue'

chai.use(chaiChange)

// beforeEach(function() {
//
// });

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      pQueue.enqueue('sal', 36)
      expect(pQueue.enqueue('foo',70)).to.eql([{element: 'dude', priority: 90}, {element: 'foo', priority: 70},{element: 'turd', priority: 50}, {element: 'cool', priority: 20}])
    })
  })

  context('front()', () => {
    it('returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      expect(pQueue.front()).to.eql({element: 'dude', priority: 90 })
    })
    it('returns null if the array if empty', () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.front()).to.eql(null)
    })
  })

  context('back()', () => {
    it('returns the back element (lowest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      expect(pQueue.back()).to.eql({element: 'cool', priority: 20})
    })
    it('returns null if the array if empty', () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.back()).to.eql(null)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      expect(pQueue.dequeue()).to.eql({element: 'dude', priority: 90})
    })
    it('returns null if the array if empty', () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.dequeue()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      expect(pQueue.isEmpty()).to.eql(false)
    })
  })

  context('lengths()', () => {
    it('returns the number of elements in the queue', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      expect(pQueue.lengths()).to.eql(3)
    })
  })
})
