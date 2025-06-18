const names = ['Teresa', 'Lucy-Rose', 'Amy', 'Marni', 'Hollie', 'Carly']
const photos = ['teresa', 'lucy-rose', 'amy', 'marni', 'holly', 'carly']
const jobs = ['Salon owner & Beautician', 'Beautician & Social Media', 'Acrylic & BIAB Nails', 'Nail Technician', 'Beautician & Social Media', 'Beautician']
const query = window.location.search;

const params = new URLSearchParams(query);
const myId = params.get('myId');
const myType = params.get('myType');
// console.log('el id: ' + myType)
const current_name = names[myId - 1]
// console.log('el name es: ' + (myId-1))
const current_image = `../images/team_${photos[myId - 1]}.jpg`
const current_job = jobs[myId - 1]

const nameSpecialist = document.getElementById('nameSpecialist')
nameSpecialist.innerHTML = current_name

const myImgSpecialist = document.getElementById('myImgSpecialist')
myImgSpecialist.src = current_image

const specialistJob = document.getElementById('specialistJob')
specialistJob.innerHTML = current_job

const nameMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function myRequests() {
    const response = await fetch('http://127.0.0.1:5000/getRequests', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: myId
        })
    });

    const resp = await response.json()
    const myContainerRequests = document.getElementById('myScrollRequests')
    //console.log('pedidos: ' , resp)
    resp.forEach(el => {
        const hour = el.hour
        const status = el.status
        const service = el.service
        const date = el.date
        const name = el.name
         const id = el.id
        const parts = date.split('-');
        const month = parseInt(parts[1]);  // 5 (no 05)
        const day = parseInt(parts[2]);  // 11
        const nameMonth = nameMonths[month-1]
        console.log("status: " + status);
        const myRequests = document.createElement('div')
        let myExtraClass  = ""
        if (status != "BS"){
          if(status=="REJ"){
            myExtraClass = "Rechazada"
          }
          else if(status=="ACC"){
            myExtraClass= "Aceptada"
          }
        }
        myRequests.className = `w100 h10vh bcFirst br10px fShrink0 dGrid aiCenter gtr_1 gtc_1_3_2 oHidden gap10 pedidoResp ${myExtraClass}`
        myRequests.id =`myRequest_${id}`
        myRequests.innerHTML = `
     <!-- ----PARTE DONDE ESTÁ LA HORA--- -->
      <div class="w100 h100  dFlex jcCenter aiCenter">
        <div class="w80 h70 br5px bcThird dFlex aiCenter jcCenter ff2 fw500 cFirst fs15 divHour bsBorderBox p10">
        ${day}/${nameMonth} &nbsp; 9:00</div>
      </div>
      <!-- -----------PARTE DONDE DICE QUE SERVICIO SOLICITÓ LA PERSONA------- -->

      <div class="w100 h100 dFlex  jcCenter aiCenter ff2 fw500 cWhite fs15 ">
        ${name} 
        Requested the &nbsp;
         <span class="ff1 wAuto h50 bcThird br1 dFlex jcCenter aiCenter bsBoderBox pl10 pr10 cFirst">${service}</span> &nbsp; Service
    </div>

       <!-- -----------BOTONES  DE CONFIRMACION O RECHAZO (PENDIEMTE DE AGREGAR ONCLICK)--------- -->

      <div class="w100 h100  dGrid gtr_1 gtc_1_1 pedidoResp2 aiCenter ">
        <!-- -------- -->
        <div class="w100 h100 dFlex aiCenter jcCenter divResp3">
            <button onclick="myAccept(${id}, 'myRequest_${id}')"
             class="w40 h70 br10px bNone bcSecond dFlex aiCenter jcCenter cPointer trans0-5 hoverSecond">
                    <img src="../icons/Accept_2.png" class="myImg10 pRelative zIndex1">
            </button>
        </div>
        <!-- --------- -->
        <div class="w100 h100 dFlex aiCenter jcCenter divResp3">
            <button onclick="myReject(${id}, 'myRequest_${id}')"
            class="w40 h70 br10px bNone bcSecond dFlex aiCenter jcCenter cPointer trans0-5 hoverSecond">
                <img src="../icons/X_2.png" class="myImg10">
            </button>
        </div>
       <!-- ------------ -->
      </div>
<!-- --------------------- -->
    `;

    myContainerRequests.appendChild(myRequests)

    });

}

function myReject(id, idContainer){
    const conteainer = document.getElementById(idContainer)
    conteainer.classList.add('Rechazada')
 console.log('id recibudo: ' + idContainer)
}


function myAccept(id, idContainer){
    const conteainer = document.getElementById(idContainer)
    conteainer.classList.add('Aceptada')
 console.log('Aceptada')
}

myRequests()


