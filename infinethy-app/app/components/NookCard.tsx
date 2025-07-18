import React from 'react'
// import EventClick from './EventClick'
import Howls from './Howls'

const NookCard = () => {
  return (
    // empty elements are called "Fragments" the allow one return element but are not elements
    <>
      {/* <div>Now I can have 2 elements in one function</div> */}
      <div>
          {/* <EventClick /> */}
          <Howls />
      </div>
    </>
  )
}

export default NookCard