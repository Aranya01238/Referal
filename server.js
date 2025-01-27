const express = require("express");
const cors = require("cors");
const xlsx = require("xlsx");

const app = express();
app.use(cors());

// Endpoint to read the Excel file
app.get("/doctors", (req, res) => {
    // Read the Excel file
    const workbook = xlsx.readFile("doctors.xlsx");
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Send JSON response
    res.json(sheetData);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
