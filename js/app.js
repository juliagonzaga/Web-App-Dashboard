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
        $(this).parent().remove();
    }

    const $notifList = $('.notifications__list li')
    if ($notifList.length === 0) {
        $('.notifications').html(`<p>No notifications.</p>`);
    }
});

//closes notification box whenever the user clicks outside of the box
$(document).click(function() {
    $('.bell').removeClass('active');
    $('.notifications').hide();
});

$('.search__box').keydown(function(){
    
})

const $searches = $('.search__box').val();
console.log($searches);

const trafficLineChart = document.getElementById('traffic-chart');
const trafficBarChart = document.getElementById('daily-chart');
const mobileUsersChart = document.getElementById('mobile-users-chart');

//--------------- LINE CHART ---------------//
//------------------------------------------//
let lineChart = new Chart(trafficLineChart, {
    type: 'line',
    data: {
        datasets: [{
            lineTension: 0,
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 1250, 1850, 2250, 1500, 2500],
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
        aspectRatio: 2,
        animation : {
            duration: 0
        },
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
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
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