import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Container fluid>
      <Row
        className="border rounded-5 mt-3 mx-1 text-white"
        style={{
          background: 'linear-gradient(139deg, #293225, #265f3e, #46ecac)',
        }}
      >
        <Col md={12} className="d-flex justify-content-between fw-semibold text-white p-3">
          <div className="d-flex align-items-center">
            <div className="d-flex fs-4">
              <img
                src="/images/Logo.png"
                style={{ width: '30px', height: '30px' }}
                alt="Logo"
              />
              <p className="m-0 ms-2">Корчагин А.М.</p>
            </div>
          </div>
          <div className="d-flex align-items-center fs-4">
            <p className="m-0">
              <a href="#about" className="text-white text-decoration-none">
                О нас
              </a>
            </p>
            <p className="ms-3 m-0">
              <a href="#blog" className="text-white text-decoration-none">
                Блог
              </a>
            </p>
            <p className="ms-3 m-0">
              <a href="#procurements" className="text-white text-decoration-none">
                Закупки
              </a>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <a href="https://example.com">
                <img
                  src="/images/white.png"
                  style={{ width: '30px', height: '30px' }}
                  alt="Social"
                />
              </a>
            </div>
            <div className="d-flex ms-2">
              <a href="https://wa.me/almikorc">
                <img
                  src="/images/WhatsApp.png"
                  style={{ width: '30px', height: '30px' }}
                  alt="WhatsApp"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;