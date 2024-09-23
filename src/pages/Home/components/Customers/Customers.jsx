import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    name: "Alex K.",
    rating: 5,
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    name: "James L.",
    rating: 5,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on point with the latest trends.",
    verified: true,
  },
];

export default function Customers() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>

        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg min-w-[300px] max-w-[400px]"
              >
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm mb-4">{testimonial.comment}</p>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{testimonial.name}</span>
                  {testimonial.verified && (
                    <span className="text-green-500 text-xs">Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="bg-black text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md text-black"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md font-semibold"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
