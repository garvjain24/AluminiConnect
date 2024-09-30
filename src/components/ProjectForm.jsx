import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectForm({ setProjects }) {
  const [projectName, setProjectName] = useState('');
  const [projectHead, setProjectHead] = useState('');
  const [projectFeatures, setProjectFeatures] = useState('');
  const [upiId, setUpiId] = useState('');
  const [accountName, setAccountName] = useState('');
  const [picture, setPicture] = useState(null);
  const [projectLink, setProjectLink] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      head: projectHead,
      features: projectFeatures,
      upiId,
      accountName,
      picture,
      projectLink
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Project Form</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Project Head</label>
          <input
            type="text"
            value={projectHead}
            onChange={(e) => setProjectHead(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Project Features</label>
          <textarea
            value={projectFeatures}
            onChange={(e) => setProjectFeatures(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">UPI ID</label>
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Account Name</label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Picture</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Project Link</label>
          <input
            type="text"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={() => navigate('/')} className="bg-gray-500 text-white py-2 px-4 mr-2 rounded-lg hover:bg-gray-600">
            Back
          </button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Contribute to the Project
          </button>
        </div>
      </form>
    </div>
  );
}