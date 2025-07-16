'use client';
import React from 'react'

const EventClick = () => {
  return (
    <div>
        <button onClick={() => console.log('Button extracted & Clicked')}>Click to Log</button>
    </div>
  )
}

export default EventClick