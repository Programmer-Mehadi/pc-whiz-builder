import Link from "next/link"

const FeaturedProductSection = () => {

    const itemCategories = [
        { path: 'cpu-processor', value: 'CPU / Processor', url: "./images/featured/cpu.svg" },
        { path: 'motherboard', value: 'Motherboard', url: "./images/featured/motherboard.svg" },
        { path: 'ram', value: 'RAM', url: "./images/featured/ram.svg" },
        { path: 'power-supply-unit', value: 'Power Supply Unit', url: "./images/featured/power-supply-unit.svg" },
        { path: 'storage-device', value: 'Storage Device', url: "./images/featured/storage-device.svg" },
        { path: 'monitor', value: 'Monitor', url: "./images/featured/monitor.svg" },
        { path: 'others', value: 'Others', url: "./images/featured/others.svg" }
    ]


    return (
        <div className="py-16 lg:py-24 px-5 lg:px-8">
            <h2 className="text-center text-3xl font-bold mb-8">Featured Products</h2>
            <div class="container mx-auto grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6  xl:grid-cols-7 ">
                {
                    itemCategories.map((item, index) => {
                        return <Link href={`/categories/${item.path}`} style={{
                                    textDecoration: "none"
                                }}>
                            <div class="bg-white rounded-lg shadow-sm p-6 px-2" style={{
                                border: "1px solid #E5E7EB"
                            }}>
                                <img src={item?.url} alt="Image 2" class="w-full h-16  mb-4 rounded-lg" />
                                <h3 class="text-[13px] font-semibold F text-center text-slate-800">{item?.value}</h3>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProductSection