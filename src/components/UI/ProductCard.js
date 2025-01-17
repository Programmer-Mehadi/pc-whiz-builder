import { addProduct } from '@/redux/features/pcBuilder/pcBuilderSlice';
import { Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
const ProductCard = (product = {}) => {
    const dispatch = useDispatch();
    let {
        image,
        productName,
        category,
        price,
        status,
        rating,
        _id
    } = product.product;
    const array = category.split('-');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    const newCategory = array.join(' ');
    const router = useRouter()

    const handleAdd = () => {
        dispatch(addProduct({
            productImage: image,
            productName,
            price,
            category,
            productId: _id
        }))
        router.push(`/pc-builder`)
    }
    return (
        <div
            className="shadow-sm pb-3 pt-4 px-4 flex justify-between items-center flex-col gap-3 h-full rounded-[8px] hover:shadow-md" style={{
                border: "1px solid #e5e5e5"
            }}
        >
            <div className='w-full flex justify-center mb-8 min-h-[120px]'>
                <img alt={productName} src={image.slice(1)} className='w-[70%] h-auto mx-auto' />
                {/* <Image width={30} height={30} alt={productName} src={image.slice(1)} className='w-[30%] h-auto mx-auto' /> */}
            </div>

            <div className='w-full flex flex-col gap-2'>
                <div className="mb-2">
                    <h3 className="text-xl font-semibold">{productName.slice(0, 30)}{productName.length > 30 && '...'}</h3>
                    <p className="text-gray-500">{newCategory}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-bold">{price} &#2547;</p>
                    <p
                        className={`${status === 'In Stock' ? 'text-green-500' : 'text-red-500'
                            }`}
                    >
                        {status}
                    </p>
                </div>
                <div className="flex items-center">
                    <Rate allowHalf defaultValue={rating} disabled />
                    <span className="ml-2 mt-1">{rating}</span>
                </div>
                <div className='flex-1 flex items-end justify-between mt-1'>
                    {
                        router.asPath.match('pc-builder') ? <div className='w-full no-underline'>
                            <button onClick={() => handleAdd()} className='bg-cyan-700 border-0 py-2 text-base flex justify-center gap-3 items-center px-8 w-full rounded-[6px] text-white cursor-pointer hover:bg-cyan-800 hover:scale-105 transition-all'>Add To Builder
                            </button>
                        </div> : <Link href={`/product/${_id}`} className='w-full no-underline'>
                            <button className='bg-cyan-700 border-0 py-2 text-base flex justify-center gap-3 items-center px-8 w-full rounded-[6px] text-white cursor-pointer hover:bg-cyan-800 hover:scale-105 transition-all'>View more
                            </button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
