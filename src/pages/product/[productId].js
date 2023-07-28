import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

const ProductDetailsPage = () => {
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage



ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
