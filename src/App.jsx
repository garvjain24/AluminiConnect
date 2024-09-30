import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OngoingProjectsPage from './components/OngoingProjectsPage';
import ProjectForm from './components/ProjectForm';
import PaymentGateway from './components/PaymentGateway';
import './index.css';

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OngoingProjectsPage projects={projects} setProjects={setProjects} />} />
        <Route path="/project-form" element={<ProjectForm setProjects={setProjects} />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
      </Routes>
    </Router>
  );
}

export default App;