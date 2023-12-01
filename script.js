const phoneSelect = document.getElementById('phone');  // Seleccionamos el elemento con id phone
const locationDiv = document.getElementById('location'); // Seleccionamos el elemento con id location

let defaultLocation = 'Tierra: 76.972298, -42.599252'; // Definimos la variable defaultLocation con el valor de la Tierra
locationDiv.innerText = defaultLocation;


phoneSelect.addEventListener('change', function() { // Añadimos un evento change al elemento phoneSelect para que al seleccionar un telefono cambie la localización
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

    locationDiv.innerText = selectedLocation; // Cambiamos el texto del elemento locationDiv por el valor de la variable selectedLocation
});

function showMessage(socialMedia) { // Definimos la función showMessage con el parámetro socialMedia para que se muestre un mensaje cuando se haga click en el botón de la red social
    alert('Aun estamos trabajando en tener ' + socialMedia + ', gracias por tu paciencia');
  }


