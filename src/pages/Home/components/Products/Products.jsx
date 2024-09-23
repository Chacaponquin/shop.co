import { Star } from "lucide-react";

const products = [
  {
    name: "Gradient Graphic T-shirt",
    rating: 5,
    reviews: 55,
    price: 145,
    image: "/product.jpg",
  },
  {
    name: "Polo with Tipping Details",
    rating: 4.5,
    reviews: 55,
    price: 180,
    image: "/product.jpg",
  },
  {
    name: "Black Striped T-shirt",
    rating: 4.5,
    reviews: 55,
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: "/product.jpg",
  },
  {
    name: "Black Striped T-shirt",
    rating: 4.5,
    reviews: 55,
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: "/product.jpg",
  },
  {
    name: "Skinny Fit Jeans",
    rating: 5,
    reviews: 55,
    price: 240,
    originalPrice: 260,
    discount: 8,
    image: "/product.jpg",
  },
  {
    name: "Checkered Shirt",
    rating: 4.5,
    reviews: 55,
    price: 180,
    image: "/product.jpg",
  },
  {
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    reviews: 55,
    price: 130,
    originalPrice: 160,
    discount: 20,
    image: "/product.jpg",
  },
  {
    name: "Black Striped T-shirt",
    rating: 4.5,
    reviews: 55,
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: "/product.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <img
              src={product.image}
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
    </section>
  );
}
