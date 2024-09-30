import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import OngoingProjectsPage from "./screens/OngoingProjectsPage";
import PaymentGateway from "./screens/PaymentGateway";
import ProjectForm from "./screens/ProjectForm";
import Events from "./screens/Events";
import ResponsiveAppBar from "./components/Header";

function App() {
  const [projects, setProjects] = React.useState([]);

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ongoing-projects"
          element={
            <OngoingProjectsPage
              projects={projects}
              setProjects={setProjects}
            />
          }
        />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route
          path="/project-form"
          element={<ProjectForm setProjects={setProjects} />}
        />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
