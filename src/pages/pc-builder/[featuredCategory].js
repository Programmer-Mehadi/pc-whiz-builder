import ProductCard from '@/components/UI/ProductCard';
import RootLayout from '@/components/layout/RootLayout';
import Head from 'next/head';

const FeaturedCategoryProductPage = ({ products = [] }) => {

  return (
    <>
      <Head>
        <title>
          {products.length > 0 ? (products[0].category).split('-').join(' ') : ""} - Featured Category
        </title>
      </Head>
      <div className='pb-24 pt-4 md:pt-8'>
        <h1 className='text-center mt-10 px-5'>
          Featured Category Product By : {
            products.length > 0 ? <span className='text-blue-900'>{(products[0].category).split('-').join(' ')}</span> : ""
          }
        </h1>
        <section className="px-5 py-16">
          {
            products && products.length === 0 && <h1 className="text-center text-3xl font-bold mb-4">No Product Found</h1>
          }
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {
              products && products.map((product) => {
                return <ProductCard product={product} key={product._id} />
              })
            }

          </div>
        </section>
      </div>
    </>
  )
}

export default FeaturedCategoryProductPage



FeaturedCategoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch('https://pcwhizbuilder-server.vercel.app/categories');
  const data = await res.json();
  return {
    paths: data.map((category) => ({ params: { featuredCategory: category.path } })),
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://pcwhizbuilder-server.vercel.app/categories/${params?.featuredCategory}`);
  const products = await res.json();
  return {
    props: {
      products
    },
    revalidate: 10,
  }
}