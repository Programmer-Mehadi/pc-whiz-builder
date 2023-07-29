import RootLayout from '@/components/layout/RootLayout'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const PcBuilderPage = () => {

  const {itemCategories} = useSelector(state => state.pcBuilder)
  console.log(itemCategories[0]);
  return (
    <>
      <Head>
        <title>PC Build - PcWhizBuilder</title>
      </Head>
      <section className='py-10 px-2 md:px-5'>
        <div className='max-w-[800px] mx-auto shadow border  py-8 px-5' style={{
          border: '1px solid #e5e5e5'
        }}>
          <p className='text-bse bg-cyan-700 text-white pl-2 py-2 text-center'>Select Components</p>

          <div className='overflow-auto'>
            <table class="mt-5 w-full border-collapse">
              <thead className='text-left text-xs md:text-base bg-gray-800 text-white'>
                <tr>
                  <td class="px-6 py-3">Image</td>
                  <td class="px-6 py-3">Product Name</td>
                  <td class="px-6 py-3">Price</td>
                  <td class="px-6 py-3">Actions</td>
                </tr>
              </thead>
              <tbody className='overflow-auto'>
                {
                  itemCategories.map((item, index) => {
                    return <tr>
                      <td class="px-6 py-3 w-[15%]">
                        {
                          item?.productImage === "" ?  <img src={item.url.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" /> :  <img src={item.productImage.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" />
                       }
                      </td>
                      <td class=" px-6 py-3 w-[53%]">
                        <div>
                          <p className='my-1 text-sm'>{item.value}</p>
                          {
                            item?.productName !== "" ? <p className='text-sm'>{item.productName}</p> :  <p className='bg-gray-200 py-1'></p>
                         }
                        </div>
                      </td>
                      <td class=" px-6 py-3 w-[15%]">
                        {
                          item.price !== "" ? <p className='text-sm'>{item.price}</p> :  <p className='bg-gray-200 py-1'></p>
                        }
                      </td>
                      <td class=" px-6 py-3 w-[15%]">
                        <div>
                          {
                            item?.productImage !== "" && item?.productName !== "" && item?.price !== "" ? <button className='bg-red-900 hover:bg-red-700 hover:scale-105 transition-all text-white border-0 py-1 px-3 text-sm rounded-[4px] cursor-pointer'>X</button> : <button className='bg-green-900 hover:bg-green-700 hover:scale-105 transition-all text-white border-0 py-1 px-3 text-sm rounded-[4px] cursor-pointer'>Choose</button>
                          }
                        </div>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default PcBuilderPage


PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


