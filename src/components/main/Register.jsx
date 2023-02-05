import { ReactComponent as PgComleteSvg} from "../../files/icons/pg-complete.svg";


function Register (){
  return(
    <section className="progress-container col col-12">
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <span className="text">1</span>
          <svg className="icon cursor-point">
            <PgComleteSvg/>
          </svg>
        </span>
        <span className="progress-label">寄送地址</span>
      </span>
      <span className="progress-bar" data-order={1} />
      <span className="progress-group" data-phase="shipping">
        <span className="progress-icon">
          <span className="text">2</span>
          <svg className="icon cursor-point">
            <PgComleteSvg/>
          </svg>
        </span>
        <span className="progress-label">運送方式</span>
      </span>
      <span className="progress-bar" data-order={2} />
      <span className="progress-group" data-phase="credit-card">
        <span className="progress-icon">
          <span className="text">3</span>
          <svg className="icon cursor-point">
            <PgComleteSvg/>
          </svg>
        </span>
        <span className="progress-label">付款資訊</span>
      </span>
    </section>
  )
}

export default Register;