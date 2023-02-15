
import {ReactComponent as RightArrowSvg} from '../../files/icons/right-arrow.svg'
import {ReactComponent as LeftArrowSvg} from '../../files/icons/left-arrow.svg'


function ProgressControl ({currentStep}){ // 這裡接到 Main 傳來的 props

  function handlePrev (e){
    e.preventDefault() 
    currentStep.set( () => { return currentStep.step - 1 } )
  }
  function handleNext (e){
    e.preventDefault()
    currentStep.set( () => { return currentStep.step + 1 } )
  }
  function stepComplete (){
    alert('購買完成')
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