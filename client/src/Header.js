import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className="my-4">
      <Row
        className="border rounded-5 mt-3 p-5 mx-1 text-white"
        style={{
          background: 'linear-gradient(139deg, #293225, #265f3e, #46ecac)',
        }}
      >
        <Col md={12} className="mt-5">
          <h1 className="text-center">
            Откройте двери к успешным закупкам: <br />
            <span style={{ color: 'chartreuse' }}>учитесь, развивайтесь и побеждайте</span>
          </h1>
        </Col>
        <Col md={12} className="my-5">
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-end" style={{ color: '#BED7CF' }}>
              <div className="d-flex align-items-center">
                <img
                  src="/images/Security.png"
                  alt="Security"
                  style={{ width: '50px', height: '50px' }}
                />
                <p className="m-0 ms-2 fw-semibold">
                  Круглосуточная <br /> горячая линия
                </p>
              </div>
              <div className="d-flex align-items-center mt-3">
                <img
                  src="/images/Suitcase.png"
                  alt="Suitcase"
                  style={{ width: '50px', height: '50px' }}
                />
                <p className="m-0 ms-2 fw-semibold">
                  Большая практика <br /> обжалования
                </p>
              </div>
              <div className="d-flex align-items-center mt-3">
                <img
                  src="/images/Message.png"
                  alt="Message"
                  style={{ width: '50px', height: '50px' }}
                />
                <p className="m-0 ms-2 fw-semibold">
                  Рейтинг 4.8 / 5 <br /> на otzovik.com
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center ms-4">
              <img
                src="/images/v97_163.png"
                style={{ width: '400px' }}
                className="rounded-5"
                alt="Profile"
              />
            </div>
            <div className="d-flex flex-column ms-4">
              <p className="m-0 ps-2 fw-bold fs-4">Я - Александр Корчагин</p>
              <p className="m-0 ps-2 fw-bold fs-4" style={{ color: '#BED7CF' }}>
                эксперт в области госзакупок <br />
                и административного права <br />
                более чем с 10 летним стажем
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;