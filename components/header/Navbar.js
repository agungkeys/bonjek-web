/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Link from "next/link";
import { BiShoppingBag,  BiCycling, BiWinkSmile, BiEnvelope, BiCartAlt} from "react-icons/bi";
import Logo from "./Logo";

export default function Navbar(props) {
  const {q, filter, queryParams, isCart=false} = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    {
      id: 0,
      label: 'UMKM',
      link: '/mitra-umkm',
      image: <BiShoppingBag />
    },
    {
      id: 1,
      label: 'Kurir',
      link: '/mitra-kurir',
      image: <BiCycling />
    },
    {
      id: 2,
      label: 'Tentang',
      link: '/tentang-kami',
      image: <BiWinkSmile />
    },
    {
      id: 3,
      label: 'Saran & Masukan',
      link: '/saran-masukan',
      image: <BiEnvelope />
    },
    {
      id: 4,
      label: 'Bantuan',
      link: '/bantuan',
      image: ''
    }
  ];

  function MenuItem(props) {
    const {item, isButton=false, isCart=false} = props;
    return(
      <>
        {item && 
          <li>
            <Link href={item.link}>
              <a
                aria-label={item.label}
                title={item.label}
                className={
                  isButton ? 
                  'inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-primary hover:bg-purple-900 focus:shadow-outline focus:outline-none' 
                  : (isCart ? 'inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-pink-accent-400 transition duration-200 rounded shadow-md bg-white hover:bg-pink-800 hover:text-white focus:shadow-outline focus:outline-none' 
                    : 'font-bold tracking-wide text-white transition-colors duration-200 rounded h-10 px-3 hover:bg-white hover:text-pink-primary inline-flex items-center')}
              >
                <div className="text-xl mr-1">
                  {item.image}
                </div>
                <span>{item.label}</span>
              </a>
            </Link>
          </li>
        }
      </>
      
    )
  }

  function LogoItem(item) {
    return(
      <Link href={item.link}>
        <a
          aria-label={item.label}
          title={item.label}
          className="inline-flex items-center lg:mx-auto"
        >
          {item.image}
          <span className="ml-2 text-2xl font-bold tracking-wide text-white">
            {item.label}
          </span>
        </a>
      </Link>
    )
  }

  function MenuDrawer(props) {
    const { items } = props;
    return (
      <div className="ml-auto lg:hidden">
        <button
          aria-label='Open Menu'
          title='Open Menu'
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none hover:bg-pink-100"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-white" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="#fff"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="#fff"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                <LogoItem
                  label="bonjek"
                  link="/"
                  image={<Logo />}
                />
                </div>
                <div>
                  <button
                    aria-label='Close Menu'
                    title='Close Menu'
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.link}
                        aria-label={idx < 2 ? `Mitra ${item.label}` : `${item.label}`}
                        title={idx < 2 ? `Mitra ${item.label}` : `${item.label}`}
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        {idx < 2 ? `Mitra ${item.label}` : `${item.label}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-20 py-2 bg-gradient-to-r from-pink-primary to-pink-accent-400 font-body">
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-left-top bg-landing-background">
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
            <ul className="flex items-center hidden space-x-8 lg:flex">
              {menus.slice(0, 3).map((item, idx) => (
                <div key={idx}>
                  <MenuItem item={item} />
                </div>
              ))}
            </ul>
            <LogoItem
              label="bonjek"
              link="/"
              image={<Logo />}
            />
            <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
              {isCart ? 
                <MenuItem 
                  item={{
                    label: 'Keranjang',
                    link: '/keranjang',
                    image: <BiCartAlt />
                  }}
                  isCart
                />
                :
                <>
                  <MenuItem item={menus[3]} />
                  <MenuItem item={menus[4]} isButton />
                </>
              }
            </ul>
            <MenuDrawer items={menus} />
          </div>
        </div>
      </div>
    </div>
  );
};