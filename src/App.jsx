import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'

import Container from './components/layouts/Container'

const App = () => {
  return (
    <div>
      <Container customClass="min-height">
        <NavBar />
        <Outlet />
      </Container>

      <footer>footer</footer>
    </div>
    
  )
}

export default App
