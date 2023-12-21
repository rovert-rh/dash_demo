// chart.js

var jsonUrls = ['json/datos.json', 'json/mexico.json'];
var activeChart = 0;
var chart; // Variable global para la instancia de la gráfica

// Inicializar la gráfica con el primer conjunto de datos
cargarDatos(jsonUrls[activeChart]);

// Función para cargar y renderizar la gráfica
function cargarDatos(jsonUrl) {
    // Ocultar la gráfica actual
    ocultarGrafica();

    // Realizar la solicitud para obtener el JSON
    fetch(jsonUrl)
        .then(response => response.json())
        .then(jsonData => {
            // Configuración del gráfico
            var options = {
                series: obtenerSeries(jsonData.Data),
                chart: {
                    type: 'bar',
                    height: 350
                },
                title: {
                    text: 'Totales de cuentas por pagar por mes',
                    align: 'center',
                    margin: 10,
                    floating: false,
                    style: {
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: '#263238'
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: obtenerCategorias(jsonData.Data)
                },
                yaxis: {
                    title: {
                        text: '$ (Dolares)'
                    }
                },
                colors: ['#059BFC', '#FC8405', '#FC1B05', '#05FC32', '#FCF805', '#A605FC', '#FC05DA'],
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val.toFixed(2);
                        }
                    }
                }
            };

            // Crear o actualizar la instancia de la gráfica y renderizarla en el contenedor
            if (!chart) {
                chart = new ApexCharts(document.querySelector("#chart"), options);
                chart.render();
            } else {
                chart.updateOptions(options);
            }

            // Mostrar la gráfica
            mostrarGrafica();
            ocultarCargador();
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            ocultarCargador();
        });
}

function ocultarGrafica() {
    // Ocultar la gráfica
    if (chart) {
        chart.destroy();
        chart = null; // Limpiar la instancia de la gráfica
    }
}

function mostrarGrafica() {
    // Mostrar la gráfica
    document.getElementById('chart').style.display = 'block';
}

function ocultarCargador() {
    document.getElementById('loader').style.display = 'none';
}

function obtenerSeries(data) {
    return Object.keys(data).map(entity => {
        return {
            name: entity,
            data: data[entity].map(item => item.y)
        };
    });
}

function obtenerCategorias(data) {
    var entities = Object.keys(data);
    return data[entities[0]].map(item => item.label);
}

function botonDatosClick(index) {
    activeChart = index;
    cargarDatos(jsonUrls[activeChart]);
}
