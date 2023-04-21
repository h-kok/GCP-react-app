import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ id, img, brand, name, price }) => {
    return (
        <div className={styles.ProductCard}>
            <NavLink to={`/products/${id}`}>
                <img
                    className={styles.ProductCard_Img}
                    src={img}
                    alt="product"
                />
                <p>{brand}</p>
                <p>{name}</p>
                <p>${price}.00</p>
            </NavLink>
        </div>
    );
};

export default ProductCard;
