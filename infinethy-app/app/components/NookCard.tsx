import React from 'react'
import Howls from './Howls'
import Link from 'next/link'

const NookCard = () => {
  return (
    // empty elements are called "Fragments" the allow one return element but are not elements
    <>
      <div>
          <Link href="../habitracker"><Howls /></Link>
      </div>
    </>
  )
}

export default NookCard