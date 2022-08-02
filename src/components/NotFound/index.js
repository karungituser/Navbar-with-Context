import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const classNameHeading = isDarkTheme
        ? 'lost-heading isDark'
        : 'lost-heading isLight'
      const classNameDescription = isDarkTheme
        ? 'lost-description isDark-des'
        : 'lost-description isLight-des'

      const notFoundBgContainer = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      return (
        <div className={`not-found-container ${notFoundBgContainer}`}>
          <Navbar />
          <div className="not-found-responsive-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={classNameHeading}>Lost Your Way?</h1>
            <p className={classNameDescription}>
              We cannot seem to find the page your are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
