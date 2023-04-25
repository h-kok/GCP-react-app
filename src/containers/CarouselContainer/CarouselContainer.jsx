import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import styles from "./CarouselContainer.module.scss";
import { getCarouselItems } from "../../services/carousel";
import { NavLink } from "react-router-dom";

const CarouselContainer = ({ items }) => {
    console.log;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState("https://placehold.co/200x200");
    const [id, setId] = useState(0);
    const length = 3;

    useEffect(() => {
        const wrapper = async () => {
            const data = getCarouselItems(items);
            const img = data.map((item) => item.image[0]);
            const id = data.map((item) => item.id);
            setImages(img);
            setId(id);
        };
        wrapper();
    }, []);

    const handlePrevious = () => {
        console.log(currentIndex, "current index");
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex < 0 ? length : newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className={styles.Carousel}>
            <Button
                className={styles.Carousel_Btn}
                value={
                    <img src="https://img.icons8.com/ios/50/null/back--v1.png" />
                }
                onClick={handlePrevious}
            />
            <NavLink to={`/eCommerce-App/products/${id[currentIndex]}`}>
                <img
                    className={styles.Carousel_Img}
                    src={images[currentIndex]}
                    alt="activewear"
                />
            </NavLink>
            <Button
                className={styles.Carousel_Btn}
                value={
                    <img src="https://img.icons8.com/ios/50/null/forward--v1.png" />
                }
                onClick={handleNext}
            />
        </div>
    );
};

export default CarouselContainer;
