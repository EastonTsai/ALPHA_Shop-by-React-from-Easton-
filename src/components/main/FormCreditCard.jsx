
import { MainContext } from "../Context/MainContext";
import { useContext } from 'react'

function FormCreditCard (e){
  const [ formCreditCard, setFormCreditCard ] = 
  useContext(MainContext).formCreditCard

  function handleChange (e, item){
    setFormCreditCard({
      ...formCreditCard,
      [item]: e.target.value
    })
  }
  // function handleChangeNum (e){
  //   setFormCreditCard({
  //     ...formCreditCard,
  //     number: e.target.value
  //   })
  // }
  // function handleChangeDate (e){
  //   setFormCreditCard({
  //     ...formCreditCard,
  //     date: e.target.value
  //   })
  // }
  // function handleChangeCvc (e){
  //   setFormCreditCard({
  //   ...formCreditCard,
  //   cvc: e.target.value
  //   })
  // }

  return(
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input 
              type="text" 
              placeholder="John Doe" 
              value={formCreditCard.name}
              onChange={ (e) => handleChange(e, 'name')}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input 
              type="text" 
              placeholder="1111 2222 3333 4444" 
              value={formCreditCard.number}
              onChange={(e) => handleChange(e, 'number')}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input 
              type="text" 
              placeholder="MM/YY" 
              value={formCreditCard.date}
              onChange={(e) => handleChange(e, 'date')}
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input 
              type="text" 
              placeholder={123} 
              value={formCreditCard.cvc}
              onChange={(e) => handleChange(e, 'cvc')}
            />
          </div>
        </div>
      </section>
    </form>
  )
}
export default FormCreditCard;