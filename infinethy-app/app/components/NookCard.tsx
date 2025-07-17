import React from 'react'
import EventClick from './EventClick'

const NookCard = () => {
  return (
    // empty elements are called "Fragments" the allow one return element but are not elements
    <>
      <div>Now I can have 2 elements in one function</div>
      <div>
          <EventClick />
      </div>
    </>
  )
}

export default NookCard