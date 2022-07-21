import React from "react"
import navStyles from "../styles/components/navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";

function navbar() {
	return (
		<Navbar className={ navStyles.navbar } variant="dark" expand="lg" fixed="top">
			<Navbar.Brand href="/">Esperanza al Débil</Navbar.Brand>
			<Navbar.Toggle className={ navStyles.navLink } aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link className={ navStyles.navLink } href="/">Inicio</Nav.Link>
					<Nav.Link className={ navStyles.navLink } href="/SobreNosotros">Sobre Nosotros</Nav.Link>
					<Nav.Link className={ navStyles.navLink } href="/Programas">Programas</Nav.Link>
					<Nav.Link className={ navStyles.navLink } href="/Comedores">Comedores</Nav.Link>
					<Nav.Link className={ navStyles.navLink } href="/ComoAyudar">Cómo Ayudar</Nav.Link>
					<Nav.Link className={ navStyles.navLink } href="/Galeria">Galeria</Nav.Link>
					<Nav.Link className={ navStyles.navLink } href="/Contacto">Contacto</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
export default navbar;