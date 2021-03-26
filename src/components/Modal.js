// import React, { useState } from 'react'

export default function Modal(props){
    return(
        <div className="bodyOverlay">
        <div className="modalContainer">
            <h1>Bạn có chắc?</h1>
            <div className="modalButton">
            <button type="button" onClick={() => deleteProduct(props.productFromApp)}>OK</button>
            <button>Cancel</button>
            </div>
        </div>
        </div>
    )

    
    
  function deleteProduct(productID) {
    // const deleteProducts = products.filter(
    //   (product) => product.id !== productID
    // );
    console.log(productID);
    // setProducts(deleteProducts);
  }
}
