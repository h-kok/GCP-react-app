import styles from "./App.module.scss";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./containers/HomePage/HomePage";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/products" element={<HomePage />} />
                    <Route path="/products/:id" />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/testproduct" element={<ProductPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
