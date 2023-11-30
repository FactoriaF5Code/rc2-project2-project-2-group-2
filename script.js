const phoneSelect = document.getElementById('phone');
const locationDiv = document.getElementById('location');

let defaultLocation = 'Tierra: 76.972298, -42.599252';
locationDiv.innerText = defaultLocation;


phoneSelect.addEventListener('change', function() {
    const selectedValue = phoneSelect.value;
    let selectedLocation = '';

    switch (selectedValue) {
        case '+34 912 345 678':
            selectedLocation = 'Tierra: 76.972298, -42.599252';
            break;
        case '+1 555 123 4567':
            selectedLocation = 'Luna: -0.674080, 23.472010';
            break;
        case '+200 555 987 6543':
            selectedLocation = 'Marte: -14.568400, 175.472636';
            break;
        case '+351 555 246 8135':
            selectedLocation = 'Júpiter: -22.421810, 143.671875';
            break;
        case '+732 555 369 2580':
            selectedLocation = 'Saturno: -18.463200, 178.703964';
            break;
        default:
            selectedLocation = '';
            break;
    }

    locationDiv.innerText = selectedLocation;
});

function showMessage(socialMedia) {
    alert('Aun estamos trabajando en tener ' + socialMedia + ', gracias por tu paciencia');
  }


