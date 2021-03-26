import { useState } from "react";

export default function Footer({products, applyPromoCode}){
    const [inputCode, setInputCode] = useState("");

    let subTotal = products.reduce(
        (total, product) => (total += product.price * product.quantity),
        0
      );
    
      let tax = products.reduce(
        (tax, product) => (tax += (product.price * product.quantity) / 10),
        0
      );
    
      let totalPrice = products.reduce(
        (sum, product) =>
          (sum +=
            product.price * product.quantity +
            (product.price * product.quantity) / 10),
        0
      );

    return(
        <section className="container">
        <div className="promotion">
          <label htmlFor="promo-code">Have A Promo Code?</label>
          <input
            type="text"
            id="promo-code"
            value={inputCode}
            onChange={(event) => setInputCode(event.target.value)}
          />{" "}
          <button type="button" onClick={() => applyPromoCode(inputCode)} />
        </div>
        <div className="summary">
          <ul>
            <li>
              Subtotal <span>${subTotal}</span>
            </li>
            <li>
              Tax <span>${tax}</span>
            </li>
            <li className="total">
              Total <span>${totalPrice}</span>
            </li>
          </ul>
        </div>
        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
    )
}