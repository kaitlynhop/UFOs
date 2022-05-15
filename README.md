# UFOs
## Overview
In this project, an array from data.js was imported and used to create a table which was then displayed on webpage with HTML, bootstrap, and D3.js. The table was created with Javascript with the ability to filter array elements by date in app_1.js.

The table was then updated and duplicated, to filter by multiple criteria in app.js.
### Purpose
The purpose of this project was to use javascript to build more reactive webpage displays by creating a filterable table then displaying through html. 
### Resources
**Data Source:** [data](/static/js/data.js), [Nasa Image](/static/images/nasa.jpg)

**Tools:** JavaScript, HTML5, Bootstrap, D3.js, CSS, VScode
<br>

## Results
UFO Finder webpage now contains a table that can be filtered by date, city, state, country, and shape of ufo sightings. The webpage opens with a navigation bar and header. The "UFO Sightings" navigation, refreshes the page and resets all filters back to default. 
<br>
<br>**Image 1. Webpage Header**
<br>![Header](/static/images/header.png)
<br>Image 1. Shows the screenshot of the header created in HTML with Bootstrap and Css.
<br>
<br>
<br>Users are now able to enter multiple search criteria using input fields that allow users to search sightings by date, city, state, country, and shape of UFO. 
<br>
<br>**Image 2. Filter Options and Table Display
<br>![Table](/static/images/table.png)
<br>Image 2. Shows the screenshot of the filter and populated data table created using JavaScript. 
<br>
<br>
<br>Once a user inputs their specified criteria (specific date or country), the table will populate with all records matching their criteria. For example, in the below screenshot I have specified that I would like to search for "triangle" UFO's sighted on January 4, 2010. Once those fields contain the user-input and the "enter" button is pressed, the table updates to match the filter criteria. 
<br>
<br>**Image 3. Triangle UFO Sighting 1/4/2010
<br>![Table2](/static/images/table-2.png)
<br>Image 3. Shows the results of the filtered table for "triangle" shape sightings on the date: 1/4/2010.
<br>


## Summary

 One drawback of the webpage design and filter is that there is no input validation. Users are able to input anything and are unaware of the results until after the select enter. Two suggestions for improvements to the filter table display:
 1. Inserting validation that pre-searches data for user input and makes suggestions or reports "not found" results prior to user inputting all search fields and pressing enter. 
 2. Updating form site to diplay current filters along the top of the table, for easier management. 
 