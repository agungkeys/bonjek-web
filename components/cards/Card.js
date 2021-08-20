/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconMerchantCheck from '../icon/IconMerchantCheck';

export default function Card({item}) {
  function Flag() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-primary h-3 w-3 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
      </svg>
    )
  }
  return(
    <>
      {item && (
        <Link href={`/umkm/${item.slug}`}>
          <div className="cursor-pointer inline-block overflow-hidden duration-300 transform bg-white rounded-lg shadow-lg hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <div className="relative bg-gray-100">
                {item.logo && 
                  <Image
                    src={item.logo && item.logo.url}
                    alt="Picture of something nice"
                    layout="responsive"
                    width={item.logo && item.logo.width}
                    height={item.logo && item.logo.height}
                    quality={100}
                    loading="lazy"
                  />
                }
              </div>
              <div className="inline-block flex-grow border border-t-0 rounded-b">
                <div className="p-1 md:p-2 lg:p-3">
                  <h1 className="pl-1 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-base">
                    {item.name} - {item.district.name}
                  </h1>
                  <div className="flex items-center pt-1">
                      <IconMerchantCheck />
                      <div className="text-xs text-pink-primary font-semibold"><span className="pl-1">UMKM Terpilih</span></div>
                    </div>
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