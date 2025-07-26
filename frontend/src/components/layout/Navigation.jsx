import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";

export default function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const menuItems = [
    // { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/exhibitions", label: "Exhibitions" },
    { to: "/news", label: "News" },
    { to: "/contact", label: "Contact" },
    // { to: "/shop", label: "Shop" },
    // { to: "/admin", label: "Admin" },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-0 ">
        <Container fluid className="w-100 px-3 justify-content-center">
          <Row className="w-100 align-items-center">
            {/* Left Brand */}
            <Col xs="auto" lg={3}>
              <Navbar.Brand as={Link} to="/">
                Atelier
              </Navbar.Brand>
            </Col>

            {/* Center Nav Menu */}
            <Col
              lg={6}
              className="d-none d-lg-flex justify-content-center nav-center"
            >
              <Nav>
                {menuItems.map(({ to, label }) => (
                  <Nav.Link key={to} as={Link} to={to} className="mx-2">
                    {label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
            {/* Right Space */}
            <Col xs lg={3} className="d-flex justify-content-end">
              <div className="d-none d-lg-block">
                {/* SNS Icons can be placed here */}
              </div>
              <Navbar.Toggle
                className="d-lg-none"
                onClick={() => setShowOffcanvas(true)}
              />
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        className="offcanvas-menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            {menuItems.map(({ to, label }) => (
              <Link
                key={to}
                as={Link}
                to={to}
                onClick={() => setShowOffcanvas(false)}
                className="fs-2 no-underline"
              >
                {label}
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
