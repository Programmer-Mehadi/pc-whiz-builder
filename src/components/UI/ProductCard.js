import { Rate } from 'antd';
import Link from 'next/link';

const ProductCard = (product) => {
    let {
        image,
        productName,
        category,
        price,
        status,
        rating,
        _id
    } = product.product;
    const itemCategories = [
        'cpu-processor',
        'motherboard',
        'ram',
        'power-supply-unit',
        'storage-device',
        'monitor',
        'others'
    ]
    if (itemCategories.includes(category)) {
        const array = category.split('-');
        for(let i = 0; i < array.length; i++) {
            array[i] = array[i][0].toUpperCase() + array[i].slice(1);
        }
        category = array.join(' ');
    }
    return (
        <div
            className="shadow-sm pb-3 pt-4 px-4 flex justify-between items-center flex-col gap-3 h-full rounded-[8px]" style={{
                border: "1px solid #e5e5e5"
            }}
        >
            <div className='w-full flex justify-center mb-8 min-h-[120px]'>
                <img alt={productName} src={image} className='w-[70%] h-auto mx-auto' />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <div className="mb-2">
                    <h3 className="text-xl font-semibold">{productName.slice(0, 30)}{productName.length > 30 && '...'}</h3>
                    <p className="text-gray-500">{category}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-bold">${price}</p>
                    <p
                        className={`${status === 'In Stock' ? 'text-green-500' : 'text-red-500'
                            }`}
                    >
                        {status}
                    </p>
                </div>
                <div className="flex items-center">
                    <Rate allowHalf defaultValue={rating} disabled />
                    <span className="ml-2">{rating}</span>
                </div>
                <div className='flex-1 flex items-end justify-center'>
                    <Link href={`/product/${_id}`} className='w-full'>
                        <button className='bg-slate-700 border-0 py-3 px-8 w-full rounded-[8px] text-white cursor-pointer'>View more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
