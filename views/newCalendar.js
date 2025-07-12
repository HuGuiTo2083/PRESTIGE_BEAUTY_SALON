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
          <div class=" cPointer hoverLight w100 h70 br5px bcFirst fs12 ff2 fw400 cWhite dFlex aiCenter jcCenter fdColumn"
          data-day="${myWeek[i][0]}" data-month="${myWeek[i][1]}" onclick="createHours_toDay(${myWeek[i][0]}, ${myWeek[i][1]})">
            ${myWeek[i][0].toString().padStart(2, '0')} / ${myWeek[i][1].toString().padStart(2, '0')} <br> <span class="fs12 fw300"> ${myWeekNames[i]} </span>
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


// -------------------LÓGICA PARA EL HORARIO----------

const myHours = [
    '10:00', '10:15', '10:30', '10:45',
    '11:00', '11:15', '11:30', '11:45',
    '12:00', '12:15', '12:30', '12:45',
    '13:00', '13:15', '13:30', '13:45',
    '14:00', '14:15', '14:30', '14:45',
    '15:00', '15:15', '15:30', '15:45',
    '16:00', '16:15', '16:30', '16:45',
    '17:00', '17:15', '17:30', '17:45',
    '18:00', '18:15', '18:30', '18:45',
    '19:00', '19:15', '19:30', '19:45'
  ];

  const fullContainerCallendar = document.getElementById('fullContainerCallendar')
  const fullCalendarHours = document.getElementById('fullCalendarHours')


function createHours_toDay(day, month){
    fullContainerCallendar.style.display='none'

    fullCalendarHours.style.display = 'grid'

    const myHoursContainer = document.getElementById('myHoursContainer')
    // console.log(day)
    // console.log(month)
    let myString = ''
    for(i=0; i<myHours.length;i++){
        //console.log('jk')
       myString += `
       <div class="container-hour fShrink0 cPointer hoverLight w100px h70 br5px bcFirst fs12 ff2 fw400 cWhite dFlex aiCenter jcCenter">
             ${myHours[i]} 
       </div>`
    }

    myHoursContainer.innerHTML = myString
    
    const myAllHours = document.querySelectorAll('.container-hour')
const ConfirmModal = document.getElementById('ConfirmModal')
    myAllHours.forEach((el)=>{
        el.addEventListener('click', ()=>{
            el.classList.add('selected-service')
ConfirmModal.style.display='grid'
            myAllHours.forEach((el2)=>{if(el2 != el){el2.classList.remove('selected-service')}})
        })
    })



}

const backToDays = document.getElementById('backToDays')
backToDays.addEventListener('click', ()=>{
 fullCalendarHours.style.display = 'none'
 fullContainerCallendar.style.display = 'grid'
})

// ---------LÓGICA PARA CERRAR EL MODAL DE CONFIRMACIÓN-----------

const backToMainModal = document.getElementById('backToMainModal')


backToMainModal.addEventListener('click', ()=>{
    ConfirmModal.style.display = 'none'
})


//---ahora que se definieron las variables se empezará a crear el calendario
