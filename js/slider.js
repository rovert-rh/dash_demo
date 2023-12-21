// slider.js

function populateSlider(data) {
    var sliderContainer = document.querySelector('.carousel-inner');
    var cardContainer = document.getElementById('sliderCard');

    if (data.Data) {
        var entity = Object.keys(data.Data)[0]; // Tomar solo la primera entidad
        var lastEntry = data.Data[entity].slice(-1)[0];
        var lastMonth = lastEntry.label;
        var lastAmount = lastEntry.y;

        // Mostrar solo entidades con 'y' diferente de 0
        if (lastAmount !== 0) {
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${entity}</h5>
                    <p class="card-text">Mes: ${lastMonth}</p>
                    <p class="card-text">Últimos del mes: $${lastAmount.toFixed(2)}</p>
                </div>
            `;

            // Limpiar el contenedor antes de agregar la nueva card
            sliderContainer.innerHTML = '';
            sliderContainer.appendChild(card);
        }
    } else {
        console.error('El JSON no contiene datos válidos.');
    }
}
