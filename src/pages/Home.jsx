import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // prefetching blog page
  const prefetchPage = () => {
    const link = document.createElement('a');
    // bisa prefetch bisa juga preload
    // preload harus data yang akan dipakai
    // prefetch data yang akan dipakai ketika navigasi
    link.rel = 'prefetch';
    link.href = '/blog/1';
    document.head.appendChild(link);
    console.log('prefetching blog page');
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/blog/1" onMouseOver={prefetchPage}>
        Blog
      </Link>
    </div>
  );
}
