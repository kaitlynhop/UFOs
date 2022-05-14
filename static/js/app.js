// import the data from data.js
const tableData = data;

// Reference HTML table using d3
var tbody = d3.select("tbody");

// Function to create table from data file
function buildTable(data) {
    // Set table to empty string
    tbody.html("");
    // Looping through each element in array
    data.forEach((dataRow) => {
        // Create table row in table
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            // Create table cell in table row
            let cell = row.appent("td");
            // Add data values to each cell in row
            cell.text(val);
        });
    });
}