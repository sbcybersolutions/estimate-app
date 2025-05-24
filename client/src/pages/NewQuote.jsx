import { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import QuoteTable from '../components/QuoteTable';
import resourceData from '../data/resources';

function NewQuote() {
  const [projectInfo, setProjectInfo] = useState(null);
  const [total, setTotal] = useState(0);

  const handleStart = (info) => {
    setProjectInfo(info);
  };

  const resources = projectInfo
    ? resourceData[projectInfo.type] || []
    : [];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">New Quote</h2>

      {!projectInfo ? (
        <ProjectForm onStart={handleStart} />
      ) : (
        <>
          <div className="mb-6">
            <p className="text-lg">Quote for <strong>{projectInfo.client}</strong> – <em>{projectInfo.project}</em></p>
          </div>

          <QuoteTable resources={resources} onTotalsChange={setTotal} />

          <div className="mt-6 text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export default NewQuote;
// This component handles the new quote creation process, including project details and resource management.
// It uses the ProjectForm for input and QuoteTable to display resources and calculate totals.