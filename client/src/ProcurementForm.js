import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ProcurementForm = () => {
  const [subject, setSubject] = useState('');
  const [registryNumber, setRegistryNumber] = useState('');
  const [date, setDate] = useState('');
  const [startPrice, setStartPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/procurements', {
        subject,
        registry_number: registryNumber,
        date,
        start_price: parseFloat(startPrice),
      })
      .then((response) => {
        console.log('Закупка добавлена:', response.data);
        setSubject('');
        setRegistryNumber('');
        setDate('');
        setStartPrice('');
      })
      .catch((error) => {
        console.error('Ошибка при добавлении:', error);
      });
  };

  return (
    <Container fluid className="my-4">
      <Row className="bg-white border rounded-5 mt-3 p-5 mx-1">
        <Col md={12} className="mb-4">
          <h3>Добавить закупку</h3>
        </Col>
        <Col md={12}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label className="fs-5 fw-semibold">Предмет закупки</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="fs-4"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="fs-5 fw-semibold">Реестровый номер</Form.Label>
              <Form.Control
                type="text"
                value={registryNumber}
                onChange={(e) => setRegistryNumber(e.target.value)}
                required
                className="fs-5"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="fs-5 fw-semibold">Дата</Form.Label>
              <Form.Control
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="fs-5"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="fs-5 fw-semibold">Стартовая цена</Form.Label>
              <Form.Control
                type="number"
                value={startPrice}
                onChange={(e) => setStartPrice(e.target.value)}
                required
                className="fs-5"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="mt-2 fs-5"
            >
              Добавить закупку
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcurementForm;