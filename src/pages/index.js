import RootLayout from "@/components/layout/RootLayout"

export default function Home() {
  return (
    <main>
      <h1 className="">Home Page</h1>
      {/* 
      
        TODO: atleast 6 pc components (random) (SSG
        TODO: 6 featured categories (SSG)-> every category has a page and show products(atleast 3)
        TODO: 
      
       */}
    </main>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{ page}</RootLayout>
}