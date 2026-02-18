// Get elements from HTML
const areaInput = document.getElementById("area");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

// Add click event to button
calculateBtn.addEventListener("click", calculateBags);

function calculateBags() {
  // Get the area value
  const area = parseFloat(areaInput.value);

  // Validate input
  if (!area || area <= 0) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "⚠️ Please enter a valid area";
    resultDiv.style.background = "#ffe6e6";
    return;
  }

  // Calculate bags (1 bag covers 5 sqm)
  const bagsNeeded = Math.ceil(area / 5);

  // Display result
  resultDiv.style.display = "block";
  resultDiv.style.background = "#f0f4ff";
  resultDiv.innerHTML = `
  <strong>Result:</strong><br>
  You need <strong>${bagsNeeded}</strong> bag(s) of cement<br>
  <small>for ${area} square meters.</small>
  `;
}
