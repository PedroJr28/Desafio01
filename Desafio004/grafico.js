const ctx = document.querySelector('.grafico').getContext('2d');
const meuGrafico = new Chart(ctx, {
    type: 'line', data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],datasets: [{
            label: 'Desempenho Semanal',
            data: [12, 19, 3, 5, 2], // Os valores do gráfico
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },