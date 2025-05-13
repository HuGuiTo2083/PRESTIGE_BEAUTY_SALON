

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
const myHours = [
    '9:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00',
    '21:00', '22:00', '23:00'
  ];



const today       = new Date();
const year        = today.getFullYear();
const month       = today.getMonth();             // 0–11
const dayOfMonth  = today.getDate();              // 1–31
const dayOfWeek   = today.getDay();               // 0(dom)–6(sáb)

// 1) Días de meses:
const daysInMonth     = new Date(year, month + 1, 0).getDate();
const daysInPrevMonth = new Date(year, month,     0).getDate();

// 2) Día de la semana “bruto” (puede ser <1 o >daysInMonth)
const weekStartRaw = dayOfMonth - dayOfWeek;
const dayNames = [
    "Sun", "Mon", "Tues",
    "Wed", "Thur", "Fri", "Sat"
  ];
// 3) Construimos el array de 7 días ajustados:
const week = Array.from({ length: 7 }, (_, i) => {
  const raw = weekStartRaw + i;
  let d, m, y = year;

  if (raw < 1) {
    // viene del mes anterior
    d = daysInPrevMonth + raw;
    m = month - 1;
  } else if (raw > daysInMonth) {
    // viene del mes siguiente
    d = raw - daysInMonth;
    m = month + 1;
  } else {
    // sigue dentro del mes actual
    d = raw;
    m = month;
  }

  // Ajuste por año cuando m<0 ó m>11
  if (m < 0)  { m = 11; y = year - 1; }
  if (m > 11) { m = 0;  y = year + 1; }

  return { day: d, month: m, year: y };
});

for (let i = 0; i < myHours.length; i++) {
  week.forEach(({ day, month, year }, index) => {
    const myDiv = document.createElement('div');
    myDiv.className = 'cell1';


    if (i === 0) {
        myDiv.classList.add('bcFirst')
        myDiv.classList.add('cWhite')


      // Fila de cabeceras: mostramos día/mes
      // +1 en month porque getMonth() es 0–11
      myDiv.innerHTML = `${day}/${month + 1} <br> ${dayNames[index]}`;
    } else {
        myDiv.classList.add('bcLightWhite2')
        myDiv.classList.add('fs12')
      // Resto de celdas: hora y atributos data
      myDiv.textContent = myHours[i];
      // Como dataset.date suele usarse en formato ISO o al menos yyyy-mm-dd
      myDiv.dataset.date = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      myDiv.dataset.hour = myHours[i];
    }

    myCalendar.appendChild(myDiv);
  });
}



console.log(week);




// console.log(getDayName())