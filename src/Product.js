
import "./Product.css";

function Product(){
    return(
      <div className="productWrap">
            <div className="product1">
              <div className="left">
                <div className="box1"></div>
                <div className="productInfo">
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
                <div className="productInfo">
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

export default Product;