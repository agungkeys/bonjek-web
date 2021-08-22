import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconArrowLeftRound from "../icon/IconArrowLeftRound";

function EmptyState(props) {
  const { title, description, image, link } = props;
  return(
    <div className="max-w-xl grid grid-cols-3 mx-auto pt-20 pb-10">
      <div className="sm:col-span-3 md:col-span-1 lg:col-span-1 contents">
        <div style={{position: 'relative', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%'}}>
          {image && <Image src={image} alt={title} layout="fill" />}
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 lg:col-span-2 w-full items-center text-center md:text-left lg:text-left">
        <span className="text-md md:text-lg lg:text-lg text-gray-600 font-bold">{title || 'Maaf, halaman yang Kamu cari Tidak Ditemukan...'}</span>
        <div className="w-full cursor-pointer text-center md:text-left lg:text-left">
          <Link href="/">
            <div className="flex flex-wrap inline-flex content-center items-center text-pink-primary">
              <div>
                <IconArrowLeftRound className="h-4 w-4" />
              </div>
              <span className="pl-1 text-xs md:text-sm lg:text-sm">{description || 'Kembali ke halaman utama'}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyState;