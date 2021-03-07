const weekdayList = {
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
    '7': 'Sunday'
}

const monthList = {
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

const dayOfTheMonthFormat = {
	'1': 'st',
	'2': 'nd',
	'3': 'rd',
	'4': 'th'
}

const formatDayOfTheMonth = function(dayOfTheMonth) {
	if (dayOfTheMonth === 1) {
		return dayOfTheMonth + dayOfTheMonthFormat[1];
	} else if (dayOfTheMonth == 2) {
        return `${dayOfTheMonthFormat[2]}`;
    } else if (dayOfTheMonth == 3) {
        return `${dayOfTheMonthFormat[3]}`;
    } else {
        return `${dayOfTheMonthFormat[4]}`;
    }
}

let today = new Date();

// ** Initializing & formatting the DATE
let day = today.getDay() + 1;  
const monthDay = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
document.getElementById('date').innerHTML = 
    `${weekdayList[day]}, ${monthList[month]} ${monthDay}${formatDayOfTheMonth(monthDay)} ${year}`;

// ** Initializing & formatting the TIME
let incrementerDevice = 0;
(printAndFormatDate = function() {
    setInterval(function () {
        incrementerDevice++;
        let today = new Date();
        let hour = String(today.getHours()).padStart(2, "0");
        let minute = String(today.getMinutes()).padStart(2, "0");
        let second = String(today.getSeconds()).padStart(2, "0");
        let earlyBirdOrMidnightOwl = '';

        const zeroLeading = function(timeEntry) {
            if (timeEntry >= 13) {
                timeEntry = timeEntry - 12;
                timeEntry = `0${timeEntry}`;
                earlyBirdOrMidnightOwl = 'AM';
                return timeEntry;
            } else {
                earlyBirdOrMidnightOwl = "PM";
                return timeEntry;
            }
        }

        // Create 'ticker'
        if (incrementerDevice % 2 == 0) {
            document.getElementById("time").innerHTML = `
                ${zeroLeading(hour)} ${minute} ${second} ${earlyBirdOrMidnightOwl}
            `;
        } else {
            document.getElementById("time").innerHTML = `
                ${zeroLeading(hour)}:${minute}:${second} ${earlyBirdOrMidnightOwl}
            `;
        }
    }, 1000);
})();
