import { useState } from 'react';
import ProjectForm from '../components/ProjectForm';

function NewQuote() {
  const [projectInfo, setProjectInfo] = useState(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">New Quote</h2>
      {!projectInfo ? (
        <ProjectForm onStart={setProjectInfo} />
      ) : (
        <div>
          <p className="mb-4">Creating quote for <strong>{projectInfo.client}</strong> – <em>{projectInfo.project}</em> ({projectInfo.type})</p>
          {/* Next: Show dynamic resource table here */}
        </div>
      )}
    </div>
  );
}

export default NewQuote;
// This component is responsible for creating a new quote. It uses the ProjectForm component to gather project information from the user.
// Once the user submits the form, it displays a message indicating that a quote is being created for the specified client and project.