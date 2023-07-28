import Banner from "@/components/UI/Banner"
import RootLayout from "@/components/layout/RootLayout"
import Head from "next/head"

export default function Home() {
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

      </main>
    </>

  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}