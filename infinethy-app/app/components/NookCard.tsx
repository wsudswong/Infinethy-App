import React from 'react'
import Howls from './Howls'

const NookCard = ({children}: {children: React.ReactNode}) => {
  return (
    // empty elements are called "Fragments" the allow one return element but are not elements
    <>
      <div>
          <Howls>{children}</Howls>
      </div>
    </>
  )
}

export default NookCard