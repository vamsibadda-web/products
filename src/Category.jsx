import React, { useState } from "react";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Headphone from "./Headphone";
import Watch from "./Watch";
import Shoes from './Shoes'

function ProductSearch() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, title: "laptop", price: 50000, image: Laptop },
    { id: 2, title: "mobile", price: 20000, image: Mobile },
    { id: 3, title: "headphone", price: 2000, image: Headphone },
    { id: 4, title: "watch", price: 5000, image:Watch },
    { id: 5, title: "shoes", price: 10000, image:Shoes}
  ];

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Products
        </h1>

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleSearch}
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
               const ImageComponent = product.image;

              return (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                      <ImageComponent />
                  </div>

                  <h3 className="text-lg font-semibold capitalize text-gray-700">
                    {product.title}
                  </h3>

                  <p className="text-blue-600 font-bold mt-2">
                    ₹{product.price}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No product found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductSearch;
