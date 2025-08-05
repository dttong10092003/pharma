import { useState, useEffect } from "react"
import { ChevronDown, Search, ShoppingCart, Menu, MapPin, Phone, Star, ChevronRight } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isSearchCategoryOpen, setIsSearchCategoryOpen] = useState(false)
    const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false)
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("Chọn danh mục")

    const categories = [
        { name: "Thuốc Bổ Nhân Sâm", badge: "Sale", badgeColor: "bg-green-500" },
        { 
            name: "Thực Phẩm Chức Năng", 
            hasSubmenu: true,
            submenu: {
                "Sức khỏe dinh dưỡng": [
                    "Thuốc bổ cho trẻ",
                    "Tim mạch",
                    "Huyết áp",
                    "Hệ tiêu hóa"
                ],
                "Chăm sóc da": [
                    "Dưỡng da",
                    "Chống lão hóa",
                    "Trắng da",
                    "Trị thâm"
                ],
                "Trị mụn nám": [
                    "Trị tàn nhang",
                    "Kem trị nhờn",
                    "Tái tạo da",
                    "Hồi phục da"
                ],
                "Chăm sóc cơ thể": [
                    "Kem chống nắng",
                    "Kem dưỡng da",
                    "Sữa dưỡng thể",
                    "Kem đặc trị"
                ],
                "Nhân sâm bổ": [],
                "Thuốc tăng cân": []
            }
        },
        { name: "Thuốc Xương Khớp", badge: "Hot", badgeColor: "bg-orange-500" },
        { name: "Thuốc Giảm Cân" },
        { name: "Dược Phẩm Ngoại", badge: "New", badgeColor: "bg-yellow-500" },
        { name: "Vitamin Khoáng Chất" },
        { name: "Nha Khoa Thẩm Mỹ" },
        { name: "Thiết Bị Y Tế" },
        { name: "Sản Phẩm Mới" },
        { name: "Xem Thêm" },
    ]

    const searchCategories = [
        "Sản phẩm khuyến mãi",
        "Có thể bạn thích",
        "Lựa chọn của bạn",
        "Hỗi phục da",
        "Tái tạo da",
        "Kem trị nhờn",
        "Trị tàn nhang",
        "Kem đặc trị",
        "Sữa dưỡng thể",
        "Kem dưỡng da",
        "Kem chống nắng",
        "Trị thâm",
        "Trắng da",
        "Tất cả",
    ]

    const newsCategories = [
        "Sức khỏe",
        "Làm đẹp",
        "Dinh dưỡng cho bé",
        "Gương mặt trẻ"
    ]

    const productCategories = [
        { name: "Thuốc bổ nhân sâm", hasSubmenu: false },
        {
            name: "Thực phẩm chức năng",
            hasSubmenu: true,
            submenu: [
                "Sức khỏe dinh dưỡng",
                "Chăm sóc da",
                "Trị mụn nám",
                "Chăm sóc cơ thể",
                "Nhãn sâm bổ",
                "Thuốc tăng cân"
            ]
        },
        { name: "Thuốc xương khớp", hasSubmenu: false },
        { name: "Thuốc giảm cân", hasSubmenu: false },
        { name: "Dược phẩm ngoại", hasSubmenu: false },
        { name: "Vitamin khoáng chất", hasSubmenu: false },
        { name: "Nha khoa thẩm mỹ", hasSubmenu: false },
        { name: "Thiết bị y tế", hasSubmenu: false },
        { name: "Sản phẩm mới", hasSubmenu: false }
    ]

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isSearchCategoryOpen && !target.closest('.dropdown-container')) {
                setIsSearchCategoryOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isSearchCategoryOpen])

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-1 text-[#5CB021]" />
                            <span>Địa chỉ: Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội</span>
                        </div>
                        <div className="text-[#5CB021] font-medium">CHÀO MỪNG BẠN ĐẾN VỚI PHARMACY</div>
                        <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center cursor-pointer">
                                <Star className="w-4 h-4 text-orange-400 mr-1" />
                                <span className="hover:text-[#5CB021]">Khuyến mãi hot</span>
                            </div>
                            <span className="hover:text-[#5CB021] cursor-pointer">Đăng ký</span>
                            <span className="hover:text-[#5CB021] cursor-pointer">Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - 2 Row Layout */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    {/* Top Row: Logo | Navigation Menu | Phone Contact */}
                    <div className="grid grid-cols-12 gap-4 items-center mb-4">
                        {/* Left - Logo */}
                        <div className="col-span-3">
                            <div className="flex items-center">
                                <img src="https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/logo.png?1753157548384" alt="Pharmacy Logo" className="h-12 w-auto" />
                            </div>
                        </div>

                        {/* Center - Navigation Menu */}
                        <div className="col-span-6">
                            <nav className="flex items-center justify-center space-x-6 text-sm">
                                <a href="#" className="text-gray-700 hover:text-[#5CB021] font-medium">
                                    TRANG CHỦ
                                </a>
                                <a href="#" className="text-gray-700 hover:text-[#5CB021] font-medium">
                                    GIỚI THIỆU
                                </a>
                                <div className="relative group">
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-[#5CB021] font-medium flex items-center"
                                        onMouseEnter={() => setIsProductDropdownOpen(true)}
                                        onMouseLeave={() => setIsProductDropdownOpen(false)}
                                    >
                                        SẢN PHẨM
                                        <div className="relative ml-1">
                                            <span className="absolute -top-5 -left-2 px-1.5 py-0.5 bg-orange-500 text-white text-xs rounded">Hot</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </a>

                                    {/* Product Dropdown Menu */}
                                    {isProductDropdownOpen && (
                                        <div
                                            className="absolute top-full -left-2 w-56 bg-white border border-gray-200 z-50 border-t-[#5CB021]"
                                            onMouseEnter={() => setIsProductDropdownOpen(true)}
                                            onMouseLeave={() => setIsProductDropdownOpen(false)}
                                        >
                                            <div className="border-r border-gray-200">
                                                {productCategories.map((product, index) => (
                                                    <div key={index} className="relative group/item">
                                                        <div className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 text-gray-700 hover:text-[#5CB021] border-b border-gray-100 flex items-center justify-between">
                                                            <span>{product.name}</span>
                                                            {product.hasSubmenu && <ChevronRight className="w-4 h-4 text-[#5CB021]" />}
                                                        </div>

                                                        {/* Submenu for Thực phẩm chức năng */}
                                                        {product.hasSubmenu && (
                                                            <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 border-t-[#5CB021] hidden group-hover/item:block z-60">
                                                                {product.submenu?.map((subItem, subIndex) => (
                                                                    <div
                                                                        key={subIndex}
                                                                        className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 text-gray-700 hover:text-[#5CB021] border-b border-gray-100 last:border-b-0"
                                                                    >
                                                                        {subItem}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="relative group">
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-[#5CB021] font-medium flex items-center"
                                        onMouseEnter={() => setIsNewsDropdownOpen(true)}
                                        onMouseLeave={() => setIsNewsDropdownOpen(false)}
                                    >
                                        TIN TỨC
                                        <ChevronDown className="w-4 h-4 ml-1" />
                                    </a>

                                    {/* News Dropdown Menu */}
                                    {isNewsDropdownOpen && (
                                        <div
                                            className="absolute top-full -left-2 w-48 bg-white border border-gray-200 z-50 border-t-[#5CB021]"
                                            onMouseEnter={() => setIsNewsDropdownOpen(true)}
                                            onMouseLeave={() => setIsNewsDropdownOpen(false)}
                                        >
                                            {newsCategories.map((newsCategory, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 text-gray-700 hover:text-[#5CB021] border-b border-gray-100 last:border-b-0"
                                                >
                                                    {newsCategory}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <a href="#" className="text-gray-700 hover:text-[#5CB021] font-medium">
                                    TUYỂN DỤNG
                                </a>
                                <a href="#" className="text-gray-700 hover:text-[#5CB021] font-medium">
                                    LIÊN HỆ
                                </a>
                            </nav>
                        </div>

                        {/* Right - Phone Contact & Mobile Menu Button */}
                        <div className="col-span-3">
                            <div className="flex items-center justify-end space-x-4">
                                {/* Mobile Menu Button */}
                                <button
                                    className="lg:hidden p-2 text-gray-600 hover:text-green-600"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <Menu className="w-6 h-6" />
                                </button>

                                {/* Phone Contact */}
                                <div className="flex items-center text-[#5CB021]">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-700">Đặt hàng nhanh</p>
                                        <p className="text-lg font-bold">1800 6750</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Category Button | Search Bar | Shopping Cart */}
                    <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Left - Category Button */}
                        <div className="col-span-3 max-w-70">
                            <div
                                className="relative"
                                onMouseEnter={() => setIsCategoryOpen(true)}
                                onMouseLeave={() => setIsCategoryOpen(false)}
                            >
                                <button className="h-10 bg-[#5CB021] text-white px-4 py-3 rounded-t flex items-center justify-between space-x-2 w-full">
                                    <span className="font-medium">DANH MỤC SẢN PHẨM</span>
                                    <Menu className="w-5 h-5" />
                                </button>

                                {/* Category Sidebar */}
                                {isCategoryOpen && (
                                    <div className="absolute left-0 top-full bg-white border-2 border-[#5CB021] z-50 mt-0 w-full">
                                        {/* Categories List */}
                                        {categories.map((category, index) => (
                                            <div key={index} className="border-b border-gray-100 last:border-b-0 relative group/category">
                                                <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer group">
                                                    <div className="flex items-center">
                                                        <div className="w-1 h-1 bg-[#5CB021] mr-3"></div>
                                                        <span className="text-gray-700 group-hover:text-[#5CB021]">{category.name}</span>
                                                        {category.badge && (
                                                            <span className={`ml-2 mb-5 px-2 text-xs text-white ${category.badgeColor}`}>
                                                                {category.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {category.hasSubmenu && <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#5CB021]" />}
                                                </div>

                                                {/* Submenu for categories with hasSubmenu */}
                                                {category.hasSubmenu && category.submenu && (
                                                    <div className="absolute left-full -top-10 w-242 bg-white border border-gray-200 hidden group-hover/category:block z-60">
                                                        <div className="p-6">
                                                            <div className="grid grid-cols-4 gap-8">
                                                                {Object.entries(category.submenu).map(([mainCategory, subItems], categoryIndex) => (
                                                                    <div key={categoryIndex}>
                                                                        <a 
                                                                            href="#" 
                                                                            className="block font-semibold text-gray-800 mb-3 hover:text-[#5CB021] transition-colors duration-200"
                                                                        >
                                                                            {mainCategory}
                                                                        </a>
                                                                        {subItems.length > 0 && (
                                                                            <div className="space-y-2">
                                                                                {subItems.map((subItem, subIndex) => (
                                                                                    <a
                                                                                        key={subIndex}
                                                                                        href="#"
                                                                                        className="block text-sm cursor-pointer text-gray-600 hover:text-[#5CB021] py-1 transition-colors duration-200"
                                                                                    >
                                                                                        {subItem}
                                                                                    </a>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Center - Search Bar */}
                        <div className="col-span-6">
                            <div className="flex h-10">
                                {/* Custom Dropdown */}
                                <div className="relative dropdown-container">
                                    <button
                                        className="border border-gray-300 px-3 py-2 bg-white text-gray-700 rounded-l border-r-0 text-sm h-full flex items-center justify-between min-w-[140px]"
                                        onClick={() => setIsSearchCategoryOpen(!isSearchCategoryOpen)}
                                    >
                                        <span>{selectedCategory}</span>
                                        <ChevronDown className="w-4 h-4 ml-2" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isSearchCategoryOpen && (
                                        <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
                                            {searchCategories.map((category, index) => {
                                                const isSelected = category === selectedCategory;
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`px-3 py-2 text-sm cursor-pointer transition-colors duration-200 ${isSelected
                                                            ? 'bg-[#5CB021] text-white'
                                                            : 'text-gray-700 hover:bg-[#5CB021] hover:text-white'
                                                            }`}
                                                        onClick={() => {
                                                            console.log('Clicked:', category); // Debug log
                                                            setSelectedCategory(category)
                                                            setIsSearchCategoryOpen(false)
                                                        }}
                                                    >
                                                        {category}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Bạn muốn tìm sản phẩm gì..."
                                    className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#5CB021] text-sm h-full"
                                />
                                <button className="bg-[#5CB021] text-white px-6 py-2 rounded-r hover:bg-green-700 h-full">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right - Shopping Cart */}
                        <div className="col-span-3">
                            <div className="flex justify-end">
                                <button className="h-10 border-2 border-[#5CB021] text-[#5CB021] px-4 py-3 rounded flex items-center space-x-2 hover:bg-green-50">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Giỏ hàng (0)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-4 py-2 space-y-2">
                        <a href="#" className="block py-2 text-gray-700 hover:text-[#5CB021]">
                            TRANG CHỦ
                        </a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-[#5CB021]">
                            GIỚI THIỆU
                        </a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-[#5CB021]">
                            SẢN PHẨM
                        </a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-[#5CB021]">
                            TIN TỨC
                        </a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-[#5CB021]">
                            TUYỂN DỤNG
                        </a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-[#5CB021]">
                            LIÊN HỆ
                        </a>
                    </div>
                </div>
            )}

        </header>
    )
}
