
function comparePrices() {
  const barcode = document.getElementById('barcode').value;
  const results = document.getElementById('results');
  results.innerHTML = '<p>🔍 Looking up prices for barcode: <strong>' + barcode + '</strong></p>';
  // Simulate comparison
  setTimeout(() => {
    results.innerHTML += `
      <ul>
        <li>Amazon: $25.99</li>
        <li>Walmart: $24.50</li>
        <li>eBay: $23.75</li>
        <li>Target: $26.10</li>
      </ul>
      <p style="color:green;">✅ You can now sync this to Zoho!</p>
    `;
  }, 1000);
}
