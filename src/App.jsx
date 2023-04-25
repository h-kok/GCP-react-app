import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./containers/HomePage/HomePage";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import { getAllActivewear } from "./services/activewear";

function App() {
    const [items, setItems] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const allItems = await getAllActivewear();
            setItems(allItems);
        };
        wrapper();
    }, []);

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage items={items} />} />
                    <Route
                        path="/products/:id"
                        element={<ProductPage cartItems={cartItems} />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
