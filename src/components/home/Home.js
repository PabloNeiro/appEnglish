import React from 'react';
import { Col, Row } from 'reactstrap';
import NavBar from '../navbar/NavBar';
import DaniCard from './DaniCard';

function Home() {
  return (
    <Row className='text-center'>
      <NavBar />
      <Col xs={12} md={6} className='mt-5'>
        <DaniCard />
      </Col>
    </Row>
  );
}

export default Home;
