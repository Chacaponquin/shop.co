import { ShoppingCart, Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">SHOP.CO</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-sm font-medium">
            Shop
          </a>
          <a href="#" className="text-sm font-medium">
            On Sale
          </a>
          <a href="#" className="text-sm font-medium">
            New Arrivals
          </a>
          <a href="#" className="text-sm font-medium">
            Brands
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none focus:outline-none ml-2 text-sm"
            />
          </div>
          <ShoppingCart className="w-6 h-6" />
        </div>
      </header>

      <main className="flex flex-col md:flex-row gap-x-12 items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
            Shop Now
          </button>
          <div className="flex justify-between mt-12">
            <div>
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">2,000+</h3>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">30,000+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <img
            src="/shop.jpg"
            alt="header"
            width={600}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full flex items-center justify-center -mt-8 -mr-8">
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center -mb-8 -ml-8">
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
