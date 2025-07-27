import { Container, Row, Col, Image } from "react-bootstrap";
import artworks from "@assets/data/artworks.json";

export default function Gallery() {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {artworks.map((art) => (
          <Col
            key={art.id}
            xs={6}
            sm={4}
            md={3}
            lg={3}
            xl={2}
            className="gallery-item"
            // onClick={() => handleOpen(art)}
          >
            <Image
              src={art.path}
              alt={art.title}
              thumbnail
              className="gallery-thumbnail"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
