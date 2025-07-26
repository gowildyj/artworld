import { Container, Row, Col, Image } from "react-bootstrap";
import InfoItem from "@components/layout/InfoItem";
import artistPhoto from "@assets/images/artistPhoto.png";
import { educations, works, activities } from "@assets/data/aboutData.js";

export default function About() {
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
            <h2>정수진</h2>
            <h5 className="text-muted mb-3">화가 / 작가</h5>
            <p>
              <em>
                대한민국, 서울출생 <br />
                프랑스 파리에서 거주 및 활동중
              </em>
            </p>
            <p style={{ textAlign: "justify" }}>
              정수진(Soo Jin CHUNG, 1988년 서울 출생)은 파리 1대학
              팡테옹-소르본에서 조형예술 및 예술과학 박사과정을 밟고 있는
              현대미술 작가이자 연구자이다. 예술심리학, 정신분석, 뉴미디어의
              교차 지점에서 인간 감각과 감정의 변형을 탐구하며, 특히 가상
              캐릭터와 인간의 상호작용이 인지와 감성에 미치는 영향을 예술적
              언어로 풀어낸다. 그녀의 작업은 회화, 영상, 설치, 퍼포먼스를
              넘나들며 감각적 경험과 심리적 서사를 연결짓는 데 주력한다.그녀는
              프랑스, 독일, 일본, 이탈리아, 룩셈부르크, 중국, 한국 등 15개국
              이상에서 전시를 개최하였으며, 2019년 도쿄 Art Olympia에서 학생
              부문 우수상, 2022년 모던아트 대상전 수상 등의 성과를 거두었다.
              또한 EDUNOVATIC 국제학술대회(2024~2025, 마드리드)에서 발표자 및
              기조연설자로 초청받으며 이론과 실천을 아우르는 예술가로서의 면모를
              보여주고 있다.
            </p>
          </Col>
        </Row>

        {/* 본문 소개 */}
        <Row>
          <Col xs={12} className="mt-4">
            <hr />

            {/* 주요 활동 */}
            <div className="activity-list my-5">
              <div className="title-overlay">
                <h3 className="subtitle-text">주요 활동</h3>
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
                <h3 className="subtitle-text">학위 / 교육</h3>
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
                <h3 className="subtitle-text">경력 / 수상</h3>
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

function ExperienceList({ data }) {
  return (
    <div>
      {data.map((item, idx) => (
        <InfoItem
          key={idx}
          date={item.date}
          location={item.location}
          description={item.description}
        />
      ))}
    </div>
  );
}
