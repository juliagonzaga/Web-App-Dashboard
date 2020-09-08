var trafficChart = document.getElementById('traffic-chart');
var lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-20', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '',
            lineTension: 0,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(116,120,191,0.3)',
            borderColor: 'rgba(116,120,191,0.7)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});