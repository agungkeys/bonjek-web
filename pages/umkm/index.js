import React, { useState, useEffect } from 'react';
import seo from 'constants/seo';
import MainHead from '@/components/head/MainHead';
import MainLayout from '/layout/MainLayout';
import Cards from '@/components/cards/Cards';
import Chip from '@/components/chip/Chip';
import EmptyState from '@/components/section/EmptyState';

import { getCategoryStoreReady, getStores } from '@/lib/api';
function Umkm({ props }) {
  const { category, storeStores, storeCategories } = props;
  const [stateCategories, setStateCategories] = useState([]);

  useEffect(() => {
    setStateCategories(populateCategories);
  },[]);

  function populateCategories(){
    const dataAll = {
      name: 'Semua',
      slug: 'semua',
      link: '/umkm'
    }
    const data = storeCategories.filter(item => item.stores.length > 0).map(item => {
      return {
        name: item.name,
        slug: item.slug,
        link: `/umkm?category=${item.slug}`
      }
    });
    return [dataAll, ...data];
  }

  let imageStoreEmpty = "/images/shops.svg";

  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={seo.DEFAULT} />
      <div>
        <div className="overflow-x-auto mb-2 pt-1 sticky z-10 bg-white" style={{top: '68px'}}>
          <div className="px-4 md:px-0 lg:px-0 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <div className="flex gap-2 md:gap-3 lg:gap-3 py-2">
              {stateCategories && stateCategories.map((item, idx) => 
                <div key={idx} className="flex-none">
                  <Chip active={category ? category : 'semua'} item={item} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0 lg:px-0 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          {storeStores && storeStores.length ? 
            <div className="grid gap-3 md:gap-5 row-gap-5 mb-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
              <Cards items={storeStores} />
            </div>
            :
            <EmptyState title="Maaf, Toko yang kamu cari tidak ditemukan" image={imageStoreEmpty} />
          }
        </div>
      </div>
    </MainLayout>
  )
}

Umkm.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const category = (query.category === 'semua' ? 'semua' : query.category) || '';
  const cat = category === 'semua' ? '' : category;
  const storeStores = await getStores(cat);
  const storeCategories = await getCategoryStoreReady();

  return {
    props : { category, storeStores, storeCategories }
  }
}

export default Umkm;