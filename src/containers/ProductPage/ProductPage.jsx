import styles from "./ProductPage.module.scss";
import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActivewearById, updateQuantity } from "../../services/activewear";
import unheart from "../../assets/unheart.png";
import heart from "../../assets/heart.png";
import { updateActivewear } from "../../services/activewear";

const ProductPage = ({ cartItems }) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [like, setLike] = useState(false);
    const [index, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(null);
    const [addMsg, setAddMsg] = useState(false);
    const [sizeMsg, setSizeMsg] = useState(false);
    const [duplicateMsg, setDuplicateMsg] = useState(false);
    const [unavailabe, setUnavailable] = useState(false);

    useEffect(() => {
        const wrapper = async () => {
            const data = await getActivewearById(id);
            setItem(data);
            setQuantity(data.quantity);
        };
        wrapper();
    }, [id]);

    const handleClickLike = () => {
        updateActivewear(id, { favourited: !like });
        setLike(!like);
    };

    const handleClickAdd = () => {
        if (size.value === "Select a size") {
            setSizeMsg(true);
        } else {
            const createCartItem = {
                id: item.id,
                image: item.image[index],
                brand: item.brand,
                name: item.name,
                colour: colour.value,
                size: size.value,
                quantity: 1,
                price: item.price,
            };

            const checkDuplicate = cartItems.findIndex(
                (i) =>
                    `${i.id}${i.colour}${i.size}` ===
                    `${createCartItem.id}${createCartItem.colour}${createCartItem.size}`
            );

            if (checkDuplicate >= 0) {
                setDuplicateMsg(true);
            } else if (quantity <= 0) {
                setUnavailable(true);
            } else if (quantity > 0) {
                cartItems.push(createCartItem);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                setAddMsg(true);
                updateQuantity(id, -1);
                setQuantity(quantity - 1);
            }
        }
    };
    const handleOptionChange = () => {
        setAddMsg(false);
        setSizeMsg(false);
        setDuplicateMsg(false);
    };

    const handleColourChange = (e) => {
        const colour = e.target.value;
        const findIndex = item.colour.findIndex((i) => i === colour);
        setIndex(findIndex);
        setAddMsg(false);
        setDuplicateMsg(false);
    };
    // console.log(item.brand ?? "unavailable", "prod pg brand");
    return item ? (
        <div className={styles.Product}>
            <div>
                <img
                    className={styles.Product_Img}
                    src={item.image[index] ?? "Image unavailable"}
                    alt={item.name}
                />
            </div>
            <div className={styles.Product_Wrapper}>
                <div className={styles.Product_Detail}>
                    <p
                        className={`${styles.Product_Brand} ${styles.Product_Para}`}
                    >
                        {item.brand ?? "Brand unavailable"}
                    </p>
                    <p className={styles.Product_Para}>
                        {item.name ?? "Name unavailable"}
                    </p>
                    <p className={styles.Product_Para}>
                        ${item.price ?? "Price unavailabe"}.00
                    </p>
                </div>
                <div className={styles.Product_Detail}>
                    <label className={styles.Product_Para} htmlFor="colour">
                        Colour:{" "}
                    </label>
                    <select
                        name="colour"
                        id="colour"
                        onChange={handleColourChange}
                        required
                        className={styles.Product_Para}
                    >
                        {item.colour &&
                            item.colour.map((item) => {
                                return <Option value={item} key={item} />;
                            })}
                    </select>
                    <label className={styles.Product_Para} htmlFor="size">
                        Size:{" "}
                    </label>
                    <select
                        name="size"
                        id="size"
                        defaultValue="Select a size"
                        onChange={handleOptionChange}
                        required
                        className={styles.Product_Para}
                    >
                        <option value="Select a size" hidden disabled>
                            Select a size
                        </option>
                        {item.size &&
                            item.size.map((item) => {
                                return <Option value={item} key={item} />;
                            })}
                    </select>
                    {sizeMsg && (
                        <p className={styles.Product_Para}>
                            Please select a size.
                        </p>
                    )}
                    {duplicateMsg && (
                        <p className={styles.Product_Para}>
                            This item is already in your cart.
                        </p>
                    )}
                </div>
                <div className={`${styles.Product_Btns}`}>
                    <Button
                        onClick={handleClickAdd}
                        className={styles.Product_BuyBtn}
                        value="Add to Cart"
                        disabled={unavailabe}
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
                </div>
                <div className={styles.Msgs}>
                    {addMsg && <p>Your item was added successfully!</p>}
                    {unavailabe && <p>Sorry, this item is unavailable</p>}
                </div>
            </div>
        </div>
    ) : (
        <p>Loading item...</p>
    );
};

export default ProductPage;
