import React from 'react'
import Image from "next/image";

export default function loading() {
  return (
    <div className='flex justify-center mt-20'>
      <Image className='h-15' src="spinner.svg" alt="loading..." />
    </div>
  )
}