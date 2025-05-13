

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
for(i = 0; i<7; i++){
myDaysOfWeek.push(inicial_day+i)
}

const myCalendar = document.getElementById('calendar1')
const btnPrev    = document.getElementById('calendar1Prev');
const btnNext    = document.getElementById('calendar1Next');

const myHours = [
    '9:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00',
    '21:00', '22:00', '23:00'
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

// 3. Función que calcula y pinta la semana
function renderWeek(startDate) {
  myCalendar.innerHTML = '';       // limpiamos
  const year  = startDate.getFullYear();
  const month = startDate.getMonth();
  const daysInMonth     = new Date(year, month+1, 0).getDate();
  const daysInPrevMonth = new Date(year, month,   0).getDate();

  for (let hourIdx = 0; hourIdx < myHours.length; hourIdx++) {
    // recorremos cada día de la semana
    for (let d = 0; d < 7; d++) {
      // raw = índice relativo al día del mes
      const raw = startDate.getDate() + d;
      let day, m = month, y = year;

      if (raw < 1) {
        day = daysInPrevMonth + raw;
        m   = month - 1;
      } else if (raw > daysInMonth) {
        day = raw - daysInMonth;
        m   = month + 1;
      } else {
        day = raw;
      }

      if (m < 0)  { m = 11; y = year - 1; }
      if (m > 11) { m = 0;  y = year + 1; }

      const cell = document.createElement('div');
      cell.className = 'cell1';
      cell.classList.add('ff2', 'fw300', 'fs12');

      if (hourIdx === 0) {
        cell.classList.add('bcFirst','cWhite');
        cell.innerHTML = `${day}/${m+1}<br>${dayNames[d]}`;
      } else {
        let dateStr = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
        let hourStr = myHours[hourIdx]
         // ————— Aquí comparas con scheduleData —————
         const match = scheduleData.find(ev =>
          ev.date  === dateStr &&
          ev.hour  === hourStr
        );
        if (match) {
          // Añade la clase con el nombre del estado, p.ej. 'AV', 'BS' o 'NAV'
          cell.classList.add(match.status);
        }
        // cell.classList.add('bcLightWhite2','fs12');
        cell.textContent = myHours[hourIdx];
        cell.dataset.date = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
        cell.dataset.hour = myHours[hourIdx];
      }

      myCalendar.appendChild(cell);
    }
  }
}


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


// 1) Función que carga y luego pinta
async function loadAndRender() {
  try {
    scheduleData = await getSchedule(myProfesionalPicked_index);
  } catch (err) {
    console.error('Error cargando schedule:', err);
    scheduleData = [];
  }
  renderWeek(weekStart);
}


loadAndRender()

myImgGlow.forEach((el,index)=>{
  el.addEventListener('click', ()=>{
    myProfesionalPicked_index = index+1
    console.log('el index de la profesional es: ' +  myProfesionalPicked_index)
loadAndRender()
    el.classList.add('b5_solid_white')
    myImgGlow.forEach(el2 =>{
      if(el2 != el){
       
        el2.classList.remove('b5_solid_white')
      }
    })
  })
})


// console.log(getDayName())