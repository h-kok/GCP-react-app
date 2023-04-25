import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import rabbit from "../../assets/rabbit.png";
import cart from "../../assets/cart.png";

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <NavLink to="/">
                <img
                    className={`${styles.Nav_Logo} ${styles.Link}`}
                    src={rabbit}
                    alt="running rabit"
                />
            </NavLink>
            <NavLink to="/" className={styles.Link}>
                <h1 className={styles.Heading}>Active Co</h1>
            </NavLink>
            <NavLink to="/cart" className={styles.Link}>
                <img
                    className={`${styles.Nav_Cart} ${styles.Link}`}
                    src={cart}
                    alt="shopping cart"
                />
            </NavLink>
        </nav>
    );
};

export default Nav;
