import styles from "./ProductPage.module.scss";
import Button from "../../components/Button/Button";

const ProductPage = () => {
    return (
        <div>
            <div>
                <img src="" alt="product image" />
            </div>
            <div>
                <p>Brand</p>
                <p>Name</p>
                <p>Price</p>
                <select name="" id="">
                    <option value="" disabled selected>
                        Colour
                    </option>
                    <option value="">Blue</option>
                    <option value="">Red</option>
                    <option value="">Yellow</option>
                </select>
                <select name="" id="">
                    <option value="" disabled selected>
                        Pick a size
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <div>
                    <Button value="Add to Bag" />
                    <Button value="Like" />
                </div>
            </div>
            <p>Product Details</p>
            <div></div>
        </div>
    );
};

export default ProductPage;
