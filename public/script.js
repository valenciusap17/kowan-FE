function calculateSurface() {
  const length = document.getElementById('surfaceInput').value;
  fetch('http://52.23.239.207:8080/function/luas-persegi', {
    body: JSON.stringify({ panjang: length }),
    method: 'POST',
  })
    .then((resp) => resp.json())
    .then((data) => {
      const area = data.luas;
      document.getElementById('surfaceResult').innerText =
        'Hasil luas persegi: ' + area;
    });
}

function calculateSurfaceArea() {
  const length = document.getElementById('surfaceAreaInput').value;

  fetch('http://34.235.139.199:8080/function/fn-luas-permukaan-kubus', {
    body: JSON.stringify({ sisi: length }),
    method: 'POST',
  })
    .then((resp) => resp.json())
    .then((data) => {
      const area = data.surfaceArea;
      document.getElementById('surfaceResult').innerText =
        'Hasil luas permukaan kubus: ' + area;
    });
}
