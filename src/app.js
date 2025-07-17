const selectMoneda = document.getElementById('moneda');
const btnConvertir = document.getElementById('convertir');
const resultadoDiv = document.getElementById('resultado');
const errorDiv = document.getElementById('error');
const inputCLP = document.getElementById('pesoCLP');
const canvasGrafico = document.getElementById('grafico');
let chart;

async function cargarMonedas() {
    try {
        const res = await fetch('https://mindicador.cl/api');
        const data = await res.json();
        
        const monedas = [
            { codigo: 'dolar', nombre: data.dolar.nombre },
            { codigo: 'euro', nombre: data.euro.nombre },
            { codigo: 'uf', nombre: data.uf.nombre },
            { codigo: 'ivp', nombre: data.ivp.nombre },
            { codigo: 'bitcoin', nombre: data.bitcoin.nombre }
        ];
        selectMoneda.innerHTML = '<option value="">Seleccione moneda...</option>';
        monedas.forEach(moneda => {
            const option = document.createElement('option');
            option.value = moneda.codigo;
            option.textContent = moneda.nombre;
            selectMoneda.appendChild(option);
        });
    } catch (error) {
        errorDiv.textContent = 'Error al cargar monedas: ' + error.message;
    }
}

btnConvertir.addEventListener('click', async () => {
    resultadoDiv.textContent = '';
    errorDiv.textContent = '';
    const montoCLP = parseFloat(inputCLP.value);
    const monedaSeleccionada = selectMoneda.value;

    if (!montoCLP || montoCLP <= 0) {
        errorDiv.textContent = 'Ingrese un monto válido en CLP.';
        return;
    }
    if (!monedaSeleccionada) {
        errorDiv.textContent = 'Seleccione una moneda.';
        return;
    }

    try {
        const res = await fetch(`https://mindicador.cl/api/${monedaSeleccionada}`);
        const data = await res.json();
        const valorMoneda = data.serie[0].valor;
        const resultado = montoCLP / valorMoneda;
        resultadoDiv.textContent = `Resultado: ${resultado.toFixed(2)} ${data.nombre}`;

        const ultimos10 = data.serie.slice(0, 10).reverse();
        const labels = ultimos10.map(d => d.fecha.slice(0, 10));
        const valores = ultimos10.map(d => d.valor);

        if (chart) chart.destroy();

        chart = new Chart(canvasGrafico, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Historial últimos 10 días (${data.nombre})`,
                    data: valores,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0,0,255,0.1)',
                    fill: true,
                    tension: 0.2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                }
            }
        });
    } catch (error) {
        errorDiv.textContent = 'Error al convertir o graficar: ' + error.message;
    }
});

cargarMonedas();