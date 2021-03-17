import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headTitle">
        <h1>Shopping Cart</h1>
        <p>Home Shopping Cart</p>
        </div>
        {/* <div className="product-wrap">
          <div className="product1">
            <div className="left">
              <div className="box1"></div>
              <div className="product-info">
                <h3>PRODUCT ITEM NUMBER 1</h3>
                <p>Description for product number 1</p>
                <p>5$</p>
              </div>
            </div>
            <div className="right">
              <div className="number">
                <input type="text" placeholder="2"></input>
              </div>
              <div>X</div>
            </div>
          </div>

          <div className="product2">
            <div className="left">
              <div className="box2"></div>
              <div className="product-info">
                <h3>PRODUCT ITEM NUMBER 2</h3>
                <p>Description for product number 2</p>
                <p>5$</p>
              </div>
            </div>
            <div className="right">
              <div className="number">
                <input type="number" placeholder="1"></input>
              </div>
              <div>X</div>
            </div>
          </div>
        </div>
        
        

        <div className="payMentWrap">
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
        
        <button>Check Out</button> */}
      </header>
    </div>
  );
}

function Product(){
  return(
    <div className="product-wrap">
          <div className="product1">
            <div className="left">
              <div className="box1"></div>
              <div className="product-info">
                <h3>PRODUCT ITEM NUMBER 1</h3>
                <p>Description for product number 1</p>
                <p>5$</p>
              </div>
            </div>
            <div className="right">
              <div className="number">
                <input type="text" placeholder="2"></input>
              </div>
              <div>X</div>
            </div>
          </div>

          <div className="product2">
            <div className="left">
              <div className="box2"></div>
              <div className="product-info">
                <h3>PRODUCT ITEM NUMBER 2</h3>
                <p>Description for product number 2</p>
                <p>5$</p>
              </div>
            </div>
            <div className="right">
              <div className="number">
                <input type="number" placeholder="1"></input>
              </div>
              <div>X</div>
            </div>
          </div>
        </div>
  )
}

ReactDOM.render(
  <Product />,
   document.getElementById('root')
 );

// export default App;
