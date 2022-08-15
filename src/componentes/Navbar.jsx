
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {withRouter} from 'react-router-dom'
import { cerrarSesionAccion } from '../redux/UsuarioDucks'
import {useDispatch, useSelector} from 'react-redux'

function NavBar({props, firebaseUser}) {

  const dispatch = useDispatch()

    const activo = useSelector(store => store.usuario.activo)

    const cerrarSesion = () => { 
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
     }

return (

    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
        
          <Navbar.Brand href="/login">Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="/contactame">Contáctame</Nav.Link>
              {
                activo || firebaseUser !== null ? (
                  <>
                    <NavDropdown title="Portafolio" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/portafolio">Portafolio</NavDropdown.Item>
                      <NavDropdown.Item href="/estudios">Estudios</NavDropdown.Item>
                      <NavDropdown.Item href="/pokemons">Pokemons</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : null
              }

              {
                activo || firebaseUser !== null ? (
                    <Button
                    variant="danger"
                    onClick={cerrarSesion}
                    >Cerrar Sesion</Button>
                ) : (
                    <Nav.Link className="btn btn-dark mr-2" href="/login">
                        Login
                    </Nav.Link>
                )
              }
              
            </Nav>
          </Navbar.Collapse>
          
        
      </Navbar>
    </>
)
}

export default withRouter(NavBar);