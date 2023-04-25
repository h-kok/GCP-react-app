import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ id, img, brand, name, price }) => {
    return (
        <NavLink to={`/products/${id}`} className={styles.ProductCard_Link}>
            <div className={styles.ProductCard}>
                <img
                    className={styles.ProductCard_Img}
                    src={img}
                    alt="product"
                />
                <p className={styles.ProductCard_Brand}>{brand}</p>
                <p>{name}</p>
                <p>${price}.00</p>
            </div>
        </NavLink>
    );
};

export default ProductCard;
