import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkThemeAbout = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const textAboutHeading = isDarkTheme ? 'about-dark' : 'about-light'

      const bgAboutContainer = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      return (
        <div className={`about-app-container ${bgAboutContainer}`}>
          <Navbar />
          <div className="about-container">
            <img src={darkThemeAbout} alt="about" className="about-icon" />
            <h1 className={`about-heading ${textAboutHeading}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
