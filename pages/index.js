import React, {useState, useEffect} from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Banners from '@/components/banners/Banners';
import LandingCategory from '@/components/section/LandingCategory';
import IconCatFood from '@/components/icon/IconCatFood';
import IconCatCourier from '@/components/icon/IconCatCourier';
import Cards from '@/components/cards/Cards';
import Chip from '@/components/chip/Chip';

import { getBanners, getCategoryStoreReady, getStores } from '@/lib/api';
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

function Home({ props }) {
  const { storeBanners, storeStores, storeCategories } = props;

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
        <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="container block pb-3 bg-white">
              <h1 className="font-bold text-lg text-purple-900">UMKM Terpopular</h1>
          </div>
          {storeStores && 
            <div className="grid gap-3 md:gap-5 row-gap-5 mb-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              <Cards items={storeStores} isPopular />
            </div>
          }
        </div>
        
        <div className="px-4 pt-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="container block pb-2 bg-white">
              <h1 className="font-bold text-lg text-purple-900">Rekomendasi UMKM</h1>
          </div>
          <div className="overflow-x-auto mb-4">
            <div className="flex gap-2 md:gap-3 lg:gap-4">
              <div className="flex-none">
                <Chip item={{name: 'Semua', slug: '/umkm' }} />
              </div>
              {storeCategories && storeCategories.map((item, idx) => 
                !!item.stores.length &&
                <div className="flex-none">
                  <Chip key={idx} item={item} />
                </div>
              )}
            </div>
          </div>
          {storeStores && 
            <div className="grid gap-3 md:gap-5 row-gap-5 mb-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              <Cards items={storeStores} />
            </div>
          }
        </div>
      </div>
    </MainLayout>
  )
}

Home.getInitialProps = async (ctx) => {
  const storeBanners = await getBanners();
  const storeStores = await getStores();
  const storeCategories = await getCategoryStoreReady();
    
  return {
    props: { storeBanners, storeStores, storeCategories }
  }

}

export default Home;