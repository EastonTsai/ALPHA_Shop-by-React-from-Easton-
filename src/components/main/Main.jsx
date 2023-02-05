import Register from './Register'
import FormAddress from './FormAddress'
import FormShipping from './FormShipping'
import FormCreditCard from './FormCreditCard'
import ProgressControl from './ProgressControl'
import Cart from './Cart'



function Main (){
  return(
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase={1}
          data-total-price={0}
        >
          <h2 className="register-title col col-12">結帳</h2>
          <Register/>
          <section className="form-container col col-12">
            <FormAddress/>
            <FormShipping/>
            <FormCreditCard/>
          </section>
        </section>
        <Cart></Cart>
        <ProgressControl/>
      </div>
    </main>
  )
}
export default Main;