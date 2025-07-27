import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Image, Button } from "react-bootstrap";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";

import { useSearchParams } from "react-router-dom";
import artworks from "@assets/data/artworks.json";
import "./Gallery.css";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const artId = searchParams.get("art");
  const selectedArt = selectedIndex !== null ? artworks[selectedIndex] : null;

  useEffect(() => {
    if (artId) {
      const index = artworks.findIndex((a) => a.id === parseInt(artId, 10));
      if (index !== -1) {
        setSelectedIndex(index);
      }
    } else {
      setSelectedIndex(null);
    }
  }, [artId]);

  const handleOpen = (art) => {
    setSearchParams({ art: art.id });
  };

  const handleClose = () => {
    setSearchParams({});
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + artworks.length) % artworks.length;
    const prevId = artworks[prevIndex].id;
    setSearchParams({ art: prevId });
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % artworks.length;
    const nextId = artworks[nextIndex].id;
    setSearchParams({ art: nextId });
  };

  return (
    <Container className="py-5">
      <Row className="g-3">
        {artworks.map((art) => (
          <Col
            key={art.id}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={3}
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
              {/* ✨ 1. 이미지를 감싸는 컨테이너 생성 */}
              <div className="modal-image-container">
                {/* 2. 이전 화살표 버튼 */}
                <button
                  className="modal-arrow prev"
                  onClick={handlePrev}
                  // disabled={selectedIndex === 0}
                >
                  <ArrowLeftCircleFill size={30} />
                </button>

                <Image
                  src={selectedArt.path}
                  alt={selectedArt.title}
                  fluid
                  className="modal-art-image"
                />

                {/* 3. 다음 화살표 버튼 */}
                <button
                  className="modal-arrow next"
                  onClick={handleNext}
                  // disabled={selectedIndex === artworks.length - 1}
                >
                  <ArrowRightCircleFill size={30} />
                </button>
              </div>

              <div>
                <h5>{selectedArt.title}</h5>
                <p>{selectedArt.year}</p>
                <p>{selectedArt.medium}</p>
                {selectedArt.price && <p>가격: {selectedArt.price}</p>}
                {selectedArt.collection && (
                  <p>Collection: {selectedArt.collection}</p>
                )}
                {/* 4. 기존 버튼 삭제 */}
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
