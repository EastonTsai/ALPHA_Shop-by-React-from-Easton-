
import { ReactComponent as MinusSvg } from "../../files/icons/minus.svg";
import { ReactComponent as PlusSvg } from "../../files/icons/plus.svg";
import cardData from '../../data/cardData'  //把放在 data 資料來裡的料引入
console.log(cardData)


function renderCart(arr) { //需要一個陣列參數 , 回傳 Jsx
  return arr.map( item => 
    <div
      key={item.id}
      className="product-container col col-12"
      data-count={item.quantity}
      data-price={item.price}
    >
      <img className="img-container" src={item.img} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <svg className="product-action minus">
              <MinusSvg />
            </svg>
            <span className="product-count">{item.quantity}</span>
            <svg className="product-action plus">
              <PlusSvg />
            </svg>
          </div>
        </div>
        <div className="price">{item.price}</div>
      </div>
    </div>
  )
}

function Cart (){
  return(
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price={0}>
        {renderCart(cardData) /*呼叫函式 , 傳入 cardData */} 
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price" />
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price" />
      </section>
    </section>
  )
}

export default Cart;