import RootLayout from '@/components/layout/RootLayout'
import { removeProduct } from '@/redux/features/pcBuilder/pcBuilderSlice'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const PcBuilderPage = () => {

  const { itemCategories, sum, fullFill } = useSelector(state => state.pcBuilder)
  const dispatch = useDispatch();
  const handleRemove = (path) => {
    dispatch(removeProduct({
      category: path
    }))
  }
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
                    return <tr key={index}>
                      <td class="px-6 py-3 w-[15%]">
                        {
                          item?.productImage === "" ? <img src={item.url.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" /> : <img src={item?.productImage.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" />
                        }
                        {/* {
                          item?.productImage === "" ? <Image width={50} height={50} src={item.url.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" /> : <Image width={50} height={50} src={item?.productImage.slice(1)} className='w-full max-w-[50px]' alt="dfgfdgfd" />
                        } */}
                      </td>
                      <td class=" px-6 py-3 w-[53%]">
                        <div>
                          <p className='my-1 text-sm'>{item.value} {index + 1 < 7 && <span className='text-base text-red-600'>*</span>}</p>
                          {
                            item?.productName !== "" ? <p className='text-sm'>{item.productName}</p> : <p className='bg-gray-200 py-1'></p>
                          }
                        </div>
                      </td>
                      <td class=" px-6 py-3 w-[15%]">
                        {
                          item.price !== "" ? <p className='text-sm'>{item.price} &#2547;</p> : <p className='bg-gray-200 py-1'></p>
                        }
                      </td>
                      <td class=" px-6 py-3 w-[15%]">
                        <div>
                          {
                            item?.productImage !== "" && item?.productName !== "" && item?.price !== "" ? <div onClick={() => handleRemove(item?.path)}> <button className='bg-red-900 hover:bg-red-700 hover:scale-105 transition-all text-white border-0 py-1 px-3 text-sm rounded-[4px] cursor-pointer'>X</button></div> : <Link href={`/pc-builder/${item?.path}`}>
                              <button className='bg-blue-900 hover:bg-blue-700 hover:scale-105 transition-all text-white border-0 py-1 px-3 text-sm rounded-[4px] cursor-pointer'>Choose</button>
                            </Link>
                          }
                        </div>
                      </td>
                    </tr>
                  })
                }
              </tbody>
              <tfoot>
                <tr style={{
                  backgroundColor: "#e5e5e5"
                }}>
                  <td colSpan={2} className='text-right py-3 px-4'>
                    <p className='font-bold'>Total Price</p>
                  </td>
                  <td>
                    {
                      sum !== "" ? <p className='text-base text-center font-medium'>{sum} &#2547;</p> : <p className='bg-gray-200 py-1'></p>
                    }
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    {
                      fullFill === 6 ? <div className='py-4 px-4 flex justify-end'> <button onClick={() => {
                        toast.success("Congratulations! Your build has been completed successfully 🚀")
                      }} className='bg-green-900 hover:bg-green-700 hover:scale-105 transition-all text-white border-0 py-2 px-5 text-base rounded-[4px] cursor-pointer w-fit'>Complete Build button</button></div> :
                        <div className='py-4 px-4 flex justify-end'> <button className='bg-gray-300 hover:bg-gray-300 transition-all text-slate-500 cursor-not-allowed border-0 py-2 px-5 text-base rounded-[4px] w-fit'>Complete Build button</button></div>
                    }

                  </td>
                </tr>
              </tfoot>
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


