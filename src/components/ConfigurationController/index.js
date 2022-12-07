import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavBar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="app-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="layout-options">
            <li className="option-item">
              <input
                type="checkbox"
                className="checkbox"
                onChange={onChangeContent}
                checked={showContent}
                id="content"
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </li>
            <li className="option-item">
              <input
                type="checkbox"
                className="checkbox"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavBar}
                id="left-navbar"
              />
              <label htmlFor="left-navbar" className="label">
                Left Navbar
              </label>
            </li>
            <li className="option-item">
              <input
                type="checkbox"
                className="checkbox"
                checked={showRightNavbar}
                onChange={onChangeRightNavBar}
                id="right-navbar"
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
