import React from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Cards from '@/components/cards/Cards';
import Chip from '@/components/chip/Chip';

import { getCategoryStoreReady, getStores } from '@/lib/api';
function Umkm({ props }) {
  const { storeStores, storeCategories } = props;

  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <div>
        <div className="overflow-x-auto mb-2 pt-1 sticky z-10 bg-white" style={{top: '68px'}}>
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex gap-2 md:gap-3 lg:gap-3 py-2">
              <div className="flex-none">
                <Chip item={{name: 'Semua', slug: 'semua' }} />
              </div>
              {storeCategories && storeCategories.map((item, idx) => 
                !!item.stores.length &&
                <div key={idx} className="flex-none">
                  <Chip item={item} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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

Umkm.getInitialProps = async (ctx) => {
  const storeStores = await getStores();
  const storeCategories = await getCategoryStoreReady();

  return {
    props : {storeStores, storeCategories }
  }
}

export default Umkm;