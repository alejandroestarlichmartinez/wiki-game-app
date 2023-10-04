// React and Mext
import React from 'react'
import Link from 'next/link';

type Props = {
  title: string,
  address: string,
  Icon: React.ElementType
}

export const MenuItem = ({title, address, Icon}: Props): React.ReactElement => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 sm:flex items-center gap-2 main">
        <Icon className="text-2xl sm:text-xl mx-4 sm:mx-0" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}