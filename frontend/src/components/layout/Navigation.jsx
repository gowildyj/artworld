import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Navigation() {
  const { t } = useTranslation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const menuItems = [
    // { to: "/", label: "menu.hoome" },
    { to: "/about", label: "menu.about" },
    { to: "/gallery", label: "menu.gallery" },
    { to: "/exhibitions", label: "menu.exhibitions" },
    { to: "/news", label: "menu.news" },
    { to: "/contact", label: "menu.contact" },
    // { to: "/shop", label: "menu.show" " },
    // { to: "/admin", label: "menu.admin"  },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-0 ">
        <Container fluid className="w-100 px-3 justify-content-center">
          <Row className="w-100 align-items-center">
            {/* Left Brand */}
            <Col xs="auto" lg={3} className="d-flex align-items-center">
              <Navbar.Brand as={Link} to="/">
                Atelier
              </Navbar.Brand>

              <Badge
                type="button"
                bg="light"
                text="dark"
                onClick={() => i18n.changeLanguage("en")}
              >
                Eng
              </Badge>
              <Badge
                type="button"
                bg="light"
                text="dark"
                onClick={() => i18n.changeLanguage("fr")}
              >
                Fra
              </Badge>
              <Badge
                type="button"
                bg="light"
                text="dark"
                onClick={() => i18n.changeLanguage("ko")}
              >
                Kor
              </Badge>
            </Col>

            {/* Center Nav Menu */}
            <Col
              lg={6}
              className="d-none d-lg-flex justify-content-center nav-center"
            >
              <Nav>
                {menuItems.map(({ to, label }) => (
                  <Nav.Link key={to} as={Link} to={to} className="mx-2">
                    {t(label)}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
            {/* Right Space */}
            <Col xs lg={3} className="d-flex justify-content-end">
              {/* <Button onClick={() => i18n.changeLanguage("fr")}>FR</Button>
              <Button onClick={() => i18n.changeLanguage("ko")}>KO</Button>
              <Button onClick={() => i18n.changeLanguage("en")}>EN</Button> */}
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
                {t(label)}
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
