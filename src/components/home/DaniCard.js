import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function DaniCard() {
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src='https://media.giphy.com/media/citBl9yPwnUOs/giphy.gif'
        alt='Card image cap'
      />
      <CardBody>
        <CardTitle tag='h5'>APLICACIÓN PARA PRACTICAR VOCABULARIO DE INGLÉS</CardTitle>

        <Link to='/screen01' className='btn btn-success'>
          INSTRUCCIÓNS
        </Link>
      </CardBody>
    </Card>
  );
}

export default DaniCard;
