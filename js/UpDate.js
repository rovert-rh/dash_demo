// dashboard.js

function populateSlider(data) {
    var sliderContainer = document.querySelector('.carousel-inner');

    if (data.Data) {
        for (var entity in data.Data) {
            var maxEntry = data.Data[entity].reduce((a, b) => a.y > b.y ? a : b);
            var maxMonth = maxEntry.label;
            var maxAmount = maxEntry.y;

            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${entity}</h5>
                    <p class="card-text">Mes: ${maxMonth}</p>
                    <p class="card-text">Cuenta por pagar más grande: $${maxAmount.toFixed(2)}</p>
                </div>
            `;

            var slide = document.createElement('div');
            slide.className = 'carousel-item';
            slide.appendChild(card);
            sliderContainer.appendChild(slide);
        }

        var firstSlide = sliderContainer.querySelector('.carousel-item');
        if (firstSlide) {
            firstSlide.classList.add('active');
        }
    } else {
        console.error('El JSON no contiene datos válidos.');
    }
}

function fetchDataAndPopulateSlider() {
    fetch('json/datos.json')
        .then(response => response.json())
        .then(data => {
            populateSlider(data);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Llama a la función al cargar la página
fetchDataAndPopulateSlider();
