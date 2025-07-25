'use client'
import React from 'react'
import Image from "next/image"
import {useState} from 'react'
import aurora from '../../public/Aurora.jpg'
import clouds from '../../public/Clouds.jpg'

const Gardening = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image
        alt="Bottom Left Nook Card"
        src={isHovered ? aurora : clouds}
        className="self-center"
        style={{border: "1px solid #fff"}}
      />
    </div>
  )
}

export default Gardening