// import React, { Component } from 'react';
import "./App.css";
import "./Modal.css";
import { PRODUCTS } from "./mockData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  //State của Product
  const [products, setProducts] = useState(PRODUCTS);

  // State của Modal confirm delete Product
  const [modalVisible, setModalVisible] = useState(false);

  // Tổng số sản phẩm
  let totalItems = products.reduce(
    (total, product) => (total += product.quantity),
    0
  );
  console.log("App", products, totalItems);

  // Xóa sản phẩm
  function removeProduct(productID) {
    setModalVisible(true);
    console.log("id là:" + productID);
  }

  // Cập nhật số lượng sản phẩm
  function updateQuantity(event, productID) {
    const inputValue = event.target.value;
    let newProducts = [...products];
    let index = newProducts.findIndex((product) => product.id === productID);

    if (index > -1) {
      newProducts[index].quantity = Number(inputValue);
    }
    setProducts(newProducts);
  }

  // Áp dụng code giảm giá
  function applyPromoCode(code) {
    console.log(code);
  }


  return (
    <main>
      <Header totalItems={totalItems} />

      <Body
        products={products}
        updateQuantity={updateQuantity}
        removeProduct={removeProduct}
      />
      <Footer applyPromoCode={applyPromoCode} products={products} />

      {modalVisible && (
        <Modal message="Bạn có chắc muốn xóa ?"
        productFromApp = {products}
        // deleteProduct={deleteProduct} 
        // closeModal = {closeModal}
        />
      )}
    </main>
  );
}

export default App;
