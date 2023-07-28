import Banner from "@/components/UI/Banner";
import FeaturedProductSection from "@/components/UI/FeaturedProductSection";
import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

export default function Home({ products }) {
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
        <FeaturedProductSection></FeaturedProductSection>
        <section className="px-5 py-16 pb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {
              products && products.map((product) => {
                return <ProductCard product={product} key={product._id} />
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/products/random-products');
  const products = await res.json();
  return {
    props: {
      products
    }
  }
}