import React from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Banners from '@/components/banners/Banners';
import LandingCategory from '@/components/section/LandingCategory';
import IconCatFood from '@/components/icon/IconCatFood';
import IconCatCourier from '@/components/icon/IconCatCourier';

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