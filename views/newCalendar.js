const myNewCalendar = document.getElementById('newCalendar')
const modal3 = document.getElementById('modal3')

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

function getWeek(myDay, myDayMonth, myMonth, myYear) {

    let myArrayWeek = {}
    myDayMonth -= myDay
    let myPost_Index = 1
    const mylastDay = new Date(myYear, myMonth + 1, 0).getDate()

    //console.log("b" , mylastDay)

    for (i = 0; i < 7; i++) {

        // console.log("El días crudo es: ", (myDayMonth ))
        let myDefinitiveDay_toAdd = 0
        let myDefinitiveMonth_toAdd = 0
        if ((myDayMonth + i) < 1) {
            let myLastDay_of_TheLastMonth = new Date(myYear, myMonth, 0).getDate()
            //console.log("el ultime dia es: " , myLastDay_of_TheLastMonth)
            myDefinitiveDay_toAdd = myLastDay_of_TheLastMonth - (-myDayMonth) + i
            myDefinitiveMonth_toAdd = myMonth
            // console.log(myLastDay_of_TheLastMonth - (-myDayMonth) + i  + " " + myMonth)
        }
        else if ((myDayMonth + i) > mylastDay) {
            myDefinitiveDay_toAdd = myPost_Index
            myDefinitiveMonth_toAdd = myMonth + 2
            // console.log(myPost_Index + " " + (myMonth+2))

            myPost_Index++
        }
        else {
            myDefinitiveDay_toAdd = myDayMonth + i
            myDefinitiveMonth_toAdd = myMonth + 1
            //console.log(myDayMonth + i + " " + (myMonth+1))

        }
        myArrayWeek[i] = [myDefinitiveDay_toAdd, myDefinitiveMonth_toAdd]
    }

    return myArrayWeek;
}

let myWeek = {}
const myWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
function renderCalendar(myDay, myDayMonth, myMonth, myYear) {
    //console.log("---recibi el mes: " + myMonth, ", el día: " + myDayMonth)
    myWeek = getWeek(myDay, myDayMonth, myMonth, myYear)
    //console.log(myWeek)
    let myString = ''
    //console.log('j')
    for (i = 0; i < 7; i++) {
        myString += `
        <div class="w100 h100 dFlex jcCenter aiCenter">
          <div class=" cPointer hoverLight w100 h70 br5px bcFirst fs12 ff2 fw400 cWhite dFlex aiCenter jcCenter fdColumn"
          data-day="${myWeek[i][0].toString().padStart(2, '0')}" data-month="${myWeek[i][1].toString().padStart(2, '0')}"
           onclick="createHours_toDay(${myWeek[i][0]}, ${myWeek[i][1]})">
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

beforeCalendar.addEventListener('click', () => {
    let myNewDay = myWeek[0][0] - 1
    // console.log("myNewDay es: " + myNewDay)
    let myNewMonth = myMonth
    // console.log("el día actual de semana es: "  + myDay)
    // console.log("El día actual del mes es " + myDayMonth)
    // console.log("----------")
    // console.log("el día de la semana anterior es: "  + 6)
    let myBoolan = false
    if (myNewDay < 1) {
        myNewDay = new Date(myYear, myMonth, 0).getDate()
        //console.log("El ultimo dia del mes anterio es: " + myNewDay)
        myNewMonth -= 1
        myMonth--
        //console.log("se le resta uno al mes: " + myNewMonth)
        myBoolan = true
    }
    //console.log("myNewMonth es: " + myNewMonth + " y week[0][1] es: " + (myWeek[0][1]-1))
    if (myNewMonth != (myWeek[0][1] - 1) && !myBoolan) {
        // console.log('entró al ifffff')
        myNewMonth = myWeek[0][1] - 1
        myMonth = myWeek[0][1] - 1
    }
    renderCalendar(6, myNewDay, myNewMonth, myYear)
    //console.log("El día de la semana anterior del mes es " + myNewDay)


})

afterCalendar.addEventListener('click', () => {
    let myNewDay = myWeek[6][0] + 1
    //console.log("myNewDay es: " + myNewDay)
    let myNewMonth = myMonth
    // console.log("el día actual de semana es: "  + myDay)
    // console.log("El día actual del mes es " + myDayMonth)
    // console.log("----------")
    // console.log("el día de la semana anterior es: "  + 6)
    let myBoolan = false
    if (myNewDay > theLastDay) {
        myNewDay = 1
        // console.log("El ultimo dia del mes anterio es: " + myNewDay)
        myNewMonth += 1
        myMonth++
        //console.log("se le suma uno al mes: " + myNewMonth)
        myBoolan = true
    }
    //console.log("myNewMonth es: " + myNewMonth + " y week[0][1] es: " + (myWeek[6][1]-1))
    if (myNewMonth != (myWeek[6][1] - 1) && !myBoolan) {
        //console.log('entró al ifffff')
        myNewMonth = myWeek[6][1] - 1
        myMonth = myWeek[6][1] - 1
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


async function createHours_toDay(day, month) {
    MY_DATE = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`

    const myResp = await fetch('https://prestige-beauty-backend.vercel.app/getBussyByDate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'specialist_id': MY_ID_ARTIST,
            'date': MY_DATE 
        })
    })


    const response = await myResp.json();
    console.log(response)
    fullContainerCallendar.style.display = 'none'
    fullCalendarHours.style.display = 'grid'

    const myHoursContainer = document.getElementById('myHoursContainer')
    // console.log(day)
    // console.log(month)
    let myString = ''
    let MY_BLOCKS = 0
    for (i = 0; i < myHours.length; i++) {
        const  busyHour = response.find(item => item.SCHEDULE2_HOUR === myHours[i]);
        //console.log('jk')
        if(!busyHour && MY_BLOCKS<=0){
            myString += `
            <div class="container-hour fShrink0 cPointer hoverLight w100px h70 br5px bcFirst fs12 ff2 fw400 cWhite dFlex aiCenter jcCenter" data-hour="${myHours[i]}">
                  ${myHours[i]} 
            </div>`
        }
        else{
            if(MY_BLOCKS<=0){
                MY_BLOCKS =  (busyHour.SCHEDULE2_BLOCKS-1)
               console.log("se cambia el valor de Blocks: " + MY_BLOCKS)
            }
            else{
                MY_BLOCKS--
                console.log("se resta 1 a blocks")
            }
        }
       
    }

    myHoursContainer.innerHTML = myString

    const myAllHours = document.querySelectorAll('.container-hour')
    const ConfirmModal = document.getElementById('ConfirmModal')
    myAllHours.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.add('selected-service')
            ConfirmModal.style.display = 'grid'
            MY_HOUR = el.getAttribute('data-hour')
            console.log(MY_SUBSERVICE_NAME)
            console.log(MY_TYPE_OF_SUBSERVICE)
            console.log(MY_ARTIST_NAME)
            console.log(MY_GBP)
            console.log(MY_HOUR)
            console.log(MY_TIME)
            console.log(MY_DATE)
            ConfirmModal.innerHTML = `
              <!-- ----SECCION DONDE ESTÁ EL BOTON DE REGRESAR PARA NO CONFIRMAR---- -->
            <div class="w100 h100 dFlex bsBorderBox pl20 aiCenter jcStart pt5">
                <div class="w10 h80 br5px bcFirst cPointer hoverLight dFlex aiCenter jcCenter ff2 fs2 fw700 cWhite"
                    id="backToMainModal">
                    &larr;</div>
            </div>
            <!-- ------SECCIÓN PRINCIPAL DONDE ESTARÁ EL CONTENIDO DE LA INFORMACION--- -->
            <div class="w100 h100  bsBorderBox p30 dFlex jcCenter aiStart gap10 fdColumn">
                <label class="fw700 cFirst ff2 fs2 taLeft">${MY_SUBSERVICE_NAME}</label>
                <label class="fw300 cBlack ff2 fs21">With <span class="fw600">${MY_ARTIST_NAME}</span> </label>

               <label class="fw300 cBlack ff2 fs17 taLeft">${MY_TYPE_OF_SUBSERVICE}</label>
               <label class="fw300 cBlack ff2 fs17">${MY_DATE}  -  ${MY_HOUR}</label>
               <label class="fw600 cBlack ff2 fs17">${MY_GBP}</label>
               <label class="fw600 cBlack ff2 fs17">${MY_TIME} min</label>




            </div>

            <!-- ---------SECCION DONDE ESTÁ EL BOTÓN PRA CONFIRMAR----- -->
            <div class="w100 h100 dFlex aiCenter jcCenter">
                <button
                    class="bNone bcGreen2 hoverLight cPointer w100px h50px br10px fw600 ff2 fs12 cWhite" id="btConfirmAppointment" onclick="sendAppointment()">Confirm</button>
            </div>
            `
            logic_toClose_ConfirmModal()


            myAllHours.forEach((el2) => { if (el2 != el) { el2.classList.remove('selected-service') } })
        })
    })



}

const myID_membersJSON = {
    "Teresa": 1,
    "Lucy-Rose": 2,
    "Amy": 3,
    "Marni": 4,
    "Carly": 6
}
async function sendAppointment() {
    const query = window.location.search;

    // 2) Crea un objeto para leer los parámetros
    const params = new URLSearchParams(query);

    if (params.has('myId') && params.has('myType')) {
        const user_id = params.get('myId');
        const specialist_id = myID_membersJSON[MY_ARTIST_NAME]
        const subservice = MY_SUBSERVICE_NAME
        const type = MY_TYPE_OF_SUBSERVICE
        const money = MY_GBP
        let blocks
        if (MY_TIME < 15) {
            blocks = 1
        }
        else {
            blocks = Math.ceil(MY_TIME / 15)
        }
        const date = MY_DATE
        const hour = MY_HOUR

        const myMainModal = document.getElementById('myMainModal')
        const ConfirmModal = document.getElementById('ConfirmModal')
        const mySpinner = document.getElementById('mySpinner')
        const myModalArtist = document.getElementById('myModalArtist')
        const ContainerConfirmation = document.getElementById('ContainerConfirmation')
        myMainModal.style.display = 'none'

        ConfirmModal.style.display = 'none'
        mySpinner.style.display = 'flex'

        const myResp = await fetch('https://prestige-beauty-backend.vercel.app/saveAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'user_id': user_id,
                'specialist_id': specialist_id,
                'subservice': subservice,
                'type': type,
                'money': money,
                'blocks': blocks,
                'date': date,
                'hour': hour
            })
        })


        const response = await myResp.json();

        const myImg = document.createElement('img')
        myImg.src = "../icons/Success.png"
        myImg.classList.add('myImg8')

        const label1 = document.createElement('label')
        label1.className = 'fs6 ff2 fw600 cWhite'
        label1.innerHTML = 'Successfully Scheduled'

        ContainerConfirmation.appendChild(myImg)
        ContainerConfirmation.appendChild(label1)

        mySpinner.style.display = 'none'
        modal3.style.display = 'grid'
        setTimeout(() => {
            modal3.style.display = 'none';
            myModalArtist.style.display = 'none';
            document.getElementById('newCalendar').style = 'none'
            document.getElementById('containerButtonsCalendar').style.display = 'none'
            document.getElementById('fullCalendarHours').style.display = 'none'
            document.getElementById('ContainerSpecialists').innerHTML = ''
            document.getElementById('fullContainerCallendar').style.display = 'grid'
        }, 2000)
        console.log(response)
    }
    else {
        window.location.href = "./login.html?myOrigin=services"
    }


}


const backToDays = document.getElementById('backToDays')
backToDays.addEventListener('click', () => {
    fullCalendarHours.style.display = 'none'
    fullContainerCallendar.style.display = 'grid'
})

// ---------LÓGICA PARA CERRAR EL MODAL DE CONFIRMACIÓN-----------


function logic_toClose_ConfirmModal() {
    const backToMainModal = document.getElementById('backToMainModal')


    backToMainModal.addEventListener('click', () => {
        ConfirmModal.style.display = 'none'
    })

}

// ---------------LOGICA PARA CERRAR EL MODAL DE CITA EXITOSA -------------

const closeBtn3 = document.getElementById('closeBtn3')

closeBtn3.addEventListener('click', () => {
    modal3.style.display = 'none'
    myModalOverview.style.display = 'none'

})


//---ahora que se definieron las variables se empezará a crear el calendario
