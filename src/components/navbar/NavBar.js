import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

function NavBar() {
  return (
    <Navbar color='dark' dark expand='md'>
      <Container>
        <NavbarBrand href='/'>INICIO</NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
