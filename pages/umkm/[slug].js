import MainLayout from "layout/MainLayout";
import MainHead from "@/components/head/MainHead";
import { getStoreDetail } from "@/lib/api";

function Store({ props }) {
  const {storeStore} = props;
  const SEO = {
    
  }
  return (
    <MainLayout isCart isHeader isFooter>      
      <MainHead seo={SEO} />
      {storeStore && 
        <div>
          <div className="px-4 pt-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="p-3 border border-gray-200 bg-gray-100 rounded-md">
              <h1>{storeStore.name}</h1>
              <div><span className="text-xs text-gray-600">{storeStore.description}</span></div>
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