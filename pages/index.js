import React from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Banners from '@/components/banners/Banners';
import LandingCategory from '@/components/section/LandingCategory';
import IconCatFood from '@/components/icon/IconCatFood';
import IconCatCourier from '@/components/icon/IconCatCourier';
import Cards from '@/components/cards/Cards';

import { getBanners } from '@/lib/api';
const storeLandingCategories = [
  {
    id: 0,
    label: 'Order',
    title: 'Makanan',
    background: 'bg-landing-cf',
    icon: <IconCatFood />,
    link: '/umkm'
  },
  {
    id: 1,
    label: 'Order',
    title: 'Kurir',
    background: 'bg-landing-cc',
    icon: <IconCatCourier />,
    link: '/kurir'
  }
];
const storePopular = [
  {
    name: 'Toko Berkah Sakti',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Suka Saya',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Usaha Bersama',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Bersama Bisa',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Bersama Bisa',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
];
const storeStores = [
  {
    name: 'Toko Berkah Sakti',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Suka Saya',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Usaha Bersama',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Bersama Bisa',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Berkah Sakti',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Suka Saya',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Usaha Bersama',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Bersama Bisa',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Berkah Sakti',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Suka Saya',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Usaha Bersama',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
  {
    name: 'Toko Bersama Bisa',
    image:
      'https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg',
    href: '/',
  },
];

const storeCategories = [
  {
    id: 0,
    label: 'Semua',
    link: '',
    icon: ''
  },
  {
    id: 1,
    label: 'Makanan & Minuman',
    link: '',
    icon: ''
  },
  {
    id: 2,
    label: 'Makanan',
    link: '',
    icon: ''
  },
  {
    id: 3,
    label: 'Minuman',
    link: '',
    icon: ''
  }
]

function Home(props) {
  const { storeBanners } = props;
  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <div>
        <div className="sm:p-2 md:p-4 lg:p-6">
          {storeBanners && <Banners items={storeBanners}/>}
        </div>
        <div className="relative px-4 pt-1 md:pt-2 md:py-4">
          {storeLandingCategories && <LandingCategory items={storeLandingCategories} />}
        </div>
        {storePopular && 
          <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="container block pb-3 bg-white">
                <h1 className="font-bold text-lg text-purple-900">UMKM Terpopular</h1>
            </div>
            <div className="grid gap-3 md:gap-5 row-gap-5 mb-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              <Cards items={storePopular} />
            </div>
          </div>
        }
        {
          storeStores && 
          <div className="px-4 pt-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="container block pb-2 bg-white">
                <h1 className="font-bold text-lg text-purple-900">Rekomendasi UMKM</h1>
            </div>
            <div className="overflow-x-auto mb-4">
              <div className="flex flex-row gap-2 md:gap-3 lg:gap-4">
                {storeCategories && storeCategories.map((item, idx) => 
                  <div key={idx} className="flex-none p-2 px-3 border border-gray-400 bg-gray-100 rounded-full text-gray-600 font-medium text-xs md:text-base lg:text-base">{item.label}</div>
                )}
              </div>
            </div>
            <div className="grid gap-3 md:gap-5 row-gap-5 mb-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              <Cards items={storePopular} />
            </div>
          </div>
        }
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const storeBanners = (await getBanners()) || []
  return {
    props: { storeBanners }
  }
}

export default Home;