import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Screen01 from '../components/intermediaScreen/Screen01';
import Screen34 from '../components/intermediaScreen/Screen34';
import Screen45 from '../components/intermediaScreen/Screen45';
import Screen56 from '../components/intermediaScreen/Screen56';
import Questions from '../components/questions/Questions';
import Questions2 from '../components/questions/Questions2';
import Questions3 from '../components/questions/Questions3';
import Questions4 from '../components/questions/Questions4';
import Questions5 from '../components/questions/Questions5';
import Questions6 from '../components/questions/Questions6';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/screen01'>
        <Screen01 />
      </Route>
      <Route exact path='/questions'>
        <Questions />
      </Route>
      <Route exact path='/questions2'>
        <Questions2 />
      </Route>
      <Route exact path='/questions3'>
        <Questions3 />
      </Route>
      <Route exact path='/screen34'>
        <Screen34 />
      </Route>
      <Route exact path='/questions4'>
        <Questions4 />
      </Route>
      <Route exact path='/screen45'>
        <Screen45 />
      </Route>
      <Route exact path='/questions5'>
        <Questions5 />
      </Route>
      <Route exact path='/screen56'>
        <Screen56 />
      </Route>
      <Route exact path='/questions6'>
        <Questions6 />
      </Route>
    </Switch>
  );
}

export default Routes;
