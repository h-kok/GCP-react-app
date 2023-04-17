import styles from "./CartProductCard.module.scss";
import Button from "../Button/Button";

const CartProductCard = () => {
    return (
        <div className={styles.Product}>
            <div>
                <img src="" alt="product image" />
            </div>
            <div>
                <p>Name</p>
                <p>Colour</p>
                <p>Size</p>
                <p>Quantity</p>
            </div>
            <div>
                <Button value="-" />
                <span>0</span>
                <Button value="+" />
            </div>
            <div>
                <Button value="Remove" />
            </div>
        </div>
    );
};

export default CartProductCard;
