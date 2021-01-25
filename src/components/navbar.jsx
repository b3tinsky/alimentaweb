import React, { Component } from "react"
import { Link } from "gatsby"
import navStyles from "../styles/components/navbar.module.scss";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Navbar extends Component {
  state = {
    scrolled: false,
    open: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }
  
  handleClick = () => {
    if (this.state.open === true) {
      this.setState({ open: false })
    } else {
      this.setState({ open: true })
    }
  }
  render() {
    const { scrolled } = this.state
    const { open } = this.state
    return (
      <nav className={scrolled ? navStyles.black : navStyles.transparent}>
          <div className={navStyles.menuIcon}>
            
          <FontAwesomeIcon icon={faTerminal} transform="down-7 grow-2.5" onClick={this.handleClick}/>
          </div>
          <Link className={navStyles.logo} to="/">Esperanza al Debil</Link>
          <ul className={open ? navStyles.showing : ""}>
          <li>
              <Link className={navStyles.listLink} to="/">Inicio</Link>
            </li>
            <li>
              <Link className={navStyles.listLink} to="/SobreNosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link className={navStyles.listLink} to="/Programas">Programas</Link>
            </li>
            <li>
              <Link className={navStyles.listLink} to="/Comedores">Comedores</Link>
            </li>
            <li>
              <Link className={navStyles.listLink} to="/ComoAyudar">Cómo Ayudar</Link>
            </li>
          </ul>
      </nav>
    )
  }
}
export default Navbar;