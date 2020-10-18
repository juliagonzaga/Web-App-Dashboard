
const trafficLineChart = document.getElementById('traffic-chart');
const trafficBarChart = document.getElementById('daily-chart');
const mobileUsersChart = document.getElementById('mobile-users-chart');
const bell = document.getElementById('bell');
const badge = document.getElementById('badge');
const notifications = document.getElementById('notifications');

//appends HTML for alert banner
$('.alert').html(    
    `<p><strong>Alert</strong> You have <strong>6</strong> overdue tasks to complete.</p>
     <p class='alert-banner-close'>X</p>`
);

//enables user to hide the alert banner
$('.alert').on('click', 'p', function(){
    if ($(this).hasClass('alert-banner-close')) {
        $(this).parent().hide();
    }
})

//toggles notification -- hide/ show
$('.bell').on ('click', function(e){
    e.stopPropagation();
    $('.bell').toggleClass('active');
    $('#badge').hide();

    if ($('.bell').hasClass('active')){
        $('.notifications').show();
    } else {
        $('.notifications').hide();
    }
});

//closes selected notification
$('.notifications').on ('click', 'p', function(e){
    e.stopPropagation();
    if ($(this).hasClass('notification-close')) {
        $(this).parent().hide();
    }
});

//closes notification box whenever the user clicks outside of the box
$(document).click(function() {
    $('.bell').removeClass('active');
    $('.notifications').hide();
});

// bell.addEventListener('click', e => {
//     let element = e.target;

//     if (element.classList.contains('notification-close')) {
//         const list = element.parentElement;
//         list.style.display = 'none';
//     }
// });


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
                        fontSize: 10
                    }
                }
            }],
            xAxes: [{
                labels: ['S', 'M', 'T', 'W', 'T', 'F'],
                ticks: {
                    minor: {
                        fontSize: 10
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