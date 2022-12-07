import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = () => (
  <div className="container">
    <div className="layout-main-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
