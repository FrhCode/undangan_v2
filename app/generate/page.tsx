"use client";
import React, { ChangeEvent } from "react";
import * as XLSX from "xlsx";
import generateMessage from "./utils/generate-message";

type IWorkSheet = {
  name: string;
  link: string;
};

export default function page() {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target!.files![0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // Read Excel File
      const data = new Uint8Array(e.target!.result as ArrayBufferLike);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData: IWorkSheet[] = XLSX.utils.sheet_to_json(worksheet);
      console.log(jsonData, window.location.hostname);

      // Write Excel File
      // Create a new workbook
      const newWorkbook = XLSX.utils.book_new();

      // Convert the data to an array of arrays
      const worksheetData = [
        ["name", "link"],
        ...jsonData.map((item) => {
          const webPageUrl = window.location.hostname;
          const params = new URLSearchParams({
            to: item.name,
          });

          const link = generateMessage(
            `${webPageUrl}?${params.toString().replace(/\+/g, "%20")}`,
            item.name
          );
          return [item.name, link];
        }),
      ];

      // Create a new worksheet
      const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Sheet 1");

      // Generate a file name for the Excel file
      const fileName = "data.xlsx";

      // Generate a data URL for the workbook
      const workbookData = XLSX.write(newWorkbook, {
        bookType: "xlsx",
        type: "base64",
      });
      const workbookUrl = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${workbookData}`;

      // Create a link element
      const link = document.createElement("a");
      link.href = workbookUrl;
      link.download = fileName;
      link.target = "_blank";

      // Append the link element to the DOM
      document.body.appendChild(link);

      // Programmatically click the link to start the download
      link.click();

      // Clean up by removing the link element
      document.body.removeChild(link);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}
