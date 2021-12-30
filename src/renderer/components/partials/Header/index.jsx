import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#newOrder">New Order</Nav.Link>
              <Nav.Link href="#onGoingOrder">On Going Order</Nav.Link>
              <Nav.Link href="#kitchenStatus">Kitchen Status</Nav.Link>
              <Nav.Link href="#qrOrder">QR Order</Nav.Link>
              <Nav.Link href="#onlineOrder">Online Order</Nav.Link>
              <Nav.Link href="#todayOrder">Today Order</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
