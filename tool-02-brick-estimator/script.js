// Get elements
const lengthInput = document.getElementById('length');
const heightInput = document.getElementById('height');
const brickTypeSelect = document.getElementById('brickType');
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById('result');

// Add click events
calculateBtn.addEventListener('click', calculateBricks);

function calculateBricks() {
  const length = parseFloat(lengthInput.value);
  const height = parseFloat(heightInput.value);
  const bricksPerSqm = parseFloat(brickTypeSelect.value);

  // Validate
  if (!length || length <= 0 || !height || height <= 0) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '⚠️ Please enter valid dimensions';
    resultDiv.style.background = "#ffe6e6";
    return;
  };

  // Calculate
  const area = length * height;
  const totalBricks = Math.ceil(area * bricksPerSqm);

  resultDiv.style.display = 'block'
  resultDiv.style.background = "#fff0f3";
  resultDiv.innerHTML = `
    <strong>Result:</strong><br>
    You need <strong>${totalBricks}</strong> brick(s)<br>
    <small>for a ${length}m x ${height}m wall (${area.toFixed(2)} sqm)</small>
  `;
}

