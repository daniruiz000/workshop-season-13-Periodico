
import './App.css';
import React from 'react';
import { Route, Routes, } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage.js'
import Navigation from './components/Navigation/Navigation.js';
import News from './components/News/News'
import Login from './components/Login/Login';

export const AuthContext = React.createContext({ user: null });

const App = () => {

  const Section = React.lazy(() => import('./components/Section/Section'))
  const NotFound = React.lazy(() => import('./components/NotFound/NotFound'))
  const [pageSelected, setPageSelected] = React.useState(1)

  const [authInfo, setAuthInfo] = React.useState(
    {
      user: null,
      password: null,
      pageSelected: pageSelected,
    })

  return (
    <AuthContext.Provider value={authInfo}>
      <div className="app">
        <Navigation setPageSelected={setPageSelected} pageSelected={pageSelected} />
        <Login login={setAuthInfo} />

        <Routes >

          <Route path='/' element={
            <Homepage />}>
          </Route>

          <Route path='/news' element={
            <News setPageSelected={setPageSelected} />}>
          </Route>

          <Route path='/news/:topic/' element={
            <React.Suspense fallback='Cargando...'>
              <Section setPageSelected={setPageSelected} pageSelected={pageSelected} />
            </React.Suspense>}>
          </Route>

          <Route path='*' element={
            <React.Suspense fallback='Cargando...'>
              < NotFound />
            </React.Suspense>}>
          </Route>

        </Routes>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
