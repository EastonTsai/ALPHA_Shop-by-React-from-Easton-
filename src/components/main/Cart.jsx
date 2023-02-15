import { useState } from 'react'

import { ReactComponent as MinusSvg } from "../../files/icons/minus.svg";
import { ReactComponent as PlusSvg } from "../../files/icons/plus.svg";
import cardData from '../../data/cardData'  //把放在 data 資料來裡的料引入

const newCardData = cardData

function Cart (){
  const [ cardData, setCardData ] = useState(newCardData)
  let total = getTotal() //總價不是被觸發的點而是一個結果 , 所以不記錄在 useState
  
  function getTotal (){ // 計算總價
    let price = 0
    cardData.forEach( project => {
      price += ( project.price * project.quantity)
    })
    return price
  }
  function filterCartData (id){ // 刪除 cardData 的項目
    return cardData.filter( project => project.id !== id)
  }
  function checkQuantity (id){ // 確認數量有沒有大於 1
    return cardData.find( project => project.id === id).quantity <= 1 ? false : true
  }
  function plusQuantity (id){ // 數量加 1
    let products = cardData.slice()
    products.find( product => product.id === id).quantity += 1
    setCardData(products)
  }
  function minusQuantity (id){ // 數量減 1
    let products = cardData.slice()
    products.find( product => product.id === id).quantity -= 1
    setCardData(products)
  }
  function handleProduct (e){ 
    const target = e.target
    const id = target.closest('.product-container').dataset.id //找父層 (.product-container) 元素的 dataset.id
    if(target.dataset.action === "plus"){ 
      plusQuantity(id) 
    }else if(target.dataset.action === "minus"){
      checkQuantity(id) ? minusQuantity(id) : setCardData(filterCartData(id))
    }
    total= getTotal() //加減完都需要計算一次 total 
  }

  return(
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price={0}>
        {cardData.map( item => 
          <div
            key={item.id}
            data-id={item.id} // 新增 , map 出來的 key 無法被取得 , 所以自己設置一個記錄 id 
            className="product-container col col-12"
            onClick={handleProduct}
          >
            <img className="img-container" src={item.img} alt={item.name} />
            <div className="product-info">
              <div className="product-name">{item.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <span 
                    className="product-action minus"
                    data-action="minus" // 新增 , 方便判斷點擊的是加或減
                  >
                    <MinusSvg />
                  </span>
                  <span className="product-count">{item.quantity}</span>
                  <span 
                    className="product-action plus"
                    data-action="plus" // 新增 , 方便判斷點擊的是加或減
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
              <div className="price">{item.price}</div>
            </div>
          </div>)}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price" />
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{ total }</div>
      </section>
    </section>
  )
}

export default Cart;