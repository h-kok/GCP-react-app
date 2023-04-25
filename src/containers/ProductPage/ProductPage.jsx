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

    useEffect(() => {
        const wrapper = async () => {
            const data = await getActivewearById(id);
            setItem(data);
            setQuantity(data.quantity);
        };
        wrapper();
        console.log("render, product page");
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

            if (checkDuplicate < 0 && quantity > 0) {
                cartItems.push(createCartItem);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                setAddMsg(true);
                updateQuantity(id, -1);
                setQuantity(quantity - 1);
            } else {
                setDuplicateMsg(true);
            }
        }
    };

    const handleColourChange = (e) => {
        const colour = e.target.value;
        const findIndex = item.colour.findIndex((i) => i === colour);
        setIndex(findIndex);
        setAddMsg(false);
    };

    const handleOptionChange = () => {
        setAddMsg(false);
        setSizeMsg(false);
    };

    return item ? (
        <div className={styles.Product}>
            <div>
                <img
                    className={styles.Product_Img}
                    src={item.image[index] ?? "Image unavailable"}
                    alt={item.name}
                />
            </div>
            <div>
                <p>{item.brand ?? "Brand unavailable"}</p>
                <p>{item.name ?? "Name unavailable"}</p>
                <p>${item.price ?? "Price unavailabe"}.00</p>
                <label htmlFor="colour">Colour: </label>
                <select
                    name="colour"
                    id="colour"
                    onChange={handleColourChange}
                    required
                >
                    {item.colour &&
                        item.colour.map((item) => {
                            return <Option value={item} key={item} />;
                        })}
                </select>
                <label htmlFor="size">Size: </label>
                <select
                    name="size"
                    id="size"
                    defaultValue="Select a size"
                    onChange={handleOptionChange}
                    required
                >
                    <option value="Select a size" hidden disabled>
                        Select a size
                    </option>
                    {item.size &&
                        item.size.map((item) => {
                            return <Option value={item} key={item} />;
                        })}
                </select>
                {sizeMsg && <p>Please select a size.</p>}
                {duplicateMsg && <p>This item is already in your cart.</p>}
                <div>
                    <Button
                        onClick={handleClickAdd}
                        className={styles.Product_BuyBtn}
                        value="Add to Cart"
                        disabled={quantity < 0}
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
                    {addMsg && <p>Your item was added successfully!</p>}
                    {quantity < 0 && <p>Sorry, this item is unavailable</p>}
                </div>
            </div>
            <p>Product Details</p>
            <div></div>
        </div>
    ) : (
        <p>Loading item...</p>
    );
};

export default ProductPage;
