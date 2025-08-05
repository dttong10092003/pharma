export default function HeroBanner() {
  return (
    <div className="w-full border-b border-gray-200">
      {/* Main Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img src="https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/slider_1.jpg?1753157548384" alt="Dielac Grow Plus Banner" className="w-full h-full object-cover" />
      </div>

      {/* Services Section */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
            {/* Service 1 - Giao hàng 24h */}
            <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <img src="https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/service1.png?1753157548384" alt="Giao hàng 24h" className="w-15" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#5CB021] mb-1">Giao hàng trong 24h</h3>
                <p className="text-gray-600 text-sm">Miễn phí giao hàng với đơn hàng trên 500.000 đ</p>
              </div>
            </div>

            {/* Service 2 - Sản phẩm 100% chính hãng */}
            <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors md:pl-8">
              <div className="flex-shrink-0">
                <img
                  src="https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/service2.png?1753157548384"
                  alt="Sản phẩm 100% chính hãng"
                  className="w-12"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#5CB021] mb-1">Sản phẩm 100% chính hãng</h3>
                <p className="text-gray-600 text-sm">Cam kết 100% sản phẩm nhập khẩu chính hãng</p>
              </div>
            </div>

            {/* Service 3 - Đặt hàng nhanh chóng */}
            <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors md:pl-8">
              <div className="flex-shrink-0">
                <img
                  src="https://bizweb.dktcdn.net/100/289/368/themes/895125/assets/service3.png?1753157548384"
                  alt="Đặt hàng nhanh chóng"
                  className="w-12"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#5CB021] mb-1">Đặt hàng nhanh chóng</h3>
                <p className="text-gray-600 text-sm">
                  Gọi ngay: <span className="font-semibold text-[#5CB021]">1900 6750</span> để đặt hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
