import { ReactComponent as SvgIconToggle } from "../../files/icons/toggle.svg";
import { ReactComponent as SvgIconSearch } from "../../files/icons/search.svg";
import { ReactComponent as SvgIconCart } from "../../files/icons/cart.svg";
import { ReactComponent as SvgIconMoon } from "../../files/icons/moon.svg";
import { ReactComponent as SvgIconSun } from "../../files/icons/sun.svg";
import { ReactComponent as SvgIconLogo } from "../../files/icons/logo.svg";


const navList = ['男款', '女款', '最新消息', '客製商品', '聯絡我們']
const navIcons = [<SvgIconSearch/>, <SvgIconCart/>, <SvgIconMoon/>, <SvgIconSun/>]


function Header (){
  return(
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* navbar-toggle */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <svg className="icon-toggle cursor-point">
            <SvgIconToggle />
          </svg>
        </label>
        {/* navbar-menu */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            {
              navList.map(text =>
                <li className="nav-item">
              <a className="nav-link" href="#">
                {text}
              </a>
            </li>
                )
            }
          </ul>
          <ul className="nav-list site-action-list">
            {
              navIcons.map(icon =>
                <li className="nav-item">
                  <svg className="nav-icon cursor-point">
                    {icon}
                  </svg>
                </li>
              )
            }
          </ul>
        </nav>
        {/* logo */}
        <a className="header-logo-container" href="#">
          <svg className="icon-logo cursor-point">
            <SvgIconLogo />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header;