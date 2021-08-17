/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({item}) {
  return(
    <>
      {item && (
        <Link href={item.href}>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded-lg shadow-lg hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <div className="relative bg-purple-primary">
                <Image
                  src={item.image}
                  alt="Picture of something nice"
                  layout="responsive"
                  width={982}
                  height={655}
                  quality={100}
                  loading="lazy"
                />
              </div>
              <div className="inline-block flex-grow border border-t-0 rounded-b">
                <div className="p-3">
                  <span className="mb-2 font-medium md:text-base text-xs text-grey-500">
                    {item.name || ''}
                  </span>
                  <p className="text-sm text-gray-900"></p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}