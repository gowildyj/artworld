import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import artworks from "@assets/data/artworks.json";

export default function GalleryDetailPage() {
  const { id } = useParams();
  const art = artworks.find((a) => a.id === parseInt(id));

  if (!art) {
    return (
      <Container className="py-5">
        <h2>작품을 찾을 수 없습니다.</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={7}>
          <Image src={art.path} alt={art.title} fluid rounded />
        </Col>
        <Col md={5}>
          <h2>{art.title}</h2>
          <p className="text-muted">
            {art.year} | {art.medium}
          </p>
          <hr />
          {/* {art.price && <p>가격: {art.price}</p>} */}
          {art.collection && <p>Collection: {art.collection}</p>}
          <p>여기에 작품에 대한 상세 설명을 넣을 수 있습니다.</p>
        </Col>
      </Row>
    </Container>
  );
}
