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
            let cell = row.append("td");
            // Add data values to each cell in row
            cell.text(val);
        });
    });
}

// Function for filtering table button
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Filter rows by datetime value to equal date value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild table using filtered data
    // @Note: if no data was entered - table would be original
    buildTable(filteredData);
}

// Function call for when filter-btn id is "clicked" on html page
d3.selectAll("#filter-btn").on("Click", handleClick);

// Buid table when page loads
buildTable(tableData);

