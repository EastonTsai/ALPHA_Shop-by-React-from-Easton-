
import {ReactComponent as RightArrowSvg} from '../../files/icons/right-arrow.svg'
import {ReactComponent as LeftArrowSvg} from '../../files/icons/left-arrow.svg'
import { MainContext } from '../Context/MainContext'
import { useContext } from 'react'


function ProgressControl ({currentStep}){ // 這裡接到 Main 傳來的 props
  const creditCard = useContext(MainContext).formCreditCard[0]
  const [products, setProducts] = useContext(MainContext).cart.data
  const total = useContext(MainContext).cart.total

  function handlePrev (e){
    e.preventDefault() 
    currentStep.set( () => { return currentStep.step - 1 } )
  }
  function handleNext (e){
    e.preventDefault()
    currentStep.set( () => { return currentStep.step + 1 } )
  }
  function stepComplete (){
    console.log('持卡人姓名: ', creditCard.name)
    console.log('信用卡卡號: ', creditCard.number)
    console.log('信用卡使用期限: ', creditCard.date)
    console.log('CVC 碼 : ', creditCard.cvc)
    console.log('消費總金額: ', total)
    setProducts(products.splice())
    currentStep.set(1)  // 把步驟恢復到第一步
  }

  return(
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12">
        {
          currentStep.step !== 1 && //如果 nowStep 不是 1 就給 "上一步"
            <button className="prev" onClick={ handlePrev }>
              <svg className="cursor-point">
                <LeftArrowSvg/>
              </svg>
              上一步
            </button>
        }
          <button className="next" onClick={ currentStep.step === 3 ? stepComplete : handleNext }>
          {currentStep.step === 3 ? '確認下單' : '下一步' }
          <svg className="cursor-point">
            <RightArrowSvg/>
          </svg>
        </button>    
      </section>
    </section>
  )
}

export default ProgressControl;