import {Link} from 'react-router-dom'
import Container from './Container'
import logo from '../../img/PL_Costs_logo.svg'

import styles from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Container>

          <Link to="/">
             <img src={logo} />
           </Link>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/company">Empresa</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>

          </Container>
    </nav>
  )
}

export default NavBar
