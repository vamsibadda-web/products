import React, { useState } from "react";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Headphone from "./Headphone";
import Watch from "./Watch";
import Shoes from "./Shoes";
function Category(){
    const[search,setsearch]=useState("")
    const [category, setCategory] = useState("all");
    const products=[
        {id:1,title:"laptop",price:50000,category: "electronics", image:Laptop},
        {id:2,title:"mobile",price:20000,category: "electronics",image:Mobile},
        {id:3,title:"headphone",price:2000,category: "accessories",image:Headphone},
        {id:4,title:"Watch",price:10000,category: "accessories",image:Watch},
        {id:3,title:"Shoes",price:5000,category: "Footware",image:Shoes}
    ]
    function handleSearch(event){
        setsearch(event.target.value);
    }
    const filteredProducts = products.filter(function (product) {
  return (
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || product.category === category)
  );
});
    return (
        <div>
            <h1>Product Search</h1>
            <input type="text" 
            placeholder="Search product"
            value={search}
            onChange={handleSearch}/>
            <select onChange={(e) => setCategory(e.target.value)}>
  <option value="all">All</option>
  <option value="electronics">Electronics</option>
  <option value="accessories">Accessories</option>
  <option value="Footware">Footware</option>
</select>
            
           {filteredProducts.map(function (product) {
            const Imagecomponent=product.image
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>price: {product.price}</p>
                        <Imagecomponent/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Category;