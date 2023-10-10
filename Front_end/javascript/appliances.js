// ---------- Vis 1--------------
async function FetchAppliancesAPI(){
    let selectedAppliance = document.getElementById('appliance').value;
    let selectedAcMode = document.getElementById('acType').value;

    if (selectedAppliance === 'AC'){
        if (selectedAcMode === 'Cooling'){
            return fetchAcCoolingDataFromAPI();
        }
        else {
            return fetchAcHeatingDataFromAPI();
        }
    }
    else if (selectedAppliance === 'Fridge'){
        return fetchFridgeDataFromAPI();
    }
}

// Function to fetch data from the API
async function fetchAcCoolingDataFromAPI() {
    try {
        // const response = await fetch('http://127.0.0.1:5000/api/get_ac_cooling');
        const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_ac_cooling')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch data from the API
async function fetchAcHeatingDataFromAPI() {
    try {
        // const response = await fetch('http://127.0.0.1:5000/api/get_ac_heating');
        const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_ac_heating')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch data from the API
async function fetchFridgeDataFromAPI() {
    try {
        // const response = await fetch('http://127.0.0.1:5000/api/get_refrigerators');
        const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_refrigerators')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
// ------------- show Table API ---------------------
async function fetchSuitableTable(){
    let selectedAppliance = document.getElementById('app-type').value;
    let selectedAcMode = document.getElementById('AcType').value;

    if (selectedAppliance === 'AC'){
        if (selectedAcMode === 'Cooling'){
            return fetchAcCoolingConsumptionFromAPI();
        }
        else {
            return fetchAcHeatingConsumptionFromAPI();
        }
    }
    else if (selectedAppliance === 'Fridge'){
        return fetchFridgeConsumptionFromAPI();
    }
}

// Function to fetch data from the API
async function fetchFridgeConsumptionFromAPI() {
    try {
        // const response = await fetch('http://127.0.0.1:5000/api/get_fridge_avg_consumption');
        const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_fridge_avg_consumption')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch data from the API
async function fetchAcCoolingConsumptionFromAPI() {
    try {
        // const response = await fetch('http://127.0.0.1:5000/api/get_ac_cooling_avg_consumption');
        const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_ac_cooling_avg_consumption')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch data from the API
async function fetchAcHeatingConsumptionFromAPI() {
    try {
        // const response = await fetch('http://127.0.0.1:5000/api/get_ac_heating_avg_consumption');
        const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_ac_heating_avg_consumption')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}


// ---------- Vis 2--------------
async function fetchAppliancesHighestStarRatingAPI(){
    let selectedAppliance = document.getElementById('app-type').value;
    let selectedAcMode = document.getElementById('AcType').value;

    if (selectedAppliance === 'AC'){
        if (selectedAcMode === 'Cooling'){
            return fetchAcCoolingHighestStarRating();
        }
        else {
            return fetchAcHeatingHighestStarRating();
        }
    }
    else if (selectedAppliance === 'Fridge'){
        return fetchFridgeHighestStarRatingAPI();
    }
}

// Function to fetch data from the API
async function fetchFridgeHighestStarRatingAPI() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/get_fridge_highest_rating_consumption');
        // const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_fridge_highest_rating_consumption')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch data from the API
async function fetchAcCoolingHighestStarRating() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/get_ac_cooling_highest_rating_consumption');
        // const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_ac_cooling_highest_rating_consumption')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch data from the API
async function fetchAcHeatingHighestStarRating() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/get_ac_heating_highest_rating_consumption');
        // const response = await fetch('https://ta21-2023-s2.azurewebsites.net/api/get_ac_heating_highest_rating_consumption')
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}


// ---------- Vis 1--------------
// Initialize Chart.js
const ctx = document.getElementById('energy-consumption-chart').getContext('2d');
let chart = null; // Declare the chart variable

// Function to update the graph based on user selections
async function updateGraph() {
    // Fetch data from the API
    const jsonData = await FetchAppliancesAPI(); // Await here to get the actual data

    console.log('jsonData:', jsonData);

    if (!Array.isArray(jsonData)) {
        // Handle the case where jsonData is not an array
        console.error('Invalid data:', jsonData);
        return;
    }
    
    // Function to initialize or update the chart
    function initializeOrUpdateChart(existingChart, ctx, data) {
        if (existingChart) {
            // If the chart exists, destroy it to clear any existing data
            existingChart.destroy();
        }
        let selectedAppliance = document.getElementById('appliance').value;

        if (selectedAppliance === 'AC'){
            labelText = 'Average Energy Consumption per hour';
        } else {
            labelText = 'Average Energy Consumption per month';
        }

        const labels = data.map(item => item.star_rating.toString());
        const chartData = data.map(item => item.average_energy_consumption);

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: labelText,
                        data: chartData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: labelText
                        }
                    }
                }
            }
        });
    }

    // Get selected star ratings
    const selectedStarRatings = Array.from(document.querySelectorAll('input[name="star-rating"]:checked')).map(checkbox => parseFloat(checkbox.value));

    // Sort the data by star rating and brand
    jsonData.sort((a, b) => {
        if (a.star_rating === b.star_rating) {
            return a.brand.localeCompare(b.brand);
        }
        return a.star_rating - b.star_rating;
    });

    let selectedAppliance = document.getElementById('appliance').value;

    const selectedAcBrand = document.getElementById('acBrand').value;
    const selectedType = document.getElementById('type').value;
    const selectedBrand = document.getElementById('brand').value;
    const selectedVolume = document.getElementById('volume').value;


    if (selectedAppliance === 'AC'){
        
        // Filter the data based on selections
        const filteredData = jsonData.filter(item => 
            (!selectedAcBrand || item.brand === selectedAcBrand) &&
            (selectedStarRatings.length === 0 || selectedStarRatings.includes(item.star_rating))
        );
        theData = filteredData;
    } else {
        // Filter the data based on selections
        const filteredData = jsonData.filter(item => 
            (!selectedType || item.type === selectedType) &&
            (!selectedBrand || item.brand === selectedBrand) &&
            (!selectedVolume || item.volume_category === selectedVolume) &&
            (selectedStarRatings.length === 0 || selectedStarRatings.includes(item.star_rating))
        );
        theData = filteredData;
    }

    // console.log('theData length:', theData.length);

    if (theData.length === 0) {
        // Display a message when there are no appliances based on the selection
        if (chart) {
            // If the chart exists, destroy it to clear any existing data
            chart.destroy();
        }
        document.getElementById('textRes').textContent = 'Nothing to show based on your selection';
        document.getElementById('textRes').style.fontSize = '20px';

        // Hide vis1 div when there's no data to show
        document.getElementById('vis1').style.display = 'none';

        return;
    } else {
        // Initialize or update the chart
        chart = initializeOrUpdateChart(chart, ctx, theData);
        document.getElementById('textRes').textContent = '';

        // Show vis1 div when data is available
        document.getElementById('vis1').style.display = 'block';
    }
}

// Function to remove event listeners
function removeEventListeners() {
    const typeElement = document.getElementById('type');
    const brandElement = document.getElementById('brand');
    const volumeElement = document.getElementById('volume');
    const acTypeElement = document.getElementById('acType');
    const acBrandElement = document.getElementById('acBrand');
    const starRatingCheckboxes = document.querySelectorAll('input[name="star-rating"]');

    typeElement.removeEventListener('change', updateGraph);
    brandElement.removeEventListener('change', updateGraph);
    acTypeElement.addEventListener('change', updateGraph);
    acBrandElement.addEventListener('change', updateGraph);
    volumeElement.removeEventListener('change', updateGraph);

    starRatingCheckboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', updateGraph);
    });
}

// Function to add event listeners
function addEventListeners() {
    const typeElement = document.getElementById('type');
    const brandElement = document.getElementById('brand');
    const volumeElement = document.getElementById('volume');
    const acTypeElement = document.getElementById('acType');
    const acBrandElement = document.getElementById('acBrand');
    const starRatingCheckboxes = document.querySelectorAll('input[name="star-rating"]');

    typeElement.addEventListener('change', updateGraph);
    brandElement.addEventListener('change', updateGraph);
    acTypeElement.addEventListener('change', updateGraph);
    acBrandElement.addEventListener('change', updateGraph);
    volumeElement.addEventListener('change', updateGraph);

    starRatingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateGraph);
    });

    // const vis1 = document.getElementById("vis1");
    // vis1.style.display = 'block';
}

document.getElementById('vis1').style.display = 'none';

// Initialize the graph with event listeners
addEventListeners();
updateGraph();





// ------------------ calculate section ------------------ 

function clearErrorMessages(){
    // Clear all error messages by setting their innerHTML to an empty string
    document.getElementById("errorMessageAllFields").innerHTML = "";
    document.getElementById("errorMessagePower").innerHTML = "";
    document.getElementById("errorMessageAcPower").innerHTML = "";
    document.getElementById("errorMessageHours").innerHTML = "";
    document.getElementById("errorMessageCharge").innerHTML = "";
  }
  
  function displayErrorMessage(elementId, message) {
    // Display an error message in the specified element
    document.getElementById(elementId).innerHTML = message;
  }

async function Calculate(){
    try {
        const jsonData = await fetchAppliancesHighestStarRatingAPI();
        console.log(jsonData);

        // ... (rest of your code)
    } catch (error) {
        console.error(error);
    }

    let conditionsMet = true;

    let thisAppliance = document.getElementById("app-type").value;
  
    let power = parseFloat(document.getElementById("power").value);
    let acPower = parseFloat(document.getElementById("acPower").value);
    let hours = parseFloat(document.getElementById("hours").value);
    let charge = parseFloat(document.getElementById("charge").value);
  
    if (thisAppliance === 'AC'){
        if (!acPower){
            displayErrorMessage("errorMessageAcPower", "Please enter the power consumption");
            conditionsMet = false;
        } else if (!hours){
            displayErrorMessage("errorMessageHours", "Please enter the hours of usage");
            conditionsMet = false;
        } else if (!charge){
            displayErrorMessage("errorMessageCharge", "Please provide the amount you are being billed by your energy provider.");
            conditionsMet = false;
        } else if (!acPower || !hours || !charge) {
            displayErrorMessage("errorMessageAllFields", "Please fill in all required fields before clicking 'Calculate'");
            conditionsMet = false;}
    } else {
        if (!power){
            displayErrorMessage("errorMessagePower", "Please enter the power consumption");
            conditionsMet = false;
        } else if (!charge){
            displayErrorMessage("errorMessageCharge", "Please provide the amount you are being billed by your energy provider.");
            conditionsMet = false;
        } else if (!power || !charge) {
            displayErrorMessage("errorMessageAllFields", "Please fill in all required fields before clicking 'Calculate'");
            conditionsMet = false;}
    }
    
    if (conditionsMet && thisAppliance === 'AC'){
        clearErrorMessages();
        total = parseFloat((acPower * hours * charge * 30 / 100).toFixed(2));
    } else if (conditionsMet && thisAppliance === 'Fridge'){
        clearErrorMessages();
        total = parseFloat((power * charge / 100).toFixed(2));
    }

        console.log(total);
        let resultText = "";

        resultText = `<br><br><span class="large-text">Your Result</span><br><br>
        <span class="med-text">Your total electricity cost per month from this appliance would be $${total}.</span><br><br>`      
    
        const hiddenContainer = document.getElementById("hiddenContainer");

        hiddenContainer.style.backgroundColor = 'black';
    
        const textField = document.getElementById("textField");
        textField.innerHTML = resultText;
    
        // Scroll to the "thisDiv" element
        // const thisDiv = document.getElementById("thisDiv");
        // thisDiv.scrollIntoView({ behavior: "smooth" });
    
        const showText2 = document.getElementById("text2");
        showText2.style.display = 'flex';
        
        await compare(total);
}

function hideTable(){
    const tableContainerFridge = document.getElementById("table-container-fridge");
    const tableContainerAc = document.getElementById("table-container-AC");
    tableContainerFridge.style.display = 'none';
    tableContainerAc.style.display = 'none';
}

async function showTable(){
    let appType = document.getElementById("app-type").value;
    let fridgeType = document.getElementById("fridgeType").value;  

    const jsonData = await fetchSuitableTable();

    if (appType === 'Fridge'){
        tableContainer = document.getElementById("table-container-fridge");
        thisText = document.getElementById("thisTextFridge");
        filteredData = jsonData.filter(item => item.type === fridgeType); // Filter data based on fridgeType
        keysToDisplay = Object.keys(filteredData[0]).filter(key => key !== "type");
    } else {
        tableContainer = document.getElementById("table-container-AC");
        thisText = document.getElementById("thisTextAC");
        filteredData = jsonData;
        keysToDisplay = Object.keys(filteredData[0]);
    }
    
    console.log(filteredData);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // // Create an array of keys (column names) to be displayed in the table
    // const keysToDisplay = Object.keys(filteredData[0]).filter(key => key !== "type");

    // Create table header without the "type" column
    const headerRow = document.createElement("tr");
    keysToDisplay.forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    thead.style.backgroundColor = 'green';
    thead.style.color = 'white';

    // Create table body rows without the "type" column
    filteredData.forEach(item => {
        const bodyRow = document.createElement("tr");
        keysToDisplay.forEach(key => {
        const cell = document.createElement("td");
        cell.textContent = item[key];
        bodyRow.appendChild(cell);
        });
        tbody.appendChild(bodyRow);
    });

    // Append the header and body to the table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Append the table to the container
    tableContainer.innerHTML = ''; // Clear previous content
    thisText.innerHTML = `<span class="small-text">Use the table below to assist you!</span>`;
    thisText.style.paddingBottom = '20px';
    tableContainer.appendChild(thisText);
    tableContainer.appendChild(table);

    // show the table in the webpage
    tableContainer.style.display = 'grid';
    tableContainer.style.placeItems = 'center';

    thisText.style.display = 'block';

    table.style.borderCollapse = 'collapse';
    table.style.border = '2px solid black';

    const cells = table.querySelectorAll('td, th');
    cells.forEach((cell) => {
        cell.style.border = '1px solid black'; // Add a black border to all cells
        cell.style.padding = '8px';
    });

    // Get all table rows
    const rows = document.querySelectorAll("tbody tr");

    // Add mouseover and mouseout event listeners to each row
    rows.forEach((row) => {
        row.addEventListener("mouseover", function () {
            // Add a CSS class to highlight the row on mouseover
            row.classList.add("highlighted-row");
        });

        row.addEventListener("mouseout", function () {
            // Remove the CSS class to remove the highlight on mouseout
            row.classList.remove("highlighted-row");
        });
    });
}

async function compare(result){
    console.log(`result is ${result}`);

    const appType = document.getElementById("app-type").value;
    const fridgeType = document.getElementById("fridgeType").value;
    const AcType = document.getElementById("AcType").value;
    const hours = document.getElementById("hours").value;
    const charge = document.getElementById("charge").value;
    
    const jsonData = await fetchAppliancesHighestStarRatingAPI();
    console.log(jsonData);

    if (appType === 'Fridge'){
        // Filter the JSON data based on the selected fridge type
        filteredData = jsonData.filter(item => item.type === fridgeType);
    } else {
        filteredData = jsonData;
    }
    
    console.log(filteredData);

    // Extract the energy consumption and star rating from the filtered data
    const energyConsumptionData = filteredData.map(item => item["Average Energy Consumption (kW)"]);

    console.log(energyConsumptionData);

    if (appType === 'AC'){
        calcCost = energyConsumptionData * charge * hours * 30 / 100;
    } else {
        calcCost = energyConsumptionData * charge / 100;
    }

    console.log(`charge is ${calcCost}`);

    const savedMoney = document.getElementById('text3');
    const savings = (result - calcCost).toFixed(2);
    savedMoney.innerHTML = `<br><br><span class="med-text">You could've saved $${savings} per month by using the highest star rating appliance!</span><br><br>`
    savedMoney.style.padding = '2rem';

    // Create labels for the x-axis
    const labels = ["You", "Highest Star Rating Appliance"];

    // Create a bar graph using Chart.js
    const ctx1 = document.getElementById("barChart").getContext("2d");

    // Destroy any existing chart on the canvas
    if (window.myBar) {
        window.myBar.destroy();
    }

    window.myBar = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Cost per Month',
                    data: [result, calcCost],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                    borderColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Total Cost ($)"
                    }
                }
            }
        }
    });
}

function CalculateAndCompare() {
    Calculate();
    Compare();
}

document.getElementById("checkButton").addEventListener("click", CalculateAndCompare);

function showOptionsVis1(){
    var selectedOption = document.getElementById('appliance');
    var fridgeSelections = document.getElementById('fridgeSelections');
    var AcSelections = document.getElementById('AcSelections');
    
    if (selectedOption.value === 'Fridge') {
        fridgeSelections.style.display = 'block';
        AcSelections.style.display = 'none';
    } else {
        fridgeSelections.style.display = 'none';
        AcSelections.style.display = 'block';
    }
}

function showCalculatorQuestions(){
    var thisAppliance = document.getElementById("app-type");
    var fridgeCalculatorSection = document.getElementById("fridgeCalculatorSection");
    var AcCalculatorSection = document.getElementById("AcCalculatorSection");

    if (thisAppliance.value === 'AC'){
        AcCalculatorSection.style.display = 'block';
        fridgeCalculatorSection.style.display = 'none';
    } else {
        AcCalculatorSection.style.display = 'none';
        fridgeCalculatorSection.style.display = 'block';
    }
}

function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'block';
    }
  }
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'none';
    }
  }

// Get all table rows
const rows = document.querySelectorAll("#resultsTable tbody tr");

// Add mouseover and mouseout event listeners to each row
rows.forEach((row) => {
  row.addEventListener("mouseover", function () {
    // Add a CSS class to highlight the row on mouseover
    row.classList.add("highlighted-row");
  });

  row.addEventListener("mouseout", function () {
    // Remove the CSS class to remove the highlight on mouseout
    row.classList.remove("highlighted-row");
  });
});