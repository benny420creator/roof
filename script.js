function calculate() {
    let desiredRValue = parseFloat(document.getElementById("desired_r_value").value);

    // Area 1 Calculation
    let rValuePerInch1 = parseFloat(document.getElementById("material1").value);
    let area1 = parseFloat(document.getElementById("area1_value").value);
    let requiredThickness1 = !isNaN(rValuePerInch1) && area1 > 0 ? desiredRValue / rValuePerInch1 : 0;

    // Area 2 Calculation with Custom R-Value
    let area2 = parseFloat(document.getElementById("area2_value").value);
    let customRValue = parseFloat(document.getElementById("area2_rvalue").value);
    let requiredThickness2 = !isNaN(customRValue) && area2 > 0 ? desiredRValue / customRValue : 0;

    // Calculating average thickness
    let totalArea = area1 + area2;
    let averageThickness = (requiredThickness1 * area1 + requiredThickness2 * area2) / totalArea;
    averageThickness = isNaN(averageThickness) ? 0 : averageThickness;

    let resultText = `Average thickness required for both areas: ${averageThickness.toFixed(2)} inches`;

    document.getElementById("result").innerHTML = resultText;
}
