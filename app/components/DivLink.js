import React from 'react'
import Link from 'next/link';

function DivLink({ link, name }) {
  return (
    <div className="cursor-pointer">
      <Link href={`/${link}`}>
        {name}
      </Link>
    </div>
  );
}

export default DivLink
