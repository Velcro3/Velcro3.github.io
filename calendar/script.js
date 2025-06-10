// Make ordinalizer
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th
    switch (day % 10) {
        case 1:  return 'st';
        case 2:  return 'nd';
        case 3:  return 'rd';
        default: return 'th';
    }
}
// Set out months in table
const getMonthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmber"];
// Set out weekdays in table
const getDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// Initialize pointer to day name on HTML
let htmlDayName = document.getElementById("day");
// Initial timeset
        let date2 = new Date();
        let month = date2.getMonth();
        let day = date2.getDay();
        let daynum = date2.getDate();
        let ordinal = getOrdinalSuffix(daynum);
        let monthName = getMonthName[month];
        let dayName = getDayName[day];
        let termName = dayName + " " + daynum + ordinal + " " + monthName
        htmlDayName.innerText = termName;
// Initialize the timer
let date = new Date();
let sec = date.getSeconds();
setTimeout(()=>{
    setInterval(()=>{
        let date2 = new Date();
        let month = date2.getMonth();
        let day = date2.getDay();
        let daynum = date2.getDate();
        let ordinal = getOrdinalSuffix(daynum);
        let monthName = getMonthName[month];
        let dayName = getDayName[day];
        let termName = dayName + " " + daynum + ordinal + " " + monthName
        htmlDayName.innerText = termName;
    }, 60 * 1000);
}, (60 - sec) * 1000)