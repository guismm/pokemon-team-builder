import { Fragment } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import headerItems from './header.json';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header menuList={headerItems} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment> 
  );
};

export default App;
