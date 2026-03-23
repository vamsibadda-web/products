import React from "react";
import ShoesImg from "./Shoes.jpg";
function Shoes(){
    return(
        <div>
            <img src={ShoesImg} alt="Shoes"
            style={{ width: "200px", height: "auto" }} />
        </div>
    )
}
export default Shoes;