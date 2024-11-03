function calculateSurface() {
  const length = document.getElementById('surfaceInput').value;
  document.getElementById('surfaceResult').innerText =
    'Hasil luas persegi: ' + length;
}

function calculateSurfaceArea() {
  const length = document.getElementById('surfaceAreaInput').value;
  document.getElementById('surfaceAreaResult').innerText =
    'Hasil luas permukaan kubus: ' + length;
}
