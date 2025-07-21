import React from 'react'
import Howls from './Howls'

const NookCard = ({children}: {children: React.ReactNode}) => {
  return (
    // empty elements are called "Fragments" the allow one return element but are not elements
    <>
      <div>
          <p>{children}</p>
          <Howls />
      </div>
    </>
  )
}

export default NookCard