import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const darkThemeHome = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const textHomeHeading = isDarkTheme ? 'home-dark' : 'home-light'

      const bgHomeContainer = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      return (
        <div className={`home-app-container ${bgHomeContainer}`}>
          <Navbar />
          <div className="home-content-container">
            <img src={darkThemeHome} alt="home" className="home-icon" />
            <h1 className={`home-heading ${textHomeHeading}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
