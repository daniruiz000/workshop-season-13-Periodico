
import './App.css';
import React from 'react';
import { Route, Routes, } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage.js'
import Navigation from './components/Navigation/Navigation.js';
import News from './components/News/News'
import NotFound from './components/NotFound/NotFound';
import Section from './components/Section/Section';

const App = ()=> {

  const [pageSelected, setPageSelected] = React.useState(1)

  return (

    <div className="app">
      <Navigation setPageSelected={setPageSelected} />
      <Routes >
        <Route path='/' element={
          <Homepage />}>
        </Route>
        <Route path='/news' element={
          <News setPageSelected={setPageSelected}/>}>
        </Route>
        <Route path='/news/:topic/' element={
          <Section pageSelected={pageSelected} setPageSelected={setPageSelected} />}>
        </Route>
        <Route path='*' element={
          <NotFound />
        }>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
