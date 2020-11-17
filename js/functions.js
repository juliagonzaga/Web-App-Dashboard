const hourData = [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20];
const hourLabel = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];
const hourMax = 50;
const hourStep = 10;

const dailyData = [220, 350, 300, 180, 250, 450, 300, 290, 400, 340, 200];
const dailyLabel = ['wed', 'thurs', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat',];
const dailyMax = 500;
const dailyStep = 100;

const weekData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 1250, 1850, 2250, 1500];
const weekLabel = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
const weekMax = 2500;
const weekStep = 500;

const moData = [2000, 5000, 1700, 6500, 4300, 1800, 4500, 7800, 8500, 6200, 5500, 7500];
const moLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const moMax = 10000;
const moStep = 2000;

function updateChart(time, label, max, step) {
    lineChart.data.datasets[0].data = time;
    lineChart.options.scales.xAxes[0].labels = label;
    lineChart.options.scales.yAxes[0].ticks.max = max;
    lineChart.options.scales.yAxes[0].ticks.stepSize = step;
    lineChart.update();
};

const alertOnLoad = '<span><strong>Alert</strong></span> <p>You have <strong>6</strong> overdue tasks to complete.</p>';
const userError = '<p>Please fill out <strong>user</strong> and <strong>message</strong> fields before sending</p>';
const userFieldError = '<p>Please fill out <strong>user</strong> field before sending</p>';
const messageFieldError = '<p>Please fill out <strong>message</strong> field before sending</p>';

function addAlert (text) {
    $('.alert').html(
        `${text} <p class='alert-banner-close'><strong>X</strong></p>`
    );
};

function updateSettings (newSettings) {
    localStorage.setItem('settings', JSON.stringify(newSettings));
};

function getSettings () {
    let newSettings = JSON.parse(localStorage.getItem('settings'));

    if (newSettings) {
        return newSettings;
    };
};

function clearSettings () {
    updateSettings({
        email: false,
        profile: false,
        timezone: 'Select a Timezone'
    });
};

function applySettings () {
    const newSettings = getSettings();
    const email = newSettings.email;
    const profile = newSettings.profile;
    const timezone = newSettings.timezone;

    $('#send-email').prop('checked', email);
    $('#send-profile').prop('checked', profile);
    $('#timezone').val(timezone);
};