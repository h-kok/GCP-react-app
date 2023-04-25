import styles from "./CartPage.module.scss";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const CartPage = ({ cartItems, setCartItems }) => {
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        const arr = cartItems.map((item) => item.price);
        const total = arr.reduce((a, b) => a + b, 0);
        return total;
    };

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }, []);

    useEffect(() => {
        if (cartItems && cartItems.length) {
            setTotal(calculateTotal());
        }
    }, [cartItems]);

    return (
        <div>
            <h3>Your Cart</h3>
            <div className={styles.Cart}>
                <div>
                    {cartItems && cartItems.length ? (
                        cartItems.map((item) => {
                            return (
                                <CartProductCard
                                    key={`${item.id}${item.colour}${item.size}`}
                                    extraId={`${item.id}${item.colour}${item.size}`}
                                    id={item.id}
                                    image={item.image}
                                    brand={item.brand}
                                    name={item.name}
                                    colour={item.colour}
                                    size={item.size}
                                    quantity={item.quantity}
                                    price={item.price}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                            );
                        })
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>

                <div>
                    {cartItems && cartItems.length > 0 && (
                        <div>
                            <h3>Total: ${total}.00</h3>
                            <Button value="Buy Now" />
                        </div>
                    )}
                    <NavLink to="/">
                        {<Button value="Continue Shopping" />}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
