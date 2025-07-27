import { Container, Row, Col, Image, Badge, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import artistPhoto from "@assets/images/artistPhoto.png";
import enData from "@assets/data/about.en.json";
import frData from "@assets/data/about.fr.json";
import koData from "@assets/data/about.ko.json";
import { useEffect, useState } from "react";
import i18n from "i18next";

export default function About() {
  const { t } = useTranslation();
  const [data, setData] = useState(enData);

  useEffect(() => {
    const lang = i18n.language || "en";
    if (lang === "fr") setData(frData);
    else if (lang === "ko") setData(koData);
    else setData(enData);
  }, [i18n.language]);

  const { menu, bio, educations, works, activities, etc } = data;

  return (
    <Container className="py-5">
      <Row>
        {/* 상단: 사진 + 약력 */}
        <Row className="mb-4 align-items-center">
          {/* 왼쪽 사진 */}
          <Col md={4} className="mb-3 mb-md-0">
            <Image
              src={artistPhoto}
              alt="Artist Portrait"
              fluid
              rounded
              className="image-about"
            />
          </Col>

          {/* 오른쪽 약력 */}
          <Col md={8}>
            <h2>{bio.name}</h2>
            <h5 className="text-muted mb-3">{bio.title}</h5>
            <p>
              <em>
                {bio.birth}
                <br />
                {bio.current}
              </em>
            </p>
            <p style={{ textAlign: "justify" }}>{bio.desc}</p>
          </Col>
        </Row>

        {/* 본문 소개 */}
        <Row>
          <Col xs={12} className="mt-4">
            <hr />

            {/* 주요 활동 */}
            <div className="activity-list my-5">
              <div className="title-overlay">
                <h3 className="subtitle-text">{menu.activities}</h3>
              </div>
              {activities.map((item, idx) => (
                <Row key={idx} className="my-2">
                  <Col
                    xs={12}
                    md={2}
                    className="fw-bold text-md-end text-start"
                  >
                    {item.date}
                  </Col>
                  <Col>
                    <div className="fw-semibold">{item.title}</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="text-muted small mb-1">{item.location}</div>
                  </Col>
                </Row>
              ))}
            </div>

            {/* 학위 / 교육 */}
            <div className="education-list my-5">
              <div className="title-overlay">
                <h3 className="subtitle-text">{menu.educations}</h3>
              </div>
              {educations.map((item, idx) => (
                <Row key={idx} className="my-2">
                  <Col
                    xs={12}
                    md={2}
                    className="fw-bold text-md-end text-start"
                  >
                    {item.date}
                  </Col>
                  <Col xs={12} md={9}>
                    {item.desc}
                  </Col>
                </Row>
              ))}
            </div>

            {/* 경력 / 수상 */}
            <div className="work-list my-5">
              <div className="title-overlay">
                <h3 className="subtitle-text">{menu.works}</h3>
              </div>
              {works.map((item, idx) => (
                <Row key={idx} className="my-2">
                  <Col
                    xs={12}
                    md={2}
                    className="fw-bold text-md-end text-start"
                  >
                    {item.date}
                  </Col>
                  <Col>{item.desc}</Col>
                  <Col xs={12} md={4}>
                    <div className="text-muted small mb-1">{item.location}</div>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

function Section({ title, data, type }) {
  return (
    <div className={`${type}-list my-5`}>
      <div className="title-overlay">
        <h3 className="subtitle-text">{title}</h3>
      </div>
      {data.map((item, idx) => (
        <Row key={idx} className="my-2">
          <Col xs={12} md={2} className="fw-bold text-md-end text-start">
            {item.date}
          </Col>
          <Col>
            <div className="fw-semibold">{item.title || item.desc}</div>
          </Col>
          {item.location && (
            <Col xs={12} md={4}>
              <div className="text-muted small mb-1">{item.location}</div>
            </Col>
          )}
        </Row>
      ))}
    </div>
  );
}
