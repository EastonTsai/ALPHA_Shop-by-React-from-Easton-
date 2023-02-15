import Register from './Register'
import FormAddress from './FormAddress'
import FormShipping from './FormShipping'
import FormCreditCard from './FormCreditCard'
import ProgressControl from './ProgressControl'
import Cart from './Cart'

import { useState } from 'react'  




function Main (){

  const [ currentStep, setCurrentStep ] = useState(1) //設定 nowStep 記錄當前顯示頁面


  return(
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase={1}
          data-total-price={0}
        >
          <h2 className="register-title col col-12">結帳</h2>
          <Register currentStep={ currentStep }/>
          <section className="form-container col col-12">
            { currentStep === 1 && <FormAddress/> } {/*如果 nowStep 是 1 就顯示 ... */}
            { currentStep === 2 && <FormShipping/> }
            { currentStep === 3 && <FormCreditCard/> }
          </section>
        </section>
        <Cart></Cart>
        <ProgressControl currentStep={{step: currentStep, set: setCurrentStep} } /> {/* 把 useState 用 props 傳下去 */}
      </div>
    </main>
  )
}
export default Main;