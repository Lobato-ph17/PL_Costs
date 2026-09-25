import {Outlet} from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'

import Container from './components/layouts/Container'

const App = () => {
  return (
    <div>
      <NavBar />
      <Container customClass="min-height">
        <Outlet />
      </Container>

      <Footer />
    </div>
    
  )
}

export default App
