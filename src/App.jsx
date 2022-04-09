import { Fragment } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment> 
  );
};

export default App;
