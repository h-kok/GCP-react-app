import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductCard = ({ id, img, brand, name, price }) => {
    return (
        <div>
            <NavLink to={`products/${id}`}>
                <img src={img} alt="product" />
                <p>{brand}</p>
                <p>{name}</p>
                <p>{price}</p>
            </NavLink>
        </div>
    );
};

export default ProductCard;
