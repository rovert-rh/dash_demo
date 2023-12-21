// lastMonth.js

function populateLastMonth(data) {
    var cardDeckContainer = document.getElementById('cardDeck');

    if (data.Data) {
        var filteredEntities = Object.keys(data.Data).filter(entity => {
            var maxValue = Math.max(...data.Data[entity].map(entry => entry.y));
            return maxValue > 1;
        });

        if (filteredEntities.length > 0) {
            var entity = filteredEntities[0]; // Tomar solo la primera entidad
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
                cardDeckContainer.innerHTML = '';
                cardDeckContainer.appendChild(card);
            }
        } else {
            console.error('No hay entidades filtradas con valores mayores a 1.');
        }
    } else {
        console.error('El JSON no contiene datos válidos.');
    }
}
