// Contenido de card.js

// Función para obtener los últimos del mes
function getLastOfMonth(data) {
    const lastOfMonth = data[data.length - 1];
    if (lastOfMonth && lastOfMonth.y > 1) {
      return {
        label: "Últimos del mes",
        y: lastOfMonth.y,
        message: `USD: $${lastOfMonth.y.toFixed(2)}<br/>`,
      };
    }
    return null;
  }
  
  // Función para obtener un resumen de lo pendiente
  function getPendingSummary(data) {
    const pendingTotal = data.reduce((acc, month) => acc + month.y, 0);
    return {
      label: "Resumen Pendiente",
      y: pendingTotal,
      message: `USD: $${pendingTotal.toFixed(2)}<br/>`,
    };
  }
  
  // Función para obtener los más altos de cada entidad
  function getHighestOfEachEntity(data) {
    const highestOfMonth = data.reduce((acc, month) => {
      if (!acc || month.y > acc.y) {
        return month;
      }
      return acc;
    }, null);
    return {
      label: "Más Alto de la Entidad",
      y: highestOfMonth.y,
      message: `USD: $${highestOfMonth.y.toFixed(2)}<br/>`,
    };
  }
  
  // Función para obtener el resumen total por región
  function getRegionSummary(data) {
    const total = data.reduce((acc, entity) => {
      const entityTotal = entity.reduce((entityAcc, month) => entityAcc + month.y, 0);
      return acc + entityTotal;
    }, 0);
    return {
      label: "Resumen Total por Región",
      y: total,
      message: `USD: $${total.toFixed(2)}<br/>`,
    };
  }
  
  // Ejemplo de uso con tu JSON
  const iwsMexicoData = [
    {
        "Result": "Ok",
        "Data": {
            "IWS México": [
                {
                    "label": "Enero",
                    "y": 44000.00,
                    "message": "USD: $44,000.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 55000.00,
                    "message": "USD: $55,000.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 41000,
                    "message": "USD: $41,000.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 67000.0,
                    "message": "USD: $67,000.0<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 22000.0,
                    "message": "USD: $22,000.0<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 43000.0,
                    "message": "USD: $43,000<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 13000.0,
                    "message": "USD: $13,000<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 23000.0,
                    "message": "USD: $23,000<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 20000.0,
                    "message": "USD: $20,000<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 8000.0,
                    "message": "USD: $8000.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 13000.0,
                    "message": "USD: $13,00.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 27000.0,
                    "message": "USD: $27,00.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "IWS Services Perú": [
                {
                    "label": "Enero",
                    "y": 50975.64,
                    "message": "USD: $50,975.64<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 101344.04,
                    "message": "USD: $101,344.04<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 7952.23,
                    "message": "USD: $7,952.23<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 704.28,
                    "message": "USD: $704.28<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 725.7,
                    "message": "USD: $725.70<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "IWS Services Costa Rica": [
                {
                    "label": "Enero",
                    "y": 51605.43,
                    "message": "USD: $51,605.43<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 79439.35,
                    "message": "USD: $79,439.35<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 81852.28,
                    "message": "USD: $81,852.28<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 165966.62,
                    "message": "USD: $165,966.62<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 20299.8,
                    "message": "USD: $20,299.80<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 79596.57,
                    "message": "USD: $79,596.57<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 132773.88,
                    "message": "USD: $132,773.88<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 143078.38,
                    "message": "USD: $143,078.38<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 227636.92,
                    "message": "USD: $227,636.92<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 214547.97,
                    "message": "USD: $214,547.97<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 103734.86,
                    "message": "USD: $103,734.86<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "Redinet Perú": [
                {
                    "label": "Enero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 692387.2,
                    "message": "USD: $692,387.20<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 455.67,
                    "message": "USD: $455.67<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 1444.32,
                    "message": "USD: $698.66<br/>Nuevo Sol: $2,778.87<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "IWS Services Honduras": [
                {
                    "label": "Enero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 1503.7,
                    "message": "USD: $1,503.70<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 380.01,
                    "message": "USD: $380.01<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "IWS Services Colombia": [
                {
                    "label": "Enero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 23430.59,
                    "message": "USD: $23,430.59<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 1344.57,
                    "message": "Peso colombiano: $5,301,645.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 36668.41,
                    "message": "USD: $36,668.41<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 27331.6,
                    "message": "USD: $27,331.60<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 31059.25,
                    "message": "USD: $30,447.72<br/>Peso colombiano: $2,411,280.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 5976.68,
                    "message": "Peso colombiano: $23,566,058.00<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "Redinet Costa Rica": [
                {
                    "label": "Enero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 2552.16,
                    "message": "USD: $2,552.16<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 3975.98,
                    "message": "USD: $3,975.98<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 579.08,
                    "message": "USD: $579.08<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 1885.21,
                    "message": "USD: $1,885.21<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 4467.6,
                    "message": "USD: $4,467.60<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 63090.35,
                    "message": "USD: $63,090.35<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 73762.19,
                    "message": "USD: $73,762.19<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "IWS Services El Salvador": [
                {
                    "label": "Enero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 3975.14,
                    "message": "USD: $3,975.14<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 901.16,
                    "message": "USD: $901.16<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 4808.8,
                    "message": "USD: $4,808.80<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ],
            "IWS Services EEUU": [
                {
                    "label": "Enero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Febrero",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Marzo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Abril",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Mayo",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Junio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Julio",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Agosto",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Septiembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Octubre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Noviembre",
                    "y": 0.0,
                    "message": "",
                    "totalDataSerie": "",
                    "serieName": ""
                },
                {
                    "label": "Diciembre",
                    "y": 7060.56,
                    "message": "USD: $7,060.56<br/>",
                    "totalDataSerie": "",
                    "serieName": ""
                }
            ]
        }
    }
  ];
  const lastOfMonthIwsMexico = getLastOfMonth(iwsMexicoData);
  const pendingSummaryIwsMexico = getPendingSummary(iwsMexicoData);
  const highestIwsMexico = getHighestOfEachEntity(iwsMexicoData);
  const regionSummaryIwsMexico = getRegionSummary(iwsMexicoData);
  
  // Puedes hacer lo mismo para otras entidades, pero aquí solo se muestra un ejemplo para IWS México.
  
  // Exporta las variables para usarlas en tu HTML
  export {
    lastOfMonthIwsMexico,
    pendingSummaryIwsMexico,
    highestIwsMexico,
    regionSummaryIwsMexico,
  };
  