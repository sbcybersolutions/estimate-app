import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export function exportQuoteToExcel({ projectInfo, rows, total }) {
  const worksheetData = [
    ["Client Name", projectInfo.client],
    ["Project Name", projectInfo.project],
    ["Project Type", projectInfo.type],
    [],
    ["Resource", "Hours/Units", "Hard Cost (USD)", "Billing Price (USD)"],
    ...rows.map(row => [
      row.name,
      row.hours,
      (row.hours * row.rate).toFixed(2),
      ((row.rate / 0.5) * row.hours).toFixed(2)
    ]),
    [],
    ["Total", "", "", total.toFixed(2)]
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Quote");

  const fileName = `${projectInfo.client.replace(/\s+/g, '_')}_Estimate.xlsx`;
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, fileName);
}
// This function exports the quote data to an Excel file.
// It uses the XLSX library to create a workbook and worksheet, and the file-saver library to save the file.