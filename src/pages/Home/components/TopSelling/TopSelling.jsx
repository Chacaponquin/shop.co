import { Star } from "lucide-react";

const products = [
  {
    name: "Vertical Striped Shirt",
    rating: 4.5,
    reviews: 120,
    price: 212,
    originalPrice: 232,
    discount: 10,
    img: "/product.jpg",
  },
  {
    name: "Courage Graphic T-shirt",
    rating: 3.5,
    reviews: 85,
    price: 145,
    img: "/product.jpg",
  },
  {
    name: "Loose Fit Bermuda Shorts",
    rating: 4,
    reviews: 56,
    price: 80,
    img: "/product.jpg",
  },
  {
    name: "Faded Skinny Jeans",
    rating: 4.5,
    reviews: 23,
    price: 210,
    img: "/product.jpg",
  },
];

export default function TopSelling() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Top Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <img
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                ({product.reviews})
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-lg">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-sm text-red-500 ml-2">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          View All
        </a>
      </div>
    </section>
  );
}
