import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Products = () => {
  return (
    <Container fluid className="my-4">
      <Row className="bg-white border rounded-5 mt-3 p-5 mx-1">
        <Col md={7}>
          <h3>Основные продукты и сервисы</h3>
        </Col>
        <Col md={5}>
          <p className="w-75 text-info-emphasis fs-5">
            Сотни специалистов выбирают нашу подготовку по государственным закупкам: профессионализм, качество и успех в каждой детали
          </p>
        </Col>
      </Row>
      <Row className="mt-3 fs-6">
        <Col md={6} lg={3}>
          <div
            className="bg-white border rounded-5 p-3 d-flex flex-column justify-content-between"
            style={{ height: '300px' }}
          >
            <div className="d-flex align-items-center">
              <img src="/images/prof.png" alt="Professional" />
              <p className="m-0 ps-2 fw-bold">Профессиональные эксперты</p>
            </div>
            <div>
              <p className="text-info-emphasis">
                Курсы проводят практики, делящиеся знаниями и кейсами в госзакупках
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div
            className="bg-white border rounded-5 p-3 d-flex flex-column justify-content-between"
            style={{ height: '300px' }}
          >
            <div className="d-flex align-items-center">
              <img src="/images/actual.png" alt="Actual" />
              <p className="m-0 ps-2 fw-bold">Актуальная программа</p>
            </div>
            <div>
              <p className="text-info-emphasis">
                Регулярно обновляем материал по госзакупкам с учетом изменений законодательства.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div
            className="bg-white border rounded-5 p-3 d-flex flex-column justify-content-between"
            style={{ height: '300px' }}
          >
            <div className="d-flex align-items-center">
              <img src="/images/sert.png" alt="Certificate" />
              <p className="m-0 ps-2 fw-bold">Сертификат о прохождении курса</p>
            </div>
            <div>
              <p className="text-info-emphasis">
                Выпускники получат сертификат, подтверждающий навыки и повышающий конкурентоспособность.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div
            className="bg-white border rounded-5 p-3 d-flex flex-column justify-content-between"
            style={{ height: '300px' }}
          >
            <div className="d-flex align-items-center">
              <img src="/images/pract.png" alt="Practical" />
              <p className="m-0 ps-2 fw-bold">Практическая направленность</p>
            </div>
            <div>
              <p className="text-info-emphasis">
                Мы предлагаем онлайн-курсы, очные занятия и мастер-классы для удобства обучения.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;