// Get elements
const areaInput = document.getElementById('area');
const fertilizerTypeSelect = document.getElementById('fertilizerType');
const applicationsInput = document.getElementById('applications');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', calculateFertilizer);

function calculateFertilizer() {
  // Get input values
  const area = parseFloat(areaInput.value);
  const fertilizerType = parseFloat(fertilizerTypeSelect.value);
  const applications = parseInt(applicationsInput.value);

  // Validate
  if (!area || area <= 0 || !applications || applications <= 0) {
    resultDiv.style.display = 'block';
    resultDiv.style.background = "#ffe6e6";
    resultDiv.innerHTML = "⚠️ Please enter valid area and applications";
    return;
  }

  // Calculate
  const totalGrams = area * fertilizerType * applications;
  const totalInKg = Math.ceil(totalGrams / 1000);

  resultDiv.style.display = 'block';
  resultDiv.style.background = '#e6fff9';
  resultDiv.innerHTML = `
    <strong>Result:</strong><br>
    You need <strong>${totalInKg} kg</strong> of fertilizer<br>
    <small>for ${area} sqm x ${applications} application(s)</small>
  `;
}
