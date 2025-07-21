'use client'
import React from 'react'
import {Howl} from 'howler'


const Howls = () => {
  const sound = new Howl({
    src: ['/MapleStory-Jump.mp3'],
    autoplay:true,
    loop:false,
    });
  const playSound = () => {
  sound.play();
  // console.log("Sound has played!");
}
  return (
    <div className="flex-1 bg-emerald-500 hover:bg-emerald-700" onMouseOver={playSound}>Howl</div>
  )
}

export default Howls