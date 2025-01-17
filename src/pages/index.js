import Banner from "@/components/UI/Banner";
import FeaturedProductSection from "@/components/UI/FeaturedProductSection";
import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

export default function Home({ products, itemCategories }) {
  return (
    <>
      <Head>
        <title>Home-PcWhizBuilder</title>
        <meta
          name="description"
          content="PcWhizBuilder is an advanced and user-friendly online platform that empowers tech enthusiasts and PC builders to effortlessly create their dream custom PCs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner></Banner>
        <section className="px-5 py-16 pb-14">
          <h2 className="text-center text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {
              products && products.map((product) => {
                return <ProductCard product={product} key={product._id} />
              })
            }
          </div>
        </section>
        <FeaturedProductSection itemCategories={itemCategories}></FeaturedProductSection>
      </main>
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
  const res = await fetch('https://pcwhizbuilder-server.vercel.app/products/random-products');
  const products = await res.json();
  const catRes = await fetch('https://pcwhizbuilder-server.vercel.app/categories');
  const itemCategories = await catRes.json();
  return {
    props: {
      products, itemCategories
    },
    revalidate: 1
  }
}
