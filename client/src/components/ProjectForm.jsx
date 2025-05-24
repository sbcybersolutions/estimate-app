import { useState } from 'react';

function ProjectForm({ onStart }) {
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client && project && type) {
      onStart({ client, project, type });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block font-medium">Client Name</label>
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Project Name</label>
        <input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Project Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a type</option>
          <option value="webinar">Webinar</option>
          </select>
      </div>

      <button
        type="submit"
        className="bg-accent text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Start Quote
      </button>
    </form>
  );
}

export default ProjectForm;
// This component is a form that allows users to input project details.
// It includes fields for client name, project name, and project type.