import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/newproject">New Project</Link>
    </nav>
  )
}

export default NavBar
