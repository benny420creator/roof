function calculate() {
    let totalRValue = 0;
    let totalArea = 0;
    let desiredRValue = parseFloat(document.getElementById("desired_r_value").value);

    // Area 1 Calculation
    let rValuePerInch1 = parseFloat(document.getElementById("material1").value);
    let area1 = parseFloat(document.getElementById("area1_value").value);
    if (!isNaN(rValuePerInch1) && !isNaN(area1) && area1 > 0) {
        totalRValue += rValuePerInch1 * area1;
        totalArea += area1;
    }

    // Area 2 Calculation with Custom R-Value
    let area2 = parseFloat(document.getElementById("area2_value").value);
    let customRValue = parseFloat(document.getElementById("area2_rvalue").value);
    if (!isNaN(customRValue) && !isNaN(area2) && area2 > 0) {
        totalRValue += customRValue * area2;
        totalArea += area2;
    }

    let effectiveRValue = totalArea > 0 ? totalRValue / totalArea : 0;
    document.getElementById("result").innerHTML = `Effective R-Value: ${effectiveRValue.toFixed(2)}`;
}
