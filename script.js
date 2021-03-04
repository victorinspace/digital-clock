// date format: Monday, August 12th 2021
// time format: 03:30:09

let testOutput = function(name, out) {
    console.log(`${name}: ${out}`);
}

let weekdayList = {
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
    '7': 'Sunday'
}

let monthList = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
}


let today = new Date();

// Get Date
let day = today.getDay();
let monthDay = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// Display Date
document.getElementById('date').innerHTML = `
    ${weekdayList[day]}, ${monthList[month]} ${monthDay} ${year}`;


// Get Time
let hour = String(today.getHours() ).padStart(2, '0');
let minute = today.getMinutes();
let second = today.getSeconds();

// Display Time
document.getElementById('time').innerHTML = `${hour}:${minute}:${second}`;

// TEST
testOutput('what the hell', day);

