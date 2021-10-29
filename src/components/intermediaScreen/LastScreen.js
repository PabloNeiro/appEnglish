import React from 'react';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';

function LastScreen() {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody className='text-center'>
            <CardTitle tag='h5'>YUHUUUUU!!!! </CardTitle>
            <CardTitle tag='h5'>CONSEGUÍCHELO!!!!</CardTitle>
          </CardBody>
          <img
            alt='Card  cap'
            src='https://media.giphy.com/media/3orieOxwdKssWEehsA/giphy.gif'
            width='100%'
          />
          <img
            alt='Card  cap'
            src='https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif'
            width='100%'
          />
        </Card>
      </Col>
    </Row>
  );
}

export default LastScreen;
