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
    <div className="container">
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={handleSearch}
        className="search-box"
      />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const ImageComponent = product.image;

            return (
              <div key={product.id} className="product-card">
                <ImageComponent />
                <h3 className="product-title">{product.title}</h3>
                <p className="price">Price: ₹{product.price}</p>
              </div>
            );
          })
        ) : (
          <p>No product found</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;