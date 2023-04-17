import styles from "./CartPage.module.scss";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import Button from "../../components/Button/Button";

const CartPage = () => {
    return (
        <div>
            <h3>Your Cart</h3>
            <div>
                <div>
                    <CartProductCard />
                </div>
                <div>
                    <h3>Total Price</h3>
                    <Button value="Buy Now" />
                </div>
            </div>
        </div>
    );
};

export default CartPage;

//if nothing in cart: display msg: "Your cart is empty"
