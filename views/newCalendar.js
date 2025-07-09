const myNewCalendar = document.getElementById('newCalendar')

const myDate = new Date()
const otherDay = Date.now()
const myDay = myDate.getDay()
const myMonth = myDate.getMonth()
const myYear = myDate.getFullYear()
const myDayMonth = myDate.getDate()
const myDayName = myDate.toLocaleDateString('es-ES', {weekday: "long"})
const myMonthName = myDate.toLocaleDateString('es-ES', {month: 'long'})
const theLastDayDate = new Date(myYear, myMonth+1, 0)
const theLastDay = theLastDayDate.getDate()

console.log(myDate)
console.log(otherDay)
console.log(myDay)
console.log(myDayName)
console.log(myMonth)
console.log(myDayMonth)
console.log(myMonthName)
console.log(theLastDay)


//---ahora que se definieron las variables se empezará a crear el calendario
