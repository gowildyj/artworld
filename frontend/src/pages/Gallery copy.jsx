import React, { useState } from "react";
import { Container, Row, Col, Modal, Image } from "react-bootstrap";
import artworks from "@assets/data/artworks.json";
import "./Gallery.css"; // 갤러리용 스타일

export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleClose = () => setSelectedArt(null);
  const handleOpen = (art) => setSelectedArt(art);

  return (
    <Container className="py-5">
      <Row className="g-3">
        {artworks.map((art) => (
          <Col
            key={art.id}
            xs={12} // 모바일: 전체 너비
            // sm={6} // 작은 화면: 2개
            md={6} // 중간: 3개
            lg={4} // 큰 화면: 4개
            xl={3} // 매우 큰 화면: 6개
            className="gallery-item"
            onClick={() => handleOpen(art)}
          >
            <Image
              src={art.path}
              alt={art.title}
              rounded
              className="gallery-thumbnail"
            />
          </Col>
        ))}
      </Row>

      <Modal show={!!selectedArt} onHide={handleClose} size="lg" centered>
        <Modal.Body className="d-flex flex-column flex-lg-row gap-4">
          {selectedArt && (
            <>
              <Image
                src={selectedArt.path}
                alt={selectedArt.title}
                fluid
                className="modal-art-image"
              />
              <div>
                <h5>{selectedArt.title}</h5>
                <p>{selectedArt.year}</p>
                <p>{selectedArt.medium}</p>
                {selectedArt.price && <p>가격: {selectedArt.price}</p>}
                {selectedArt.collection && (
                  <p>Collection: {selectedArt.collection}</p>
                )}
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
