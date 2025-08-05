"use client"

import { ShoppingCart, Eye, Trophy } from "lucide-react"
import { formatPrice } from "../utils/format"

export default function TopPromotionalProducts() {
    const products = [
        {
            id: 1,
            name: "Thuốc giảm cân Calcium Magnesium",
            image: "https://bizweb.dktcdn.net/thumb/medium/100/289/368/products/05.jpg?v=1515659748427",
            badge: "Sale",
            badgeImage: "https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/label_sale.png?1664348152199",
            currentPrice: 470000,
            originalPrice: 850000,
            discount: 45,
            description:
                "Việc giữ gìn vóc dáng từ xa xưa cũng là một trong những mối ưu tiên hàng đầu của phái đẹp. Các loạng y thời xưa đã biết sử dụng...",
            status: "Hết hàng",
            isOutOfStock: false,
        },
        {
            id: 2,
            name: "Thuốc giảm cân Soy Flavo 120mg",
            image: "https://bizweb.dktcdn.net/thumb/medium/100/289/368/products/01.jpg?v=1515659495967",
            badge: "Hot",
            badgeImage: "https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/label_hot.png?1664348152199",
            currentPrice: 385000,
            originalPrice: 550000,
            discount: 30,
            description:
                "Thành phần Soy Flavo bean hộp 30 viên 100% từ nhiên Soy Flavo bean được sản xuất hoàn toàn từ nhiên. Sản phẩm này được kế...",
            status: "Hết hàng",
            isOutOfStock: true,
        },
    ]

    return (
        <div className="w-full bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex items-center mb-8 border-b-2 border-gray-200 pb-4">
                    <Trophy className="w-6 h-6 text-[#5CB021] mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Top sản phẩm khuyến mãi</h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex gap-6 group">
                            {/* Product Image with Hover Actions */}
                            <div className="relative flex-shrink-0">
                                {/* Badge - positioned outside image div */}
                                <div className="absolute -top-2 -right-2 z-10">
                                    <img
                                        src={product.badgeImage || "/placeholder.svg"}
                                        alt={product.badge}
                                        className="w-12 h-12"
                                    />
                                </div>

                                <div className="w-70 h-70 relative overflow-hidden">
                                    <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />

                                    {/* Background Overlay */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ backgroundImage: `url(${product.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-white/50 bg-opacity-40"></div>
                                    </div>

                                    {/* Hover Actions */}
                                    <div className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 z-10">
                                        <button
                                            className={`group/btn p-2 rounded-r transition-all duration-300 shadow-md overflow-hidden w-10 hover:w-45 ${product.isOutOfStock
                                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                    : "bg-gray-700 text-white hover:bg-[#5CB021]"
                                                } flex items-center`}
                                            disabled={product.isOutOfStock}
                                        >
                                            <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                                            <span className="ml-2 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                                Thêm vào giỏ hàng
                                            </span>
                                        </button>
                                        <button className="group/btn p-2 bg-gray-700 text-white rounded-r hover:bg-[#5CB021] transition-all duration-300 shadow-md overflow-hidden w-10 hover:w-32 flex items-center">
                                            <Eye className="w-4 h-4 flex-shrink-0" />
                                            <span className="ml-2 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                                Xem nhanh
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">{product.name}</h3>

                                {/* Price */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl font-bold text-[#5CB021]">{formatPrice(product.currentPrice)}</span>
                                    <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                                    <span className="bg-yellow-400 text-white text-sm font-semibold px-2 py-1">
                                        -{product.discount}%
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                                {/* Stock Status */}
                                <div className="flex items-center">
                                    <span className={`text-sm font-medium ${product.isOutOfStock ? "text-red-500" : "text-[#5CB021]"}`}>
                                        {product.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
