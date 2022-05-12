import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
    </nav>
  );
}
