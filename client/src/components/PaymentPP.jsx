import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../cartSlice";
import toast from "react-hot-toast";
import "../css/Product.css";

const ProductCard = () => {
    const [products] = useState(staticProducts);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.mycart?.cart || []);

    const handleAddToCart = (product) => {
        
        dispatch(addtoCart(product));
        
    };

    return (
       <>
       <div className="product">
           {product.map ((product)=>{
              <div key={product.imageurl} alt={product.name}>
                <p className="product-brand">{product.brand}</p>
                <p  className="product-description">{product.description}</p>
                <div className="product-details">
                     <span className=""></span> {product.price}
                </div>
                <button className="product-button" onClick={()=>{
                    handleAddToCart(product)  }}>
                    admin
                </button>
              </div>
           })}

       </div>
       </>
    );
};

export default ProductCard;
