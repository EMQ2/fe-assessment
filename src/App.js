import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  </Router>
);

export default App;
