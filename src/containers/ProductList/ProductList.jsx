import styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductList = () => {
    return (
        <div>
            {/* {product &&
                product.map((product) => {
                    <ProductCard
                        key={product.id}
                        img={product.img}
                        brand={brand}
                        name={product.name}
                        price={price}
                    />;
                })} */}
            <ProductCard
                img="https://placekitten.com/g/200/200"
                brand="brand"
                name="Name of Product"
                price="$100"
            />
        </div>
    );
};

export default ProductList;
