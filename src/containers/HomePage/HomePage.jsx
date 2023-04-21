import ProductCard from "../../components/ProductCard/ProductCard";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import styles from "./HomePage.module.scss";

const HomePage = ({ items }) => {
    // console.log(items, "homepage");
    return (
        <div className={styles.HomePage}>
            <h1>ActiveWear</h1>
            <h3>Shop the latest styles</h3>
            <CarouselContainer items={items} />
            <div className={styles.ProductList}>
                {items ? (
                    items.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                img={item.image[0]}
                                brand={item.brand}
                                name={item.name}
                                price={item.price}
                            />
                        );
                    })
                ) : (
                    <p>Items loading...</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
