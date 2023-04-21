import styles from "./ProductPage.module.scss";
import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActivewearById, updateQuantity } from "../../services/activewear";
import unheart from "../../assets/unheart.png";
import heart from "../../assets/heart.png";
import { updateActivewear } from "../../services/activewear";

const ProductPage = ({ updated, setUpdated }) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    // console.log(item, "item");
    const [like, setLike] = useState(false);
    const [unavailable, setUnavailable] = useState(false);
    const [index, setIndex] = useState(0);
    // console.log(like);

    const handleClickLike = async () => {
        await updateActivewear(id, { favourited: !like });
        setLike(!like);
    };

    const handleClickBuy = async () => {
        const data = await getActivewearById(id);
        // console.log(data.quantity);
        try {
            if (data.quantity < 1) throw "Sorry, this item is unavailable";
        } catch (err) {
            setUnavailable(true);
        }
        await updateQuantity(id, -1);
    };

    const handleColourChange = (e) => {
        const colour = e.target.value;
        // console.log(optionVal, "option");
        const findIndex = item.colour.findIndex((i) => i === colour);
        setIndex(findIndex);
        //find value or index? of colour selection so can display on cart page.
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        //find value or index? of size selection so can display on cart page.
    };

    useEffect(() => {
        const wrapper = async () => {
            const data = await getActivewearById(id);
            // console.log(data, "data");
            setItem(data);
            setIndex(0);
        };
        wrapper();
    }, [updated, id]);

    return item ? (
        <div className={styles.Product}>
            <div>
                <img
                    className={styles.Product_Img}
                    src={item.image[index] ?? "Image unavailable"}
                    alt="product image"
                />
            </div>
            <div>
                <p>{item.brand ?? "Brand unavailable"}</p>
                <p>{item.name ?? "Name unavailable"}</p>
                <p>${item.price ?? "Price unavailabe"}.00</p>
                <p>Colour:</p>
                <select name="" id="" onChange={handleColourChange}>
                    {item.colour &&
                        item.colour.map((item) => {
                            return <Option value={item} key={item} />;
                        })}
                </select>
                <p>Size:</p>
                <select name="" id="">
                    {item.size &&
                        item.size.map((item) => {
                            return <Option value={item} key={item} />;
                        })}
                </select>
                <div>
                    <Button
                        onClick={handleClickBuy}
                        className={styles.Product_BuyBtn}
                        value="Add to Cart"
                    />
                    <Button
                        onClick={handleClickLike}
                        className={styles.Product_LikeBtn}
                        value={
                            <img
                                className={styles.Product_LikeBtn_Img}
                                src={like ? heart : unheart}
                                alt="like button"
                            />
                        }
                    />
                    <p>
                        {!unavailable
                            ? "Your item was added sucessfully!"
                            : "Sorry, this item is unavailable"}
                    </p>
                </div>
            </div>
            <p>Product Details</p>
            <div></div>
        </div>
    ) : (
        <p>Sorry, item not found.</p>
    );
};

export default ProductPage;
