'use client'
//react and next
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      reset()
    }, 3000);
    return () => {
      clearTimeout(timeout)
    }
  }, [error]);
  return (
    <div className='text-center mt-10'>
      <h1>
        Something went wrong
      </h1>
      <button className='hover:text-primary-color' onClick={reset}>
        Reload the page
      </button>
    </div>
  )
}
