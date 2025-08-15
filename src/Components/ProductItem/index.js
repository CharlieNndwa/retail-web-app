import Rating from "@mui/material/Rating";
import { BsArrowsFullscreen } from "react-icons/bs";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";

import {  useContext } from "react";
import { MyContext } from "../../App";

const ProductItem = (props) => {

  const context = useContext(MyContext)

  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  }



  return (
   <>
     <div className={`productItem ${props.itemView}`}>
      <div className="imgWrapper">
        <img
          src="https://googro.co.za/cdn/shop/files/mqaCO4gc-LLBH0ymrfoe2YcDl0P0ak0C2qd4Iv502mM.jpg?v=1704628909&width=533"
          className="w-100"
          alt="Best seller product"
        />

        <span className="badge badge-primary">28%</span>

        <div className="actions">
          <Button onClick={() => viewProductDetails(1)}><BsArrowsFullscreen/></Button>
          <Button><IoMdHeartEmpty style={{fontSize: '20px'}}/></Button>
        </div>
      </div>

      <div className="info">
        <h4>Jacobs Kronung Coffee 200g</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
        />

        <div className="d-flex">
          <span className="oldPrice">R162.99</span>
          <span className="netPrice text-danger ml-2">R146.99</span>
        </div>
      </div>
    </div>

   


    {/* <ProductModal/> */}
   </>
  );
};

export default ProductItem;
