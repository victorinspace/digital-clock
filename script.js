// Work Items
// - Include nd, rd, and th in date
// - add clock ticking 

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

let num = 0;
let colon = '';
const intervalID = setInterval(function () {
    // Get Time
	num++;
    let today = new Date();
    let hour = String(today.getHours()).padStart(2, "0");
    let minute = String(today.getMinutes()).padStart(2, "0");
    let second = String(today.getSeconds()).padStart(2, "0");

    let zeroLeading = function(slotA) {
        if (slotA == hour) {
          if (slotA >= 13) {
            slotA = slotA - 12;
            slotA = `0${slotA}`;
            return slotA;
          }
        } else {
        return slotA;
      }
    }
    
    // Create 'ticker'
    if (num % 2 == 0) {
        document.getElementById("time").innerHTML = `
        	${zeroLeading(hour)} ${minute} ${second}
        `;
    } else {
        document.getElementById("time").innerHTML = `
        	${zeroLeading(hour)}:${minute}:${second}
        `;
    }
}, 1000);

