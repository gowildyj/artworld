import { useState, useEffect } from "react";
import { Modal, Image } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";
import artworks from "@assets/data/artworks.json";
import "./Gallery.css"; // 기존 Gallery.css 재활용

export default function GalleryModal() {
  const { id } = useParams(); // URL에서 작품 id를 가져옴
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  const [currentIndex, setCurrentIndex] = useState(
    artworks.findIndex((art) => art.id === parseInt(id))
  );

  const handleClose = () => navigate(-1); // 모달을 닫으면 뒤로가기

  const handleNavigation = (event, direction) => {
    event.stopPropagation();
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % artworks.length;
    } else {
      newIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    }
    setCurrentIndex(newIndex);
    // URL도 함께 변경해줍니다.
    navigate(`/gallery/artwork/${artworks[newIndex].id}`, {
      state: { backgroundLocation: navigate.location }, // state를 유지하며 이동
    });
  };

  const selectedArt = artworks[currentIndex];

  if (!selectedArt) return null; // 작품 정보가 없으면 아무것도 렌더링하지 않음

  return (
    <Modal show={true} onHide={handleClose} size="lg" centered>
      <Modal.Body className="p-0">
        <div className="modal-content-wrapper">
          <button
            className="carousel-control prev"
            onClick={(e) => handleNavigation(e, "prev")}
          >
            <ArrowLeftCircleFill size={30} />
          </button>

          <Image
            src={selectedArt.path}
            alt={selectedArt.title}
            className="modal-art-image"
          />

          <button
            className="carousel-control next"
            onClick={(e) => handleNavigation(e, "next")}
          >
            <ArrowRightCircleFill size={30} />
          </button>

          <div className="art-info">{/* 작품 정보... */}</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
