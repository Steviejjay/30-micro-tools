// Get elements
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const tileSizeSelect = document.getElementById('tileSize');
const wastageInput = document.getElementById('wastage');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Add click event
calculateBtn.addEventListener('click', calculateTiles);

function calculateTiles() {
  // Get values
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  const tileSize = parseFloat(tileSizeSelect.value);
  const wastage = parseFloat(wastageInput.value);

  // Validate
  if (!length || length <= 0 || !width || width <= 0
  ) {
    resultDiv.style.display = 'block';
    resultDiv.style.background = '#ffe6e6';
    resultDiv.innerHTML = "⚠️ Please enter valid length and width";
    return;
  }

  // Calculate
  const area = length * width;
  const totalArea = area * ( 1 + wastage / 100 )
  const tilesNeeded = Math.ceil(totalArea / tileSize);

  resultDiv.style.display = 'block';
  resultDiv.style.background = '#fee140';
  resultDiv.innerHTML = `
    <strong>Result:</strong><br>
    You need <strong>${tilesNeeded}</strong> tiles<br>
    <small>for ${area.toFixed(1)} sqm (+ ${wastage}% wastage)</small>
  `;
}
