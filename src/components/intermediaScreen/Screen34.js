import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

function Screen34() {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag='h5'>ATENCIÓN!!!</CardTitle>
          </CardBody>
          <img alt='Card cap' src='https://media.giphy.com/media/q1mHcB8wOCWf6/giphy.gif' width='100%' />
          <CardBody className='text-center'>
            <CardText>
              En esta pantalla hai opcións de resposta a maiores <b>que non hai que usar</b>.
            </CardText>
            <CardText>Están para despistar, si </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs='12' className=' text-center mt-5'>
        <Link to='/questions4' className='btn btn-success'>
          SIGUIENTE PANTALLA
        </Link>
      </Col>
    </Row>
  );
}

export default Screen34;
