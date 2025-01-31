import { FaStar } from "react-icons/fa";
import "../styles/Cart.css";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="Box-Cart">
        <img className="Cart-Image" src={product.image} alt="" />
        <h3 className="Cart-Title">{product.title}</h3>
        <p className="Cart-Description">{product.description}</p>
        <div className="Cart-Komponent">
          <img className="Cart-Avatar" src={product.Avatar} alt="" />
          <ul className="Cart-List">
            <li>
              <span className="Cart-Name">{product.nama}</span>
            </li>
            <li>
              <p className="Cart-NameRq">{product.nameRq}</p>
            </li>
          </ul>
        </div>
        <div className="Cart-Icon">
          <div className="Icon-Star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>
            <p className="Cart-Harga">{product.Harga}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
