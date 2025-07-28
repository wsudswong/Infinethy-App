'use client'
import React from 'react'
import Image from "next/image"
import {useState} from 'react'
// import cat from '../../public/cat_nobackground.gif'

interface NookProps {
  default_url: string;
  hover_url: string;
}

const NookIllustration: React.FC<NookProps> = ({default_url, hover_url}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image
        alt="Nook Card Illustration"
        src={isHovered ? hover_url : default_url}
        className="self-center"
        style={{border: "none"}}
        width={500}
        height={500}
        // unoptimized={true}
      />
    </div>
  )
}

export default NookIllustration