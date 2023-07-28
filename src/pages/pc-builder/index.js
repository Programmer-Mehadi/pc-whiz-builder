import RootLayout from '@/components/layout/RootLayout'
import React from 'react'

const PcBuilderPage = () => {
  return (
    <div>PcBuilderPage</div>
  )
}

export default PcBuilderPage


PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{ page}</RootLayout>
}