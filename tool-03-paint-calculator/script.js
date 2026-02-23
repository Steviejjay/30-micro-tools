const areaInput = document.getElementById('area')
const coverageInput = document.getElementById('coverage');
const coatsSelect = document.getElementById('coats')
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Add click event
calculateBtn.addEventListener('click', calculatePaint)

function calculatePaint() {
  // Get values
  const area = parseFloat(areaInput.value);
  const coverage = parseFloat(coverageInput.value);
  const coats = parseFloat(coatsSelect.value);

  // Validate
  if (!area || area <= 0 || !coverage || coverage <= 0) {
    resultDiv.style.display = 'block';
    resultDiv.style.background = '#ffe6e6';
    resultDiv.innerHTML = '⚠️ Please enter valid area and coverage'
    return;
  }

  // Calculate coverage
  const totalArea = area * coats;
  const bucketsNeeded = Math.ceil(totalArea / coverage);

  // Display result
  resultDiv.style.display = 'block';
  resultDiv.style.background = '#e6f7ff';
  resultDiv.innerHTML = `
    <strong>Result:</strong><br>
    You need <strong>${bucketsNeeded}</strong> paint bucket(s)<br>
    <small>for ${area} sqm x ${coats} coat(s) = ${totalArea} sqm total</small>
  `;
}
