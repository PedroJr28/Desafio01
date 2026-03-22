const ctx = document.querySelector('.grafico').getContext('2d');
const meuGrafico = new Chart(ctx, {
    type: 'line', data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],