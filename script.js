function calculateRValue() {
    var area1 = document.getElementById('area1').value;
    var rValue1 = document.getElementById('rValue1').value;
    var area2 = document.getElementById('area2').value;
    var overallUValue = 0.063;

    var totalArea = parseFloat(area1) + parseFloat(area2);
    var totalRValue = 1 / overallUValue;
    var requiredRValue2 = (totalRValue * totalArea - rValue1 * area1) / area2;

    document.getElementById('output').textContent = requiredRValue2.toFixed(2);
}
