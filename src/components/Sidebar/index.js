import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import { faHome, faUser, faEnvelope, faFaceFlushed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/"></Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link "
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="student-link"
        to="/student"
      >
        <FontAwesomeIcon icon={faFaceFlushed} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <a
        className="github-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/wiekusviljoen"
      >
        <FontAwesomeIcon icon={faGithub} color="#FF0909" />
      </a>
    </ul>
    <ul>
      <a
        className="facebook-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/wiekus.viljoen"
      >
        <FontAwesomeIcon icon={faFacebook} color="#0B0BFA" />
      </a>
    </ul>
  </div>
)

export default Sidebar
