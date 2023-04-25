export const getCarouselItems = async (array) => {
    await array;
    const randomNumArr = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * array.length)
    );
    const randomItems = randomNumArr.map((num) => array[num]);

    const carouselItems = randomItems.map((item) => {
        const { image, id, ...rest } = item;
        const newObj = { image, id };
        return newObj;
    });

    return carouselItems;
};
