function calculateSurface() {
  const length = document.getElementById('surfaceInput').value;
  fetch('http://54.172.163.137:8080/function/luas-persegi', {
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

  fetch('http://184.73.66.5:8080/function/fn-luas-permukaan-kubus', {
    body: JSON.stringify({ sisi: length }),
    method: 'POST',
  })
    .then((resp) => resp.json())
    .then((data) => {
      const area = data.surface_area;
      document.getElementById('surfaceAreaResult').innerText =
        'Hasil luas permukaan kubus: ' + area;
    });
}
