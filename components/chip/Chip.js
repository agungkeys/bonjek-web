/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';

export default function Chip(props) {
  const { item, active } = props;
  String.prototype.stringToSlug = function() {
    var str = this;
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
  };
  function IconAll() {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  }
  return(
    <div className="cursor-pointer">
      <Link href={`/umkm?category=${item.slug ? item.slug : item.name.stringToSlug()}`}>
          <div className={`flex items-center p-2 px-3 border ${active === item.slug || JSON.stringify(active) === 'semua' ? 'border-pink-600 bg-pink-400 text-white' : 'border-gray-400 bg-gray-100 text-gray-600' } rounded-full font-medium text-xs md:text-base lg:text-base`}>
            {item.name === 'Semua' && <IconAll />}
            <div>{item.name}</div>
          </div>
      </Link>
    </div>
  )
}