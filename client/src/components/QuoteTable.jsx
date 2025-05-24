import { useState, useEffect } from 'react';

function QuoteTable({ resources, onTotalsChange, onRowsChange }) {
  const [rows, setRows] = useState(
    resources.map(r => ({ ...r, hours: 0 }))
  );

  useEffect(() => {
    // Calculate and pass back total
    const total = rows.reduce((acc, row) => {
      const hard = row.hours * row.rate;
      const billRate = row.rate / 0.5;
      const billPrice = billRate * row.hours;
      return acc + billPrice;
    }, 0);
    onTotalsChange(total);

    // Also notify parent of updated rows
    if (onRowsChange) {
      onRowsChange(rows);
    }
  }, [rows, onTotalsChange, onRowsChange]);

  const handleHoursChange = (index, value) => {
    const updated = [...rows];
    updated[index].hours = parseFloat(value) || 0;
    setRows(updated);
  };

  return (
    <table className="w-full table-auto border-collapse mt-6">
      <thead>
        <tr className="bg-primary text-white">
          <th className="p-2 text-left">Resource</th>
          <th className="p-2 text-left">Hours/Units</th>
          <th className="p-2 text-left">Hard Cost</th>
          <th className="p-2 text-left">Billing Price</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const hardCost = row.rate * row.hours;
          const billingRate = row.rate / 0.5;
          const billingPrice = billingRate * row.hours;
          return (
            <tr key={i} className="border-b">
              <td className="p-2">{row.name}</td>
              <td className="p-2">
                <input
                  type="number"
                  value={row.hours}
                  onChange={(e) => handleHoursChange(i, e.target.value)}
                  className="border p-1 rounded w-24"
                />
              </td>
              <td className="p-2">${hardCost.toFixed(2)}</td>
              <td className="p-2">${billingPrice.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default QuoteTable;
// This component renders a table for the quote resources.
// It allows users to input hours for each resource and calculates the hard cost and billing price dynamically.