import { Chip } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import './questions.css';

function Questions4() {
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  const [answer5, setAnswer5] = useState();
  const [answer6, setAnswer6] = useState();
  const [answer7, setAnswer7] = useState();
  const [answer8, setAnswer8] = useState();
  const [answer9, setAnswer9] = useState();
  const [answer10, setAnswer10] = useState();

  const [error1, setError1] = useState(0);
  const [error2, setError2] = useState(0);
  const [error3, setError3] = useState(0);
  const [error4, setError4] = useState(0);
  const [error5, setError5] = useState(0);
  const [error6, setError6] = useState(0);
  const [error7, setError7] = useState(0);
  const [error8, setError8] = useState(0);
  const [error9, setError9] = useState(0);
  const [error10, setError10] = useState(0);
  const [check, setCheck] = useState(false);

  const addProperty1 = (event) => {
    setAnswer1(event.target.value);
  };
  const addProperty2 = (event) => {
    setAnswer2(event.target.value);
  };
  const addProperty3 = (event) => {
    setAnswer3(event.target.value);
  };
  const addProperty4 = (event) => {
    setAnswer4(event.target.value);
  };
  const addProperty5 = (event) => {
    setAnswer5(event.target.value);
  };
  const addProperty6 = (event) => {
    setAnswer6(event.target.value);
  };
  const addProperty7 = (event) => {
    setAnswer7(event.target.value);
  };
  const addProperty8 = (event) => {
    setAnswer8(event.target.value);
  };
  const addProperty9 = (event) => {
    setAnswer9(event.target.value);
  };
  const addProperty10 = (event) => {
    setAnswer10(event.target.value);
  };

  const lista = [
    {
      palabra: 'uncle',
      solucion: 'tío',
      funcion: addProperty1,
      background: error1 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'hija',
      solucion: 'daughter',
      funcion: addProperty2,
      background: error2 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'sobrino',
      solucion: 'nephew',
      funcion: addProperty3,
      background: error3 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'son in low',
      solucion: 'yerno',
      funcion: addProperty4,
      background: error4 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'sobrina',
      solucion: 'niece',
      funcion: addProperty5,
      background: error5 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'primo/a',
      solucion: 'cousin',
      funcion: addProperty6,
      background: error6 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'hijo o hija',
      solucion: 'child',
      funcion: addProperty7,
      background: error7 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'step-father',
      solucion: 'padrastro',
      funcion: addProperty8,
      background: error8 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'father in law',
      solucion: 'suegro',

      funcion: addProperty9,
      background: error9 === 0 ? '' : 'inputBack',
    },
    {
      palabra: 'tía',
      solucion: 'aunt',
      funcion: addProperty10,
      background: error10 === 0 ? '' : 'inputBack',
    },
  ];
  function refreshPage() {
    window.location.reload();
  }

  const checkResults = () => {
    answer1 !== lista[0].solucion && setError1(1);
    answer2 !== lista[1].solucion && setError2(1);
    answer3 !== lista[2].solucion && setError3(1);
    answer4 !== lista[3].solucion && setError4(1);
    answer5 !== lista[4].solucion && setError5(1);
    answer6 !== lista[5].solucion && setError6(1);
    answer7 !== lista[6].solucion && setError7(1);
    answer8 !== lista[7].solucion && setError8(1);
    answer9 !== lista[8].solucion && setError9(1);
    answer10 !== lista[9].solucion && setError10(1);
    setCheck(true);
  };

  const options = [
    lista[8].solucion,
    lista[5].solucion,
    'children',
    lista[7].solucion,
    lista[0].solucion,
    'parents',
    lista[2].solucion,
    lista[6].solucion,
    lista[4].solucion,
    'trainers',
    lista[1].solucion,
    lista[9].solucion,
    lista[3].solucion,
  ];

  return (
    <>
      <Container>
        <Row className='mt-2'>
          <Col xs='12' className='text-center mb-1'>
            {!check ? (
              <Button color='success' block disabled>
                Pantalla 4 de 6: FAMILY
              </Button>
            ) : error1 + error2 + error3 + error4 + error5 + error6 + error7 + error8 + error9 + error10 !==
              0 ? (
              <>
                <div className='text-center'>
                  <Button color='danger' onClick={() => refreshPage()}>
                    Volver a intentar
                  </Button>
                </div>
              </>
            ) : (
              <div className='text-center mt-1'>
                <Link to='/screen45' className='btn btn-success'>
                  SEGUINTE PANTALLA
                </Link>
              </div>
            )}
          </Col>
          <Col xs={12} className='p-3'>
            {lista.map((value) => (
              <FormGroup row>
                <Label for='exampleEmail' xs={6}>
                  {value.palabra}
                </Label>
                <Col xs={5}>
                  <div className={value.background}>
                    {check ? (
                      <Input
                        disabled
                        type='text'
                        name='answer'
                        id='example'
                        placeholder='answer'
                        onChange={(event) => value.funcion(event, value.solucion)}
                      />
                    ) : (
                      <Input
                        type='text'
                        name='answer'
                        id='example'
                        placeholder='answer'
                        onChange={(event) => value.funcion(event, value.solucion)}
                      />
                    )}
                  </div>
                </Col>
              </FormGroup>
            ))}

            <div className='mt-3'>
              {!check && (
                <>
                  {options.map((value) => (
                    <Chip label={value} color='primary' className='m-1' />
                  ))}
                  <div className='text-center mt-2'>
                    <Button color='success' onClick={() => checkResults()}>
                      COMPROBAR
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Col>

          <Col xs='12'>
            {!check ? (
              <div></div>
            ) : error1 + error2 + error3 + error4 + error5 + error6 + error7 + error8 + error9 + error10 !==
              0 ? (
              <div>
                <img
                  src='https://media.giphy.com/media/xT5LMESsx1kUe8Hiyk/giphy.gif'
                  alt='gif'
                  width='100%'
                  height='100%'
                ></img>
              </div>
            ) : (
              <div>
                <img
                  src='https://media.giphy.com/media/tkYpAbKdWj4TS/giphy.gif'
                  alt='gif'
                  width='100%'
                  height='100%'
                ></img>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Questions4;
