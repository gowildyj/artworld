import React, { useState } from "react";
import { Container, Row, Col, Modal, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // react-router-dom의 Link를 import
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons"; // 아이콘 import
import artworks from "@assets/data/artworks.json";
import "./Gallery.css";

export default function Gallery() {
  // 어떤 '객체'가 선택되었는지뿐만 아니라, 배열의 몇 번째 '인덱스'인지도 관리합니다.
  const [currentIndex, setCurrentIndex] = useState(null);

  // 모달 닫기
  const handleClose = () => setCurrentIndex(null);

  // 모달 열기: 작품의 인덱스를 받아 state에 저장
  const handleOpen = (index) => setCurrentIndex(index);

  // 이전 작품 보기
  const handlePrevious = () => {
    // 이벤트 전파(stopPropagation)로 모달이 닫히는 것을 방지
    event.stopPropagation();
    const newIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    setCurrentIndex(newIndex);
  };

  // 다음 작품 보기
  const handleNext = () => {
    event.stopPropagation();
    const newIndex = (currentIndex + 1) % artworks.length;
    setCurrentIndex(newIndex);
  };

  const selectedArt = artworks[currentIndex];

  return (
    <Container className="py-5">
      <Row className="g-3">
        {artworks.map((art, index) => (
          <Col
            key={art.id}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="gallery-item"
            onClick={() => handleOpen(index)} // map의 index를 넘겨줍니다.
          >
            <Link
              key={art.id}
              to={`/gallery/artwork/${art.id}`}
              state={{ backgroundLocation: location }} // 현재 location을 배경으로 지정
            >
              <Image
                src={art.path}
                alt={art.title}
                rounded
                className="gallery-thumbnail"
              />
            </Link>
          </Col>
        ))}
      </Row>

      <Modal
        show={currentIndex !== null}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          {" "}
          {/* 패딩을 0으로 설정해 이미지가 꽉 차게 */}
          {selectedArt && (
            <div className="modal-content-wrapper">
              {" "}
              {/* 캐러셀 버튼을 위한 부모 요소 */}
              {/* 이전 버튼 */}
              <button
                className="carousel-control prev"
                onClick={handlePrevious}
              >
                <ArrowLeftCircleFill size={30} />
              </button>
              <Image
                src={selectedArt.path}
                alt={selectedArt.title}
                className="modal-art-image"
              />
              {/* 다음 버튼 */}
              <button className="carousel-control next" onClick={handleNext}>
                <ArrowRightCircleFill size={30} />
              </button>
              {/* 작품 정보 */}
              <div className="art-info">
                <h5>{selectedArt.title}</h5>
                <p className="mb-1">
                  {selectedArt.year} | {selectedArt.medium}
                </p>
                {selectedArt.price && (
                  <p className="mb-1">가격: {selectedArt.price}</p>
                )}
                {selectedArt.collection && (
                  // 컬렉션 이름을 Link로 감싸서 해당 컬렉션 페이지로 이동
                  <Link
                    to={`/gallery/collection/${selectedArt.collection}`}
                    onClick={handleClose}
                  >
                    Collection: {selectedArt.collection}
                  </Link>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
