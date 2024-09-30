import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OngoingProjectsPage from './components/OngoingProjectsPage';
import ProjectForm from './components/ProjectForm';
import PaymentGateway from './components/PaymentGateway';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Header from "./components/Header";
function App() {
  const [projects, setProjects] = useState([]);

  return (
    <>
      <p className="text-4xl">Hello World</p>
    </>
  );
}

export default App;