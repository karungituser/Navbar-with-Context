import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleChange = event => {
        toggleTheme(event.target.value)
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const textContext = isDarkTheme
        ? 'nav-items isDarkItem'
        : 'nav-items isLightItem'
      const navBgContainer = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'

      return (
        <nav classNam="navbar">
          <div className={`nav-header ${navBgContainer}`}>
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-links-container">
              <li>
                <Link to="/" className={textContext}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={textContext}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              testid="theme"
              onClick={onToggleChange}
              className="theme-btn"
            >
              <img src={themeLogo} alt="theme" className="theme-logo" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
