
let USER_ACTIVE = false
// let myDate = Date.now()
// let myFullDate = new Date(myDate)
// console.log("full: " + myFullDate)
// console.log("Dia: " + myFullDate.getDay())
// console.log("mes: " + myFullDate.getMonth())
// console.log("año: " + myFullDate.getFullYear() )
let myMilisecondsDate = Date.now()
let myDate = new Date(myMilisecondsDate)
// Año actual y mes actual (0 = enero, ..., 11 = diciembre)
const año = myDate.getFullYear();
const mes = myDate.getMonth();

// Creamos una fecha al día 0 del mes siguiente:
const últimoDíaDelMes = new Date(año, mes + 1, 0);

// Número de días que tuvo ese mes
const díasEnElMes = últimoDíaDelMes.getDate();

console.log('Este mes tiene ' + díasEnElMes + ' días.');

console.log('full date: ' + myDate)
console.log('dia de la semana: ' + myDate.getDay())
console.log('dia del mes: ' + myDate.getDate())
console.log('mes: ' + myDate.getMonth())
console.log('año: ' + myDate.getFullYear())


let inicial_day = myDate.getDate() - myDate.getDay()
//console.log('dia inicial: ' + inicial_day)
let myDaysOfWeek = []
for (i = 0; i < 7; i++) {
  myDaysOfWeek.push(inicial_day + i)
}

const myCalendar = document.getElementById('calendar1')
const btnPrev = document.getElementById('calendar1Prev');
const btnNext = document.getElementById('calendar1Next');

const myHours = ['',
  '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00'
];

const dayNames = [
  "Sun", "Mon", "Tues",
  "Wed", "Thur", "Fri", "Sat"
];



// --------------------INICIO DE LA LÓGICA DE CALENDARIO--------------

// 2. Estado: fecha del primer día de la semana (domingo)
let weekStart = getWeekStart(new Date());  // hoy → domingo pasado o de hoy si es domingo
let myProfesionalPicked_index = 1
let scheduleData = [];
let scheduleDataUser = [];
let rowMonday = 2, rowTuesday = 2, rowWednesday = 2, rowThursday = 2, rowFriday = 2, rowSaturday = 2

// ----PEQUEÑA LOGICA PARA ORGANIZAR LAS CELDAS DISPONIBLES PARA AGENDAR EN BASE A LOS INDEX DE LOS DIAS---

function updateRowDay(day) {
  switch (day) {
    case 1:
      rowMonday++;
      break;
    case 2:
      rowTuesday++;
      break;
    case 3:
      rowWednesday++;
      break;
    case 4:
      rowThursday++;
      break;
    case 5:
      rowFriday++;
      break;
    case 6:
      rowSaturday++;
      break;

  }
}

function getRowDay(d) {
  switch (d) {
    case 1:
      return rowMonday;
    case 2:
      return rowTuesday;
    case 3:
      return rowWednesday;
    case 4:
      return rowThursday;
    case 5:
      return rowFriday;
    case 6:
      return rowSaturday;

  }
}

// -----------------------------------------------------------

// 3. Función que calcula y pinta la semana
function renderWeek(startDate) {
  rowMonday = 2, rowTuesday = 2, rowWednesday = 2, rowThursday = 2, rowFriday = 2, rowSaturday = 2
  myCalendar.innerHTML = '';       // limpiamos
  const year = startDate.getFullYear();
  const month = startDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  for (let hourIdx = 0; hourIdx < myHours.length; hourIdx++) {
    // recorremos cada día de la semana
    for (let d = 0; d < 7; d++) {
      // raw = índice relativo al día del mes
      const raw = startDate.getDate() + d;
      let day, m = month, y = year;

      if (raw < 1) {
        day = daysInPrevMonth + raw;
        m = month - 1;
      } else if (raw > daysInMonth) {
        day = raw - daysInMonth;
        m = month + 1;
      } else {
        day = raw;
      }

      if (m < 0) { m = 11; y = year - 1; }
      if (m > 11) { m = 0; y = year + 1; }



      const cell = document.createElement('div');
      cell.className = 'cell1';
      cell.classList.add('ff2', 'fw300', 'fs12');
      // ---logica ara inhabilitar todo el dia de domingos, esos dias no se labora.----

      // --------------------------------------------------------------------------------
      if (hourIdx === 0) {
        cell.classList.add('bcFirst', 'cWhite');
        cell.innerHTML = `${day}/${m + 1}<br>${dayNames[d]}`;
      } else {
        89
        let dateStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        let hourStr = myHours[hourIdx]
        // ————— Aquí comparas con scheduleData —————
        const match = scheduleData.find(ev =>
          ev.date === dateStr &&
          ev.hour === hourStr
        );
        let match2

        if (USER_ACTIVE && scheduleDataUser && scheduleDataUser.length > 0) {
          match2 = scheduleDataUser.find(ev =>
            ev.date === dateStr &&
            ev.hour === hourStr
          );
          console.log('match2: ', match2)
        }
        //  --------AQUI TENGO QUE APLICAR UNA LOGICA RARA PARA PODER VER COMO ORGANIZAR LAS DISPONIBLES-----

        if (match) {
          // Añade la clase con el nombre del estado, p.ej. 'AV', 'BS' o 'NAV'
          if (USER_ACTIVE) {
            if (match2) {
              cell.classList.add(match.status);
              cell.style.setProperty('cursor', 'pointer')
              cell.style.gridRow = getRowDay(d)
              cell.style.gridColumn = d + 1
              cell.addEventListener('click', () => openModal(dateStr, myHours[hourIdx], myProfesionalPicked_index))
              cell.innerHTML = `${myHours[hourIdx]} <br> ${match2.service}`;
              cell.dataset.date = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              cell.dataset.hour = myHours[hourIdx];
              updateRowDay(d)
            }

          }
          if (match.status != "BS" && match.status != "PND" && match.status != "NAV" && match.status != "ACC" && match.status != "REJ" && d != 0) {
            cell.classList.add(match.status);
            cell.style.setProperty('cursor', 'pointer')
            cell.style.gridRow = getRowDay(d)
            cell.style.gridColumn = d + 1
            cell.addEventListener('click', () => openModal(dateStr, myHours[hourIdx], myProfesionalPicked_index))
            cell.textContent = myHours[hourIdx];
            cell.dataset.date = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            cell.dataset.hour = myHours[hourIdx];
            updateRowDay(d)
          }


        }
        else {
          if (d != 0) {
            cell.classList.add('AV');
            cell.style.setProperty('cursor', 'pointer')
            cell.style.gridRow = getRowDay(d)
            cell.style.gridColumn = d + 1
            cell.addEventListener('click', () => openModal(dateStr, myHours[hourIdx], myProfesionalPicked_index))
            cell.textContent = myHours[hourIdx];
            cell.dataset.date = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            cell.dataset.hour = myHours[hourIdx];
            updateRowDay(d)
          }


        }
        // ----------------------------fin de logica de organizacion de disponibildad

        // cell.classList.add('bcLightWhite2','fs12');

      }

      myCalendar.appendChild(cell);
    }
  }
}

const modalOverlay1 = document.getElementById('modalOverlay1');
const closeBtn1 = document.getElementById('closeBtn1');

// Cerrar modal al hacer clic en la X
closeBtn1.addEventListener('click', () => {
  modalOverlay1.style.display = 'none';
});


// Cerrar modal al hacer clic fuera del modal (en el overlay)
modalOverlay1.addEventListener('click', (event) => {
  // Solo cerrar si el clic es en el overlay, no dentro del modal
  if (event.target === modalOverlay1) {
    modalOverlay1.style.display = 'none';
  }
});


function openModal(date, hour, usr_id) {
  console.log(date + " " + hour + " " + usr_id)
  modalOverlay1.style.display = 'flex';
  const myModalContent1 = document.getElementById('modalContent1')
  myModalContent1.innerHTML = `
               <div class="w100 h100  dFlex jcCenter aiCenter">
                        <img src="../images/${myMembersImgs[myProfesionalPicked_index - 1]}" class="br50per myImg2 b5_solid_white">
                </div>

                <div class="w100 h100  dFlex jcCenter fdColumn aiCenter gap5 bsBorderBox pl10 pr10">
                        <label class="fw200 ff1 fs6 cThird">${myMembersNames[myProfesionalPicked_index - 1]}</label>
                        <div class="line3"></div>
                        <label class="fw200 ff2 fs3 cWhite">${myMembersJob[myProfesionalPicked_index - 1]}</label>
                </div>
  `

  const modaleSservices = document.getElementById('modalServices')
  modaleSservices.innerHTML = `
 <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Eeyelash', '${date}', '${hour}', ${usr_id})">E Y E L A S H <br> E X T E N S I O N</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Eyebrows', '${date}', '${hour}', ${usr_id})">E Y E B R O W S</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Facials',  '${date}', '${hour}', ${usr_id})"> F A C I A L S</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Make Up',  '${date}', '${hour}', ${usr_id})">M A K E &nbsp;&nbsp; U P</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Tanning',  '${date}', '${hour}', ${usr_id})">T A N N I N G</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Spray Tans', '${date}', '${hour}', ${usr_id})">S P R A Y <br> T A N S</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Nails', '${date}', '${hour}', ${usr_id})">N A I L S</div>
                    <div class="br2 w100 h100px bcSecond width_responsive fShrink0 dFlex jcCenter aiCenter ff1 cFirst fw400 fs4 bsBorderBox p10 cPointer" onclick="bookService('Hair Removal', '${date}', '${hour}', ${usr_id})">H A I R <br> R E M O V A L</div>

`

}

async function bookService(service, date, hour, artist_id) {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  if (params.has('myId')) {
    const user_id = params.get('myId')
    const res = await fetch('https://prestige-beauty-backend.vercel.app/book_Service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service: service, date: date, hour: hour, artist_id: artist_id, user_id: user_id })
    });

    console.log(res)

    modalOverlay1.style.display ='none'
    loadAndRender()


  }

}

const myMembersJob = ['Salon owner & Beautician', 'Beautician & Social Media', 'Beautician', 'Beautician & Social Media', 'Nail Technician', 'Acrylic & BIAB Nails']
const myMembersNames = ['Teresa', 'Lucy-Rose', 'Carly', 'Hollie', 'Marni', 'Amy']
const myMembersImgs = ['team_teresa.jpg', 'team_lucy-rose.jpg', 'team_carly.jpg', 'team_holly.jpg', 'team_marni.jpg', 'team_amy.jpg']

// 4. Helper: dado un Date retorna el domingo de esa semana
function getWeekStart(date) {
  const dow = date.getDay();  // 0=dom,1=lun...
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - dow);
  return sunday;
}

// --------------------------------FIN DE LA LOGICA PARABEL CALENDARIO-------------


// 5. Botones “<” y “>”
btnPrev.addEventListener('click', () => {
  weekStart.setDate(weekStart.getDate() - 7);
  renderWeek(weekStart);
});
btnNext.addEventListener('click', () => {
  weekStart.setDate(weekStart.getDate() + 7);
  
  renderWeek(weekStart);
});






//------Logica para poder hacer que se seleccione solo una profesional y se cambie solo su birde de color y el resto se les quite el borde blanco, que solo permite una a la vez tener el borde blanco

const myImgGlow = document.querySelectorAll('.changeGlowEffect')

myImgGlow[0].classList.add('b5_solid_white')

// 6. Inicial

// Devuelve el array de schedules
async function getSchedule(usr_id) {
  const res = await fetch('https://prestige-beauty-backend.vercel.app/getSchedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: usr_id })
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  console.log('Schedule cargado:', data);
  return data;    // <— Devuelve el array
}


// Devuelve el array de schedules
async function getSchedule_with_user(myid, usr_id) {
  const res = await fetch('https://prestige-beauty-backend.vercel.app/getSchedule_with_user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: myid, user_id: usr_id })
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  console.log('Schedule cargado de usuario bv :', data);
  return data;    // <— Devuelve el array
}


// 1) Función que carga y luego pinta
async function loadAndRender() {
  try {
    scheduleData = await getSchedule(myProfesionalPicked_index);
    const query = window.location.search;
    const params = new URLSearchParams(query);
    if (params.has('myId')) {
      USER_ACTIVE = true
      scheduleDataUser = await getSchedule_with_user(myProfesionalPicked_index, params.get('myId'))
    }

  } catch (err) {
    console.error('Error cargando schedule:', err);
    scheduleData = [];
  }
  renderWeek(weekStart);
}


loadAndRender()

myImgGlow.forEach((el, index) => {
  el.addEventListener('click', () => {
    myProfesionalPicked_index = index + 1
    console.log('el index de la profesional es: ' + myProfesionalPicked_index)
    loadAndRender()
    el.classList.add('b5_solid_white')
    myImgGlow.forEach(el2 => {
      if (el2 != el) {

        el2.classList.remove('b5_solid_white')
      }
    })
  })
})


// console.log(getDayName())