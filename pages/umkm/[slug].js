import MainLayout from "layout/MainLayout";
import MainHead from "@/components/head/MainHead";
import Image from "next/image";
import PostBody from '@/components/post-body'
import { getStoreDetail } from "@/lib/api";
import seo from "constants/seo";

function Store({ props }) {
  const {storeStore} = props;
  const SEO = {
    ...seo,
    TITLE: `${storeStore.name} - Bonjek | Ojek Online Bontang`,
    DESC:
      `${storeStore.description.text} - Bonjek adalah aplikasi ojek online karya anak bontang, kurir kami siap melayani kebutuhan harian anda`,
    KEYWORDS:
      'bonjek, bontang ojek, ojek umkm, ojek online, delivery courier',
  }
  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={SEO} />
      {storeStore && 
        <div>
          <div className="px-4 pt-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="header-ui border-0 rounded-xl">
              <div className="w-full absolute z-10 p-5">
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
                    <h1 className="font-semibold text-lg">{storeStore.name}</h1>
                    {storeStore.description && 
                      <PostBody content={storeStore.description.html} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mt-3 md:mt-3 lg:mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div>

            </div>
            
          </div>
        </div>
      }
    </MainLayout>
  )
}

Store.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const slug = query.slug
  
  const storeStore = await getStoreDetail(slug);

  return {
    props: { query, storeStore },
    fallback: true,
  }
}

export default Store;