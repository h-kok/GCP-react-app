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
        }
    };

    const handleDecrement = () => {
        setUnavailable(false);
        if (count > 1) {
            setCount(count - 1);
            updateQuantity(id, +1);
        }
    };

    return (
        showItem && (
            <div className={styles.Product}>
                <NavLink to={`/products/${id}`}>
                    <div>
                        <img
                            className={styles.Product_Img}
                            src={image}
                            alt="product image"
                        />
                    </div>
                </NavLink>
                <div>
                    <p>{brand}</p>
                    <p>{name}</p>
                    <p>Colour: {colour}</p>
                    <p>Size: {size}</p>
                    <p>
                        Quantity: <Button value="-" onClick={handleDecrement} />
                        <span>{count}</span>
                        <Button value="+" onClick={handleIncrement} />
                    </p>
                    {unavailable && <p>Maximum quantity reached.</p>}
                    <p>${price * quantity}.00</p>
                </div>
                <div>
                    <Button
                        value={[
                            <img src="https://img.icons8.com/ios/20/null/trash--v1.png" />,
                            "Remove",
                        ]}
                        onClick={handleRemove}
                    />
                </div>
            </div>
        )
    );
};

export default CartProductCard;
