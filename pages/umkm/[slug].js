import React, {useState, useEffect} from "react";
import MainLayout from "layout/MainLayout";
import MainHead from "@/components/head/MainHead";
import Image from "next/image";
import IconMerchantCheck from "@/components/icon/IconMerchantCheck";
import Chip from "@/components/chip/Chip";
import Search from "@/components/search/Search";

import PostBody from '@/components/post-body'
import { getStoreDetail, getCategoryProducts } from "@/lib/api";
import { priceFormat } from "helpers/utils";
import seo from "constants/seo";

function DetailUmkm({ props }) {
  const {query, storeStore, storeProductCategories} = props;
  const {category, slug} = query;

  const [stateCategoryProducts, setStateCategoryProducts] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setStateCategoryProducts(populateCategoryProduct);
  },[]);

  function populateCategoryProduct(fetchData){
    const dataAll = {
      name: 'Semua',
      slug: 'semua',
      link: `/umkm/${query.slug || ''}#semua`
    }

    const storeDataList = fetchData && fetchData.length ? fetchData : storeProductCategories
    const data = storeDataList.map(item => {
      return {
        name: item.name,
        slug: item.slug,
        link: `/umkm/${query.slug || ''}#${item.slug}`,
        products: item.product || [],
      }
    }) || [];
    return [dataAll, ...data];
  }

  const handleOnSearch = event => {
    const val = event.target.value;
    setSearchText(val);
    const len = val.length;
    
    if(len){
      if(len === 3 || len === 5 || len > 6){
        requestData(val);
      }
      if(len === 1 || val ===""){
        setStateCategoryProducts(populateCategoryProduct());
        requestData('');
      }
    }
  };

  function handleClearSearch(){
    setSearchText('');
    requestData('');
  }
  
  const requestData = async (key) => {
    const res = await getCategoryProducts(slug, key);
    if(res){
      const json = await res;
      setStateCategoryProducts(populateCategoryProduct(json));
    }else{
      setStateCategoryProducts(populateCategoryProduct(json));
    }
  }

  const SEO = {
    ...seo,
    TITLE: `${storeStore && storeStore.name || 'Not Found'} - Bonjek | Ojek Online Bontang`,
    DESC:
      `${storeStore && (storeStore.description ? storeStore.description.text : storeStore.name) || 'Not Found'} - Bonjek adalah aplikasi ojek online karya anak bontang, kurir kami siap melayani kebutuhan harian anda`,
    KEYWORDS:
      'bonjek, bontang ojek, ojek umkm, ojek online, delivery courier',
  }
  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={SEO} />
      {storeStore && 
        <div>
          <div className="px-4 md:px-0 lg:px-0 pt-5 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <div className="header-ui border-0 rounded-xl w-full absolute z-10 p-5">
              <div className="grid grid-cols-8">
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                  <Image
                    src={storeStore.logo && storeStore.logo.url}
                    alt="Picture of something nice"
                    layout="responsive"
                    width={storeStore.logo && storeStore.logo.width}
                    height={storeStore.logo && storeStore.logo.height}
                    quality={100}
                    loading="lazy"
                  />
                </div>
                <div className="col-span-6 md:col-span-6 lg:col-span-7 pl-3 md:pl-5 w-full">
                  <h1 className="font-semibold text-lg">{storeStore.name} - {storeStore.district.name}</h1>
                  <div className="flex items-center pt-1">
                    <IconMerchantCheck />
                    <div className="text-xs text-pink-primary font-semibold"><span className="pl-1">UMKM Terpilih</span></div>
                  </div>
                  {storeStore.description && 
                    <PostBody content={storeStore.description.html} />
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-2 pt-1 sticky z-10 bg-white" style={{top: '68px'}}>
            <div className="px-4 md:px-0 lg:px-0 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
              <div className="py-2 pt-3">
                <Search searchKey={searchText} handleChange={handleOnSearch} handleClearSearchKey={handleClearSearch}/>
              </div>
              <div className="flex gap-2 md:gap-3 lg:gap-3 py-2">
                {stateCategoryProducts && stateCategoryProducts.map((item, idx) => 
                    item.products && item.products.length > 0 &&
                    <div key={idx} className="flex-none">
                      <Chip item={item} />
                    </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-4 md:px-0 lg:px-0 mb-5 mt-3 md:mt-3 lg:mt-3 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            {stateCategoryProducts && stateCategoryProducts.map((item, idx) => 
              <div key={idx}>
                {item.products && item.products.length > 0 &&
                  <div id={item.slug}>
                    <div className="block">
                      <h1 className="text-lg text-gray-700 font-bold py-3 pt-6">{item.name || ''}</h1>
                    </div>
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                      {item.products.length > 0 && item.products.map((itm, idx) => 
                        <div key={idx} className={`border-0 ${item.products.length === idx+1 ? `border-b-0` : `border-b-2`} p-3 pb-5 md:pb-2 lg:pb-2 md:border lg:border md:rounded-lg lg:rounded-lg md:hover:border-pink-primary lg:hover:border-pink-primary`}>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="cols-1">
                              {itm.image && itm.image[0] ?
                                <Image 
                                className="object-cover w-full rounded" 
                                alt={itm.image[0].id}
                                src={itm.image[0].url}
                                width={itm.image[0].width}
                                height={itm.image[0].height}
                                quality={100}
                              />
                              :
                              <Image 
                                className="object-cover w-full rounded" 
                                alt="no-image"
                                src="/images/no-image.png"
                                width={320}
                                height={320}
                                quality={100}
                              />
                              }
                            </div>
                            <div className="col-span-2">
                              <div className="h-full flex flex-wrap content-between">
                                <div className="w-full">
                                  <h1 className="text-gray-900 text-md font-base">{itm.name || ''}</h1>
                                  <div className="pt-1">
                                    <span className="text-black text-md font-bold">{itm.price ? priceFormat(itm.price) : ''}</span>
                                  </div>
                                </div>
                                <div className="w-full text-right">
                                  <button className="p-1 px-3 border rounded-lg bg-pink-primary text-white text-center font-bold">
                                    Beli
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                }
              </div>
              )
            }
          </div>
        </div>
      }
    </MainLayout>
  )
}

DetailUmkm.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const slug = query.slug
  const search = (query.q === '' ? '' : query.q) || '';
  const q = search === '' ? '' : search;
  
  const storeDataStore = await getStoreDetail(slug);
  const storeDataCategoryProducts = await getCategoryProducts(slug, q);

  const storeStore = storeDataStore && storeDataStore || [];
  const storeProductCategories = storeDataCategoryProducts && storeDataCategoryProducts || [];

  return {
    props: { query, storeStore, storeProductCategories},
    fallback: true,
  }
}

export default DetailUmkm;