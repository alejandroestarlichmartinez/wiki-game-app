'use client'
// react amd next
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

type Props = {
  title: string,
  param: string,
}

export const NavbarItem = ({title, param}: Props) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <Link
      className={`m-4 font-semibold ${genre === param && 'underline underline-offset-8 decoration-4 decoration-primary-color rounded-lg'}`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  )
}
