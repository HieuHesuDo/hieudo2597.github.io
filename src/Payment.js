import "./Payment.css";

function Payment() {
  return (
    <div className="payMentWrap">
        <div className="Payment">
      <div className="promoCode">
        <p>Have A Promo Code?</p>
        <div className="codeInput">
          <input></input>
        </div>
      </div>

      <div className="priceWrap">
        <div className="title">
          <p>Subtotal</p>
          <p>Tax</p>
          <h3>Total</h3>
        </div>

        <div className="price">
          <p>$21.97</p>
          <p>$5.00</p>
          <h3>$26.97</h3>
        </div>
      </div>
      </div>

      <div className="submitButton">
        <button>Check Out</button>
      </div>
    </div>
  );
}

export default Payment;
