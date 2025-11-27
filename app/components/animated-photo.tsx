"use client"

import Image from 'next/image'
import localPic from '../images/1.jpg'

export default function AnimatedPhoto() {
  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
      <div className="photo-glow" aria-hidden />
      <div className="photo-circle overflow-hidden">
        <Image src={localPic} alt="profile" fill className="object-cover" />
      </div>
    </div>
  )
}