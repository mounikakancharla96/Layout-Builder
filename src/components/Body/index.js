import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-items">
                <li className="left-item-option">Item 1</li>
                <li className="left-item-option">Item 2</li>
                <li className="left-item-option">Item 3</li>
                <li className="left-item-option">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-navbar-heading">Content</h1>
              <p className="left-navbar-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Right Navbar Menu</h1>
              <div className="left-navbar-items">
                <div className="ad-container">
                  <p className="ad-name">Ad 1</p>
                </div>
                <div className="ad-container">
                  <p className="ad-name">Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
