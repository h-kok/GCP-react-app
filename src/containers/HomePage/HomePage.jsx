import ProductCard from "../../components/ProductCard/ProductCard";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import styles from "./HomePage.module.scss";

const HomePage = ({ items }) => {
    return (
        <div className={styles.HomePage}>
            <div className={styles.HomePage_Landing}>
                <div className={styles.HomePage_Heading}>
                    <h3 className={styles.HomePage_Text}>
                        Shop the latest in Women's Activewear
                    </h3>
                    <h5 className={styles.HomePage_Text}>
                        The latest designs from the brands you love.
                    </h5>
                </div>
                {/* <img
                    className={styles.HomePage_Imgs}
                    src="src\assets\flat-lay-activewear.jpg"
                    alt="flat lay activewear"
                /> */}
                <section className={styles.Carousel}>
                    {items && <CarouselContainer items={items} />}
                </section>
                {/* <img
                    className={`${styles.HomePage_Imgs} ${styles.HomePage_Yoga}`}
                    src="src\assets\yoga.jpg"
                    alt="yoga"
                /> */}
            </div>
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
