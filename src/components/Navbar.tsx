// react amd next
import React from 'react'
import { NavbarItem } from '@/components'

export const Navbar = () => {
  return (
    <div className='flex justify-center gap-5 light-bg p-4 lg:text-lg'>
      <NavbarItem title="Recently Added" param="fetchRecentAdded" />
      <NavbarItem title="Today Random Selection" param="fetchRandom" />
    </div>
  )
}
