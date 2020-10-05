
const trafficLineChart = document.getElementById('traffic-chart');
const trafficBarChart = document.getElementById('daily-chart');
const mobileUsersChart = document.getElementById('mobile-users-chart');
const alertBanner = document.getElementById('alert');
const bell = document.getElementById('bell');
const badge = document.getElementById('badge');
const notifications = document.getElementById('notifications');

//------------create the HTML for the banner---------------//
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert</strong> You have <strong>6</strong> overdue tasks to complete.</p>
        <p class="alert-banner-close">X</p>
    </div>
    `
    
alertBanner.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
});

//------------NOTIFICATIONS---------------//
bell.addEventListener('click', e => {
    let element = e.target;
    console.log(element);
    badge.style.display = 'none';
    notifications.style.display = 'block';
    bell.classList.add('active');

    if (element.classList.contains('notification-close')) {
        const list = element.parentElement;
        list.style.display = 'none';
    }
});


//--------------- LINE CHART ---------------//
//------------------------------------------//
let lineChart = new Chart(trafficLineChart, {
    type: 'line',
    data: {
        datasets: [{
            lineTension: 0,
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: 'rgba(115,119,191,0.2)',
            borderColor: 'rgba(115,119,191,0.7)',
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointBorderColor: 'rgba(115,119,191,1)',
            pointBorderWidth: 2,
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    stepSize: 500,
                    beginAtZero: true,
                    minor: {
                        fontSize: 10
                    }
                }
            }],
            xAxes: [{
                labels: ['wk 1', 'wk 2', 'wk 3', 'wk 4', 'wk 5', 'wk 6', 'wk 7', 'wk 8'],
                ticks: {
                    minor: {
                        fontSize: 10
                    }
                }
            }]
        }
    }
});

//--------------- BAR CHART ---------------//
//------------------------------------------//
let barChart = new Chart(trafficBarChart, {
    type: 'bar',
    data: {
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(115,119,191,1)',
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 250,
                    stepSize: 50,
                    beginAtZero: true,
                    minor: {
                        fontSize: 8
                    }
                }
            }],
            xAxes: [{
                labels: ['S', 'M', 'T', 'W', 'T', 'F'],
                ticks: {
                    minor: {
                        fontSize: 8
                    }
                }
            }]
        }
    }
});

//--------------- DOUGHNUT CHART ---------------//
//------------------------------------------//
let doughnutChart = new Chart(mobileUsersChart, {
    type: 'doughnut',
    data: {
        labels: ['Phone', 'Tablet', 'Desktop'],
        datasets: [{
            backgroundColor: ['#81c98f', '#74b1bf', '#7377bf'],
            data: [3000, 3000, 10000],
            borderWidth: 0
        }]
    },
    options: {
        legend : {
            position: 'right',
            labels: {
                boxWidth: 12,
                fontSize: 12,
            }
        },
        rotation: -0.7 * Math.PI
    }
});