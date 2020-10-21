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


//adds an 'active'class for the clicked nav link
$('.traffic-nav').on('click', 'li', function(){

    $('.traffic-nav__link').each(function(){
        $(this).removeClass('active');
    });

    $(this).addClass('active');
    const $time = $('.active').text();
    
    if ($time === 'Hourly') {
        updateChart(hourData, hourLabel, hourMax, hourStep);
    } 
    else if ($time === 'Weekly') {
        updateChart(weekData, weekLabel, weekMax, weekStep);
    }
});

//--------------- LINE CHART ---------------//
//------------------------------------------//
let lineChart = new Chart($('#traffic-chart'), {
    type: 'line',
    data: {
        datasets: [{
            lineTension: 0,
            data: weekData,
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
        aspectRatio: 2.5,
        animation : {
            duration: 0
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: weekMax,
                    stepSize: weekStep,
                    beginAtZero: true,
                    minor: {
                        fontSize: 11
                    }
                }
            }],
            xAxes: [{
                labels: weekLabel,
                ticks: {
                    minor: {
                        fontSize: 11
                    }
                }
            }]
        }
    }
});

//--------------- BAR CHART ---------------//
//------------------------------------------//
let barChart = new Chart($('#daily-chart'), {
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
                        fontSize: 11
                    }
                }
            }],
            xAxes: [{
                labels: ['S', 'M', 'T', 'W', 'T', 'F'],
                ticks: {
                    minor: {
                        fontSize: 11
                    }
                }
            }]
        }
    }
});

//--------------- DOUGHNUT CHART ---------------//
//------------------------------------------//
let doughnutChart = new Chart($('#mobile-users-chart'), {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
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
                boxWidth: 14,
                fontSize: 14
            }
        },
        rotation: -0.7 * Math.PI
    }
});