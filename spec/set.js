import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import set from '../src/set'

chai.use(chaiChange)

describe('set', () => {
  'use strict'

  it('exists', () => {
    expect(set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const mySet = new set()
      mySet.add('dude', 1)
      expect(mySet.add('cool', 2)).to.eql({'dude' : 1, 'cool' : 2})
    })
  })
  context('contains()', () => {
    it('returns true if contains something.', () => {
      const mySet = new set()
      mySet.add('dude', 1)
      expect(mySet.contains('dude')).to.eql(true)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the set is empty or false if not.', () => {
      const mySet = new set()
      // mySet.add('dude', 90)
      // mySet.add('cool', 20)
      // mySet.add('turd', 50)
      expect(mySet.isEmpty()).to.eql(true)
    })
  })

  context('remove()', () => {
    it('removes an element (if it exists) from the set.', () => {
      const mySet = new set()
      mySet.add('dude', 90)
      mySet.add('cool', 10)

      expect(mySet.remove('cool')).to.eql({'dude': 90})
    })
    it('returns null if the object is empty', () => {
      const mySet = new set()
      mySet.add('dude', 90)
      mySet.add('cool', 10)

      expect(mySet.remove('jeff')).to.eql(null)
    })
  })

  context('forEach()', () => {
    it('takes a callback function and passes it each element in sequence.', () => {
      const mySet = new set()
      mySet.add('dude', 90)
      mySet.add('cool', 20)
      mySet.add('stuff', 10)
      expect(mySet.forEach()).to.eql({'dude' : 90, 'cool' : 20, 'stuff' : 10})
    })
    it('returns null if the array if empty', () => {
      const mySet = new set()
      expect(mySet.forEach()).to.eql(null)
    })
  })

  // context('dequeue()', () => {
  //   it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
  //     const set = new set()
  //     set.enqueue('dude', 90)
  //     set.enqueue('cool', 20)
  //     set.enqueue('turd', 50)
  //     expect(set.dequeue()).to.eql({element: 'dude', priority: 90})
  //   })
  //   it('returns null if the array if empty', () => {
  //     const set = new set()
  //     expect(set.dequeue()).to.eql(null)
  //   })
  // })
  //
  // context('isEmpty()', () => {
  //   it('returns true if the queue is empty or false if not.', () => {
  //     const set = new set()
  //     set.enqueue('dude', 90)
  //     set.enqueue('cool', 20)
  //     set.enqueue('turd', 50)
  //     expect(set.isEmpty()).to.eql(false)
  //   })
  // })
  //
  // context('lengths()', () => {
  //   it.only('returns the number of elements in the queue', () => {
  //     const set = new set()
  //     set.enqueue('dude', 90)
  //     set.enqueue('cool', 20)
  //     set.enqueue('turd', 50)
  //     expect(set.lengths()).to.eql(3)
  //   })
  // })
})
