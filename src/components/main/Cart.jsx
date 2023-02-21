import { useState } from 'react'

import { ReactComponent as MinusSvg } from "../../files/icons/minus.svg";
import { ReactComponent as PlusSvg } from "../../files/icons/plus.svg";
import { cartData } from '../../data/cartData'


function Cart (){
  const [ products, setProducts ] = useState(cartData)
  const total = getTotal()
  
  function getTotal (){//從 products 裡面計算總價 (小計)
    let price = 0
    products.forEach( p => {
      price += ( p.price * p.quantity )
    })
    return price
  }
  function handlePlus (id){
    setProducts(
      products.map( p => {
      if(p.id === id){ p.quantity += 1 }
      return p
    })
    )
  }
  function handleMinus (id, quantity){
    if(quantity <= 1){ //如果數量 <= 1 再減 1 就沒了 , 所以要刪除
      setProducts(
        products.filter( p => p.id !== id)
      )
    }else{
      setProducts(
        products.map( p => {
          if(p.id === id){
            p.quantity -= 1
          }
          return p
        })
      )
    }
  }


  return(
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12">
        {products.map( p => 
          <div
            key={p.id}
            className="product-container col col-12"
          >
            <img className="img-container" src={p.img} alt={p.name} />
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <span className="product-action minus">
                    {/* 監聽 onClick , 傳入參數 id , 數量 */}
                    <MinusSvg onClick={() => handleMinus(p.id, p.quantity)}/>
                  </span>
                  <span className="product-count">{p.quantity}</span>
                  <span className="product-action plus">
                    {/* 監聽 onClick , 傳入參數 id */}
                    <PlusSvg onClick={() => handlePlus(p.id)}/>
                  </span>
                </div>
              </div>
              <div className="price">{p.price}</div>
            </div>
          </div>)}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price" />
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{total}</div>
      </section>
    </section>
  )
}

export default Cart;