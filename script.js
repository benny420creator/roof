function calculate() {
    let desiredRValue = parseFloat(document.getElementById("desired_r_value").value);
    let resultsTable = document.getElementById("resultsTable");

    // Clear previous results
    resultsTable.innerHTML = "<tr><th>Area</th><th>Required Thickness (inches)</th></tr>";

    // Area 1 Calculation
    let rValuePerInch1 = parseFloat(document.getElementById("material1").value);
    let area1 = parseFloat(document.getElementById("area1_value").value);
    if (!isNaN(rValuePerInch1) && !isNaN(area1) && area1 > 0) {
        let requiredThickness1 = desiredRValue / rValuePerInch1;
        resultsTable.innerHTML += `<tr><td>Area 1</td><td>${requiredThickness1.toFixed(2)}</td></tr>`;
    }

    // Area 2 Calculation with Custom R-Value
    let area2 = parseFloat(document.getElementById("area2_value").value);
    let customRValue = parseFloat(document.getElementById("area2_rvalue").value);
    if (!isNaN(customRValue) && !isNaN(area2) && area2 > 0) {
        let requiredThickness2 = desiredRValue / customRValue;
        resultsTable.innerHTML += `<tr><td>Area 2</td><td>${requiredThickness2.toFixed(2)}</td></tr>`;
    }
}
