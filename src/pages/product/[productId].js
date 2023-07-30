import RootLayout from '@/components/layout/RootLayout';
import { ShoppingCartOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
const ProductDetailsPage = ({ product = {} }) => {
  const array = product?.category.split('-');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  product.category = array.join(' ');
  return (
    <>
    <Head>
      <title>{product?.productName}</title>
    </Head>
      <div>
        <div className="max-w-3xl mx-auto p-4 mt-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="order-2 self-center">
              <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>
              <p className="text-gray-500 mb-4">{product.category}</p>
              <div className="flex items-center mb-4">
                <Rate allowHalf defaultValue={product.rating} disabled />
                <span className="ml-2 mt-2">{product.rating}</span>
              </div>
              <p className="text-lg font-bold">{product.price} &#2547;</p>
              <p className={`text-green-500 ${product.status === 'Out of Stock' && 'text-red-500'}`}>
                {product.status}
              </p>
              <div className='my-7 flex gap-4 items-center'>
                <button className='bg-gray-300 text-black border-0 py-[2px] px-3 text-lg rounded-[4px] cursor-pointer'>-</button>
                <span>{1}</span>
                <button className='bg-gray-300 text-black border-0 py-[2px] px-3 text-lg rounded-[4px] cursor-pointer'>+</button>
              </div>

              <div className='mt-6 flex gap-6'>
                <button className='bg-cyan-800 hover:bg-cyan-700 hover:scale-105 transition-all text-white border-0 py-2 px-5 text-base rounded-[4px] cursor-pointer flex gap-3 items-center'><ShoppingCartOutlined />Add to Cart</button>
                <button className='bg-cyan-800 hover:bg-cyan-700 hover:scale-105 transition-all text-white border-0 py-2 px-5 text-base rounded-[4px] cursor-pointer flex gap-3 items-center'><VideoCameraOutlined />Watch Vieo</button>
              </div>
            </div>
            <div className="order-1">
              <img src={product.image.slice(1)} alt={product.productName} className="w-full h-auto rounded-lg" />
              {/* <Image width={300} height={300} src={product.image.slice(1)} alt={product.productName} className="w-full h-auto rounded-lg" /> */}
            </div>
          </div>
          <hr className='mt-8' />

          <div className="my-6 border-t-2 pt-4">
            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
            <ul>
              {Object.entries(product.keyFeatures).map(([key, value]) => (
                <li key={key} className="flex py-2">
                  <span className="font-semibold mr-2">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="my-6 border-t-2 pt-4">
            <h2 className="text-xl font-semibold mt-4">Product Description:</h2>
            <p className="text-gray-700 mt-4">{product.description}</p>
          </div>
          <hr />
          <div className="my-6 border-t-2 pt-4">
            <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
            <div className="">
              {product.reviews.map((review) => (
                <div key={review.username} className="border  py-4" style={{
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <p className="text-gray-600 text-[15px] mb-2">{review.username} - {review.date}</p>
                  <p className="text-gray-700 text-lg font-semibold mb-2">{review.comment}</p>
                  <div className="flex items-center mb-2">
                    <Rate allowHalf defaultValue={review.rating} disabled />
                    <span className="ml-2 mt-1">{review.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage



ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
  const res = await fetch('https://pcwhizbuilder-server.vercel.app/products');
  const products = await res.json();
  return {
    paths: products.map((product) => ({ params: { productId: product._id } })),
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const res = await fetch(`https://pcwhizbuilder-server.vercel.app/products/${context?.params?.productId}`);
  const product = await res.json();
  return {
    props: {
      product
    },
    revalidate: 10,
  }
}