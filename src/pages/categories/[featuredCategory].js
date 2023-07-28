import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

const FeaturedCategoryProductPage = () => {
  return (
    <div>FeaturedCategoryProductPage</div>
  )
}

export default FeaturedCategoryProductPage



FeaturedCategoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{ page}</RootLayout>
}