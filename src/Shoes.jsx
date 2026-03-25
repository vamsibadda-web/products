import React from "react";
import ShoesImg from "./assets/images/shoes.jpg"; // lowercase

function Shoes() {
  return (
    <div>
      <img
        src={ShoesImg}
        alt="Shoes"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}
export default Shoes;