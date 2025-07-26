import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
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

  // Left Brand Check Width
  const brandRef = useRef(null);
  const [brandWidth, setBrandWidth] = useState(0);

  useLayoutEffect(() => {
    if (brandRef.current) {
      setBrandWidth(brandRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-3">
        <Container
          fluid
          className="justify-content-between align-items-center w-100 px-3"
        >
          {/* Left Brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center justify-content-lg-center justify-content-start px-2"
            ref={brandRef}
          >
            Petit Atelier
          </Navbar.Brand>
          <div className="d-lg-none">
            <Navbar.Toggle onClick={() => setShowOffcanvas(true)} />
          </div>

          {/* Center Nav Menu */}
          <div className="d-none d-lg-flex justify-content-center flex-grow-1">
            <Nav>
              {menuItems.map(({ to, label }) => (
                <Nav.Link key={to} as={Link} to={to}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </div>

          {/* Right Space */}
          <div
            className="d-none d-lg-block"
            style={{ width: `${brandWidth}px` }}
          >
            <i className="bi bi-instagram me-2"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            {menuItems.map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={Link}
                to={to}
                onClick={() => setShowOffcanvas(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
