import HomePage from "./Components/HomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
      setFetchedData(data.products);
    };
    fetchData();
  }, []);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };
  const getTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <div className="App">
      <div style={{ marginTop: "30px" }}>
        <BrowserRouter>
          <Header 
            totalItems={getTotalItems(cartItems)}
            cartItems={cartItems}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  fetchedData={fetchedData}
                  setFetchedData={setFetchedData}
                />
              }
            />
            <Route
              path="/about/:productId"
              element={
                <ProductPage
                  fetchedData={fetchedData}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
