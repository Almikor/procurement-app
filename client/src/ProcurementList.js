import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';

const ProcurementList = () => {
  const [procurements, setProcurements] = useState([]);

  useEffect(() => {
    axios
      .get('/procurements')
      .then((response) => {
        setProcurements(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке закупок:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/procurements/${id}`)
      .then(() => {
        setProcurements(procurements.filter((p) => p.id !== id));
      })
      .catch((error) => {
        console.error('Ошибка при удалении:', error);
      });
  };

  return (
    <Container fluid className="my-4">
      <Row className="bg-white border rounded-5 mt-3 p-5 mx-1">
        <Col md={12} className="mb-4">
          <h3>Реестр наших закупок</h3>
        </Col>
        <Col md={12}>
          <Table responsive>
            <thead>
              <tr>
                <th scope="col">Предмет закупки</th>
                <th scope="col">Реестровый номер закупки в ЕИС</th>
                <th scope="col">Дата</th>
                <th scope="col">Стартовая цена</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {procurements.map((procurement) => (
                <tr key={procurement.id}>
                  <td className="fs-5 fw-semibold">{procurement.subject}</td>
                  <td className="fs-5 text-info-emphasis">{procurement.registry_number}</td>
                  <td className="fs-5 text-info-emphasis">{procurement.date}</td>
                  <td className="fs-5 text-info-emphasis">{procurement.start_price}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(procurement.id)}
                    >
                      Удалить
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcurementList;