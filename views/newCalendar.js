const myNewCalendar = document.getElementById('newCalendar')

const myDate = new Date()
const otherDay = Date.now()
const myDay = myDate.getDay()
let myMonth = myDate.getMonth()
const myYear = myDate.getFullYear()
const myDayMonth = myDate.getDate()
const myDayName = myDate.toLocaleDateString('es-ES', { weekday: "long" })
const myMonthName = myDate.toLocaleDateString('es-ES', { month: 'long' })
const theLastDayDate = new Date(myYear, myMonth + 1, 0)
const theLastDay = theLastDayDate.getDate()

// console.log("fecha completa: ", myDate)
// console.log("miliseconds: " , otherDay)
// console.log("Número de día en la semana 0-6: ", myDay)
// console.log("Nombre del día: ", myDayName)
// console.log("Número del mes 0-11: ", myMonth)
// console.log("Número del dia 1-31: ",  myDayMonth)
// console.log("Nombre del mes: ", myMonthName)
// console.log("último día del mes: ", theLastDay)

function getWeek(myDay, myDayMonth, myMonth, myYear){

let myArrayWeek = {}
myDayMonth -= myDay
let myPost_Index =1
const mylastDay = new Date(myYear, myMonth + 1, 0).getDate()

//console.log("b" , mylastDay)

for(i=0; i<7; i++){

    // console.log("El días crudo es: ", (myDayMonth ))
    let myDefinitiveDay_toAdd = 0
    let myDefinitiveMonth_toAdd = 0
    if((myDayMonth + i)<1){
        let myLastDay_of_TheLastMonth = new Date(myYear, myMonth, 0).getDate()
        //console.log("el ultime dia es: " , myLastDay_of_TheLastMonth)
        myDefinitiveDay_toAdd = myLastDay_of_TheLastMonth - (-myDayMonth) + i
        myDefinitiveMonth_toAdd = myMonth
       // console.log(myLastDay_of_TheLastMonth - (-myDayMonth) + i  + " " + myMonth)
    }
    else if((myDayMonth + i)> mylastDay){
        myDefinitiveDay_toAdd = myPost_Index
        myDefinitiveMonth_toAdd = myMonth + 2
       // console.log(myPost_Index + " " + (myMonth+2))
        
        myPost_Index++
    }
    else{
        myDefinitiveDay_toAdd  = myDayMonth + i
        myDefinitiveMonth_toAdd = myMonth+1
        //console.log(myDayMonth + i + " " + (myMonth+1))

    }
    myArrayWeek[i] = [myDefinitiveDay_toAdd, myDefinitiveMonth_toAdd]
}

 return myArrayWeek;
}

let myWeek = {}
const myWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
function renderCalendar(myDay, myDayMonth, myMonth, myYear) {
    //console.log("---recibi el mes: " + myMonth, ", el día: " + myDayMonth)
     myWeek = getWeek(myDay, myDayMonth, myMonth, myYear)
    //console.log(myWeek)
    let myString = ''
    //console.log('j')
    for (i = 0; i < 7; i++) {
        myString+= `
        <div class="w100 h100 dFlex jcCenter aiCenter">
          <div class=" cPointer hoverLight resp_TabletsSize square1 br50per bcFirst fs12 ff2 fw400 cWhite dFlex aiCenter jcCenter fdColumn">
            ${myWeek[i][0]} / ${myWeek[i][1]} <br> <span class="fs1"> ${myWeekNames[i]} </span>
          </div>
        </div>`

    }
    
    myNewCalendar.innerHTML = myString
}

renderCalendar(myDay, myDayMonth, myMonth, myYear)


// -------------------FUNCIONALIDAD PARA MOVER EL CALENDARIO CON OS BOTONES-----

const beforeCalendar = document.getElementById('beforeCalendar')

const afterCalendar = document.getElementById('afterCalendar')

beforeCalendar.addEventListener('click', ()=>{
    let myNewDay = myWeek[0][0]-1
   // console.log("myNewDay es: " + myNewDay)
    let myNewMonth = myMonth
// console.log("el día actual de semana es: "  + myDay)
// console.log("El día actual del mes es " + myDayMonth)
// console.log("----------")
// console.log("el día de la semana anterior es: "  + 6)
let myBoolan = false
if(myNewDay < 1){
    myNewDay = new Date(myYear, myMonth, 0).getDate()
    //console.log("El ultimo dia del mes anterio es: " + myNewDay)
    myNewMonth -=1
    myMonth--
    //console.log("se le resta uno al mes: " + myNewMonth)
    myBoolan = true
}
//console.log("myNewMonth es: " + myNewMonth + " y week[0][1] es: " + (myWeek[0][1]-1))
if(myNewMonth != (myWeek[0][1]-1) && !myBoolan){
   // console.log('entró al ifffff')
    myNewMonth = myWeek[0][1]-1
    myMonth = myWeek[0][1]-1
}
renderCalendar(6, myNewDay, myNewMonth, myYear)
//console.log("El día de la semana anterior del mes es " + myNewDay)


})

afterCalendar.addEventListener('click', ()=>{
    let myNewDay = myWeek[6][0]+1
    //console.log("myNewDay es: " + myNewDay)
    let myNewMonth = myMonth
// console.log("el día actual de semana es: "  + myDay)
// console.log("El día actual del mes es " + myDayMonth)
// console.log("----------")
// console.log("el día de la semana anterior es: "  + 6)
let myBoolan = false
if(myNewDay > theLastDay){
    myNewDay = 1
   // console.log("El ultimo dia del mes anterio es: " + myNewDay)
    myNewMonth +=1
    myMonth++
    //console.log("se le suma uno al mes: " + myNewMonth)
    myBoolan = true
}
//console.log("myNewMonth es: " + myNewMonth + " y week[0][1] es: " + (myWeek[6][1]-1))
if(myNewMonth != (myWeek[6][1]-1) && !myBoolan){
    //console.log('entró al ifffff')
    myNewMonth = myWeek[6][1]-1
    myMonth = myWeek[6][1]-1
}
renderCalendar(0, myNewDay, myNewMonth, myYear)
//console.log("El día de la semana anterior del mes es " + myNewDay)


})


//---ahora que se definieron las variables se empezará a crear el calendario
