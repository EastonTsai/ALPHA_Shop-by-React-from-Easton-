import { ReactComponent as PgComleteSvg} from "../../files/icons/pg-complete.svg";

function ProgressGroup ({title, step, className}){
  return(
    <span className="progress-group" >
      <span className={className}>
        <span className="text">{step}</span> 
        <svg className="icon cursor-point">
          <PgComleteSvg/>
        </svg>
      </span>
      <span className="progress-label">{title}</span>
    </span>
  )
}


function Register ({currentStep}){
  
  function getClassName (step){
    if(currentStep < step){
      return "progress-icon"
    }else if(currentStep === step){
      return "progress-icon active"
    }else if(currentStep > step){
      return "progress-icon active complete"
    }
  }
  return(
    <section className="progress-container col col-12">
      <ProgressGroup
        step={1}
        title="寄送地址"
        className={getClassName(1)}
      />
      <span className="progress-bar" />
      <ProgressGroup 
        step={2}
        title="運送方式"
        className={getClassName(2)}
      />
      <span className="progress-bar" />
      <ProgressGroup
        step={3}
        title=' 付款資訊'
        className={getClassName(3)}
      />
    </section>
  )
}

export default Register;