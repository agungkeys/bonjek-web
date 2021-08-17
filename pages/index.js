import React from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Banners from '@/components/banners/Banners';
import LandingCategory from '@/components/section/LandingCategory';

import { getBanners } from '@/lib/api';
import { storeLandingCategories } from 'constants/storeLocal';

function Home(props) {
  const { storeBanners } = props;
  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <div>
        <div className="sm:p-2 md:p-4 lg:p-6">
          <Banners items={storeBanners}/>
        </div>
        <div className="relative px-4 pt-1 md:pt-2 md:py-4">
          <LandingCategory items={storeLandingCategories} />
        </div>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const storeBanners = (await getBanners()) || []
  return {
    props: { storeBanners },
  }
}

export default Home;