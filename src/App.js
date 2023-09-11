import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Search from './components/Search'
import PhotoContextProvider from './context/PhotoContext';
import Item from './components/Item';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  return (
    <div className="container">

      <PhotoContextProvider>

        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route exact path="/" element={<Navigate to="/mountain" />} />
              <Route path="/mountain" element={<Item searchTerm="mountain" />} />
              <Route path='/beach' element={<Item searchTerm='beach' />} />
              <Route path='/bird' element={<Item searchTerm='bird' />} />
              <Route path='/food' element={<Item searchTerm='food' />} />
              <Route path='/search' element={<Form />} />
            </Routes>
          </div>
        </Router>
      </PhotoContextProvider>
    </div>

  );
}

export default App;
