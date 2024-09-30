import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OngoingProjectsPage({ projects, setProjects }) {
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate('/project-form');
  };

  const handleSeeProject = (project) => {
    navigate('/payment-gateway', { state: { project } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Ongoing Projects</h1>
      <button
        onClick={handleAddProject}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
      >
        Add Project
      </button>
      <div className="w-full max-w-2xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-4 flex">
            {project.picture && (
              <img src={project.picture} alt={project.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
            )}
            <div>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p><strong>Project Head:</strong> {project.head}</p>
              <p><strong>Features:</strong> {project.features}</p>
              {project.projectLink && (
                <p><a href={project.projectLink} className="text-blue-500 hover:underline">Project Link</a></p>
              )}
              <button
                onClick={() => handleSeeProject(project)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-2"
              >
                See Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}