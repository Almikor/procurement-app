import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container fluid className="my-4">
      <Row className="bg-white border rounded-5 mt-3 p-5 mx-1">
        <Col md={12} className="mb-4">
          <h2>Контакты</h2>
        </Col>
        <Col md={12} className="d-flex justify-content-between fw-semibold">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <img src="/images/Call.png" style={{ width: '30px', height: '30px' }} alt="Phone" />
              <p className="m-0 ms-2">
                <a href="tel:+88005553535" className="text-black text-decoration-none">
                  8(800) 555 35 35
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center ms-4">
              <img src="/images/envelope-alt.png" style={{ width: '30px', height: '30px' }} alt="Email" />
              <p className="m-0 ms-2">
                <a href="mailto:almikorc@mail.ru" className="text-black text-decoration-none">
                  almikorc@mail.ru
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <img src="/images/tg.png" style={{ width: '30px', height: '30px' }} alt="Telegram" />
              <p className="m-0 ms-2">
                <a href="https://t.me/almikorc" className="text-black text-decoration-none">
                  @almikorc
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center ms-4">
              <img src="/images/WUvector.png" style={{ width: '30px', height: '30px' }} alt="WhatsApp" />
              <p className="m-0 ms-2">
                <a href="https://wa.me/almikorc" className="text-black text-decoration-none">
                  @almikorc
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;