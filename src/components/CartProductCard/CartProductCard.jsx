import styles from "./CartProductCard.module.scss";
import Button from "../Button/Button";
import { getActivewearById, updateQuantity } from "../../services/activewear";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CartProductCard = ({
    id,
    extraId,
    image,
    brand,
    name,
    colour,
    size,
    quantity,
    price,
    cartItems,
    setCartItems,
    total,
    setTotal,
}) => {
    const [showItem, setShowItem] = useState(true);
    const [count, setCount] = useState(quantity);
    const [unavailable, setUnavailable] = useState(false);

    const handleRemove = () => {
        updateQuantity(id, +count);

        const findIndex = cartItems.findIndex(
            (i) => `${i.id}${i.colour}${i.size}` === extraId
        );
        cartItems.splice(findIndex, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        setCartItems(JSON.parse(localStorage.getItem("cartItems")));

        if (!cartItems.length) {
            localStorage.removeItem("cartItems");
        }
        setShowItem(false);
    };

    const handleIncrement = async () => {
        const data = await getActivewearById(id);
        if (data.quantity === 0) {
            setUnavailable(true);
        } else {
            setCount(count + 1);
            updateQuantity(id, -1);
            setTotal(total + price);
        }
    };

    const handleDecrement = () => {
        setUnavailable(false);
        if (count > 1) {
            setCount(count - 1);
            updateQuantity(id, +1);
            setTotal(total - price);
        }
    };

    return (
        showItem && (
            <>
                <div className={styles.Product}>
                    <NavLink to={`/products/${id}`}>
                        <div className={styles.Product_Section}>
                            <img
                                className={styles.Product_Img}
                                src={image}
                                alt="product image"
                            />
                        </div>
                    </NavLink>
                    <div
                        className={`${styles.Product_Section} ${styles.Product_Details}`}
                    >
                        <p
                            className={`${styles.Product_Brand} ${styles.Product_Para}`}
                        >
                            {brand}
                        </p>
                        <p
                            className={`${styles.Product_Name} ${styles.Product_Para}`}
                        >
                            {name}
                        </p>
                        <p className={styles.Product_Para}>Colour: {colour}</p>
                        <p className={styles.Product_Para}>Size: {size}</p>
                        <p className={styles.Product_Para}>
                            Quantity:{" "}
                            <Button
                                className={styles.Product_Count}
                                value="-"
                                onClick={handleDecrement}
                            />
                            <span>{count}</span>
                            <Button
                                className={styles.Product_Count}
                                value="+"
                                onClick={handleIncrement}
                            />
                        </p>
                        {unavailable && <p>Maximum quantity reached.</p>}
                        <p className={styles.Product_Para}>
                            Subtotal: ${price * count}.00
                        </p>
                    </div>
                    <div className={styles.Product_Section}>
                        <Button
                            value={[
                                <img
                                    className={styles.Product_Btn_Img}
                                    src="https://img.icons8.com/android/24/000000/delete.png"
                                />,
                                "Remove",
                            ]}
                            onClick={handleRemove}
                            className={styles.Product_Btn}
                        />
                    </div>
                </div>
                <hr />
            </>
        )
    );
};

export default CartProductCard;
