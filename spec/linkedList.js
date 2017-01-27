
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Linkedlist from '../src/linkedList'

chai.use(chaiChange)

describe.only('Linkedlist', () => {
  'use strict'

  it('exists', () => {
    expect(Linkedlist).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('Returns the first node in the list', () => {
      const lList = new Linkedlist()
      lList.add(2)
      console.log(lList);
      expect( lList.getHeadNode() ).to.eql( {data : 2 , next : null} )
    })
    it('Returns the first node in the list', () => {
      const lList = new Linkedlist()

      console.log(lList);
      expect( lList.getHeadNode() ).to.eql( null )
    })
  })

  context('getTailNode()', () => {
    it('Returns the last node in the list', () => {
      const lList = new Linkedlist()
      lList.add(2)
      lList.add(3)
      console.log(lList);
      expect( lList.getTailNode() ).to.eql( {data:3, next: null} )
    })
    it('Returns the first node in the list', () => {
      const lList = new Linkedlist()

      console.log(lList);
      expect( lList.getTailNode() ).to.eql( null )
    })
  })
  context('contains()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const lList = new Linkedlist()
      lList.add(2)
      lList.add(3)
      console.log(lList);
      expect( lList.contains(2) ).to.eql(true)
    })
    it('Determines whether or not the list contains the provided data', () => {
      const lList = new Linkedlist()

      console.log(lList);
      expect( lList.contains(2) ).to.eql( false )
    })
  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const lList = new Linkedlist()
      lList.add(2)
      lList.add(3)
      console.log(lList);
      expect( lList.find(3) ).to.eql(3)
    })
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const lList = new Linkedlist()

      console.log(lList);
      expect( lList.find(2) ).to.eql( -1 )
    })
  })

  context('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const lList = new Linkedlist()
      lList.add(2)
      lList.add(3)
      console.log(lList);
      lList.insertFirst(4);
      console.log('the list is here',lList);
      expect(lList.head).to.eql({ data: 4, next:{ data: 2, next: { data: 3, next: null } }
      })
    })
  })

  context('insertBefore()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const lList = new Linkedlist()
      lList.add(2)
      lList.add(3)
      console.log(lList);
      lList.insertBefore(3, 4);
      console.log('the list is here',lList);
      expect(lList).to.eql({ data: 2, next:{ data: 4, next: { data: 3, next: null } }
      })
    })
  })
})  
