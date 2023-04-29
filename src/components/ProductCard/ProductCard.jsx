import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ item }) => {
    return (
        <NavLink
            to={`/eCommerce-App/products/${item.id}`}
            className={styles.ProductCard_Link}
        >
            <div className={styles.ProductCard}>
                <img
                    className={styles.ProductCard_Img}
                    src={item.image[0]}
                    alt="product"
                />
                <p className={styles.ProductCard_Brand}>{item.brand}</p>
                <p>{item.name}</p>
                <p>${item.price}.00</p>
            </div>
        </NavLink>
    );
};

export default ProductCard;
