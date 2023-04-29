import ProductCard from "../../components/ProductCard/ProductCard";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import styles from "./HomePage.module.scss";

const HomePage = ({ items }) => {
    return (
        <div className={styles.HomePage}>
            <h3 className={styles.HomePage_Heading}>
                Shop the latest in Women's Activewear
            </h3>
            <section className={styles.Carousel}>
                {items && <CarouselContainer items={items} />}
            </section>
            <section className={styles.ProductList}>
                {items ? (
                    items.map((item) => {
                        return <ProductCard key={item.id} item={item} />;
                    })
                ) : (
                    <p>Items loading...</p>
                )}
            </section>
        </div>
    );
};

export default HomePage;
