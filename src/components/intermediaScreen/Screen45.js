import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

function Screen45() {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag='h5'>ATENCIÓN!!!</CardTitle>
          </CardBody>
          <img alt='Card cap' src='https://media.giphy.com/media/G2zkfm89fLuxO/giphy.gif' width='100%' />
          <CardBody className='text-center'>
            <CardText>En esta pantalla hai opcións de resposta a maiores que non hai que usar.</CardText>
            <CardText>
              Ademáis, hai <b>dúas palabras que non teñen a resposta entre as opcións</b> que se dan. Hay que
              sabelas...
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xs='12' className=' text-center mt-5'>
        <Link to='/questions5' className='btn btn-success'>
          SEGUINTE PANTALLA
        </Link>
      </Col>
    </Row>
  );
}

export default Screen45;
