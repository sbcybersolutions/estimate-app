import { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import QuoteTable from '../components/QuoteTable';
import resourceData from '../data/resources';
import { exportQuoteToExcel } from '../services/exportToExcel';

function NewQuote() {
  const [projectInfo, setProjectInfo] = useState(null);
  const [total, setTotal] = useState(0);
  const [rows, setRows] = useState([]);

  const handleStart = (info) => {
    setProjectInfo(info);
    setRows([]); // reset if user goes back and starts over
  };

  const handleExport = () => {
    exportQuoteToExcel({ projectInfo, rows, total });
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

          <QuoteTable
            resources={resources}
            onTotalsChange={setTotal}
            onRowsChange={setRows}
          />

          <div className="mt-6 flex justify-between items-center">
            <div className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </div>
            <button
              onClick={handleExport}
              className="bg-accent text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Export to Excel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NewQuote;
// This component handles the new quote creation process.
// It includes the project form, quote table, and export functionality.