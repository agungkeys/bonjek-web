import React from "react";
import Link from "next/link";

function LandingCategory({items}) {
  return(
    <div className="grid max-w-full gap-5 row-gap-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-2 grid-cols-2 sm:mx-auto">
      {items && items.map((item, idx) => (
        <Link key={idx} href={item.link} passHref>
          <div className={`${item.background} bg-cover bg-center rounded-lg shadow-lg cursor-pointer`}>
            <div className="bg-purple-primary bg-opacity-50 hover:bg-opacity-0 p-2 md:p-5 lg:p-5 rounded-lg h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white md:text-lg text-xs font-light md:font-bold tracking-wider uppercase">
                    {item.label || ''}
                  </p>
                  <p className="text-white md:text-4xl text-sm font-extrabold tracking-wide">
                    {item.title || ''}
                  </p>
                </div>
                <div className="flex items-center justify-center p-1 w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-white md:border-8 border-2 border-yellow-300">
                  {item.icon}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default LandingCategory;