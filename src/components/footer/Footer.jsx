
import { ReactComponent as SvgIconFacebook} from "../../files/icons/facebook.svg"
import { ReactComponent as SvgIconInstagram} from "../../files/icons/instagram.svg"
import { ReactComponent as SvgIconWhatApp} from "../../files/icons/whatsapp.svg"

// const serve = ['運送說明', '退換貨相關', '付款資訊', 'FAQ']
// const about = ['品牌故事', '媒體聯繫', 'press kit']
// const information = ['隱私權政策', 'Cookie', 'GDPR']
const footerSection = [
  {
    title : '客戶服務', 
    aTag: ['運送說明', '退換貨相關', '付款資訊', 'FAQ'],
  },
  {
    title : '關於我們', 
    aTag : ['品牌故事', '媒體聯繫', 'press kit'],
  },
  {
    title : '資訊', 
    aTag : ['隱私權政策', 'Cookie', 'GDPR'],
  },
]

function Footer (){
  return(
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <svg className="icon-logo">
            <use xlinkHref="#svg-icon-logo" />
          </svg>
        </div>
        {
          footerSection.map( section =>
            <section className="footer-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="section-content">
                {
                  section.aTag.map( aTag => 
                    <a className="page-link" href="#">{aTag}</a>
                  )
                }
              </div>
            </section>
          )
        }
        <section className="footer-section">
          <h2 className="section-title">追蹤 ALPHA Shop</h2>
          <div className="section-content">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <svg className="social-icon cursor-point">
                <SvgIconFacebook />
              </svg>
              <svg className="social-icon cursor-point">
                <SvgIconInstagram />
              </svg>
              <svg className="social-icon cursor-point">
                <SvgIconWhatApp />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer;