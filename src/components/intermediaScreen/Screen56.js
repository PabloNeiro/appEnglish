import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

function Screen56() {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag='h5'>ATENCIÓN!!!</CardTitle>
          </CardBody>
          <img alt='Card cap' src='https://media.giphy.com/media/dSBCzU9g1WKUU/giphy.gif' width='100%' />
          <CardBody className='text-center'>
            <CardText>Chegaches á última pantalla</CardText>
            <CardText>
              Aquí <b>non verás as opcións de resposta</b>. Todas as palabras son repetidas das pantallas
              anteriores así que terás que completalas para comprobar se te acordas do que acabas de escribir
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs='12' className=' text-center mt-5'>
        <Link to='/questions6' className='btn btn-success'>
          ÚLTIMA PANTALLA
        </Link>
      </Col>
    </Row>
  );
}

export default Screen56;
