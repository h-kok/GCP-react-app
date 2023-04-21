import styles from "./App.module.scss";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./containers/HomePage/HomePage";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import { getActivewearById, getAllActivewear } from "./services/activewear";

function App() {
    const [items, setItems] = useState(null);
    const [updated, setUpdated] = useState(0);

    useEffect(() => {
        const wrapper = async () => {
            const allItems = await getAllActivewear();
            setItems(allItems);
        };
        wrapper();
    }, [updated]);
    // console.log(items, "items");

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                items={items}
                                setItems={setItems}
                                updated={updated}
                                setUpdated={setUpdated}
                            />
                        }
                    />
                    <Route
                        path="/products/:id"
                        element={
                            <ProductPage
                                updated={updated}
                                setUpdated={setUpdated}
                            />
                        }
                    />
                    <Route path="/cart" />
                    {/* <Route path="/testproduct" element={<ProductPage />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
