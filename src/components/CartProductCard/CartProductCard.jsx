import styles from "./CartProductCard.module.scss";
import Button from "../Button/Button";
import { getActivewearById, updateQuantity } from "../../services/activewear";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CartProductCard = ({
    item,
    cartItems,
    setCartItems,
    total,
    setTotal,
}) => {
    const [showItem, setShowItem] = useState(true);
    const [count, setCount] = useState(item.quantity);
    const [unavailable, setUnavailable] = useState(false);

    const handleRemove = () => {
        updateQuantity(item.id, +count);

        const findIndex = cartItems.findIndex(
            (i) =>
                `${i.id}${i.colour}${i.size}` ===
                `${item.id}${item.colour}${item.size}`
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
        const data = await getActivewearById(item.id);
        if (data.quantity === 0) {
            setUnavailable(true);
        } else {
            setCount(count + 1);
            updateQuantity(item.id, -1);
            setTotal(total + item.price);
        }
    };

    const handleDecrement = () => {
        setUnavailable(false);
        if (count > 1) {
            setCount(count - 1);
            updateQuantity(item.id, +1);
            setTotal(total - item.price);
        }
    };

    return (
        showItem && (
            <>
                <div className={styles.Product}>
                    <NavLink to={`/eCommerce-App/products/${item.id}`}>
                        <div className={styles.Product_Section}>
                            <img
                                className={styles.Product_Img}
                                src={item.image}
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
                            {item.brand}
                        </p>
                        <p
                            className={`${styles.Product_Name} ${styles.Product_Para}`}
                        >
                            {item.name}
                        </p>
                        <p className={styles.Product_Para}>
                            Colour: {item.colour}
                        </p>
                        <p className={styles.Product_Para}>Size: {item.size}</p>
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
                            Subtotal: ${item.price * count}.00
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
