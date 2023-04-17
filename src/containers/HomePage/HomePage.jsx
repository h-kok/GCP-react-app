import ProductList from "../ProductList/ProductList";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className={styles.HomePage}>
            <h1>My Products</h1>
            <ProductList />
        </div>
    );
};

export default HomePage;
