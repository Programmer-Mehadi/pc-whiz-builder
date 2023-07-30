import Image from "next/image"
import Link from "next/link"

const FeaturedProductSection = ({itemCategories}) => {



    return (
        <div className="py-16 lg:py-24 px-5 lg:px-8 pb-24">
            <h2 className="text-center text-3xl font-bold mb-8">Featured Categories</h2>
            <div className="container mx-auto grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6  xl:grid-cols-7 ">
                {
                    itemCategories.map((item, index) => {
                        return <Link key={index} href={`/categories/${item.path}`} style={{
                            textDecoration: "none"
                        }}>
                            <div className="bg-white rounded-lg shadow-sm p-6 px-2" style={{
                                border: "1px solid #E5E7EB"
                            }}>
                                <img src={item?.url} alt="Image 2" className="w-full h-16  mb-4 rounded-lg" />
                                {/* <Image src={item?.url} width={200} height={200} alt="Image 2" className="w-full h-16  mb-4 rounded-lg" /> */}
                                <h3 className="text-[13px] font-semibold F text-center text-slate-800">{item?.value}</h3>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProductSection;
