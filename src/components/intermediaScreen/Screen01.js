import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

function Screen01() {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag='h5'>INSTRUCCIÓNS</CardTitle>
          </CardBody>
          <img alt='Card cap' src='https://media.giphy.com/media/srBH5iwo7W15C/giphy.gif' width='100%' />
          <CardBody>
            <CardText>
              <ul>
                <li className='mb-2'>
                  A única forma de avanzar nas pantallas é respondendo a todas as palabras ben.
                </li>
                <li className='mb-2'>Acórdate de poñer as tildes ou a palabra será marcada como erro.</li>
                <li className='mb-2'>
                  Se cometes algún erro, terás que volver a completar TODA esa pantalla
                </li>
                <li className='mb-2'>Debes completar as respostas cas opcións que aparecen abaixo</li>
              </ul>
            </CardText>
            {/* <CardText>Están para despistar, si </CardText> */}
          </CardBody>
        </Card>
      </Col>
      <Col xs='12' className=' text-center my-3'>
        <Link to='/questions' className='btn btn-success'>
          EMPEZAR
        </Link>
      </Col>
    </Row>
  );
}

export default Screen01;
