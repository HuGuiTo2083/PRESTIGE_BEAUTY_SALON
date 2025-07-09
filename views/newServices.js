const myServicesCards = document.querySelectorAll('.service-card')
let MY_SERVICE_SELECTED = -1
let MY_SUBSERVICE_TYPE_SELECTED = -1
let MY_SUBSERVICE_SELECTED = -1

const myServicesArray = ["Eyelash Extension", "Eyebrows", "Facials", "Make Up", "Tanning",
    "Spray Tans", "Nails", "Hair Removal"]

const mySpecificServices = {
    "Eyelash Extension": ["LVL Lash Lift", "Semi-Permanent Eyelash Extensions"],

    "Eyebrows": ["Eyebrow Threading", "Brow Lamination and Tint", "HD Brows",
        "Brow Shape, Tint and Lash Tint", "Lash or Brow Tint", "Shape and Tint", "Eyebrow Shaping"],
    "Facials": ["Ear Candling", "Express Pick Me Up"],
    "Make Up": ["Ear Piercing", "Makeup"],
    "Tanning": ["Sunbed Tanning"],
    "Spray Tans": ["Spray Tan"],
    "Nails": ["Nail Art (french,chrome etc)", "Callus Peel", "Nail Repair",
        "Shellac Gel Polish- Toes", "BIAB on Natural Nails",
        "Acrylic Full set with Shellac colour", "Luxury Pedicure", "Infills-BIAB",
        "Shellac Gel Polish- Hands", "Soak Off Nails with tips"],
    "Hair Removal": ["Facial Threading", "Gents Waxing", "Ladies Waxing-Face",
        "Ladies Waxing- Arm and Underarm", "Ladies Waxing- Leg", "Ladies Waxing- Bikini",
        "Ladies Waxing- Brazilian", "Ladies Waxing- Hollywood"]

}

const myMinutes = {
    "LVL Lash Lift": "15",
    "Semi-Permanent Eyelash Extensions": "15 to 120",
    "Eyebrow Threading": "15",
    "Brow Lamination and Tint": "40",
    "HD Brows": "30",
    "Brow Shape, Tint and Lash Tint": "30",
    "Lash or Brow Tint": "15 to 20",
    "Shape and Tint": "15",
    "Eyebrow Shaping": "15",
    "Ear Candling": "30",
    "Express Pick Me Up": "35 to 60",
    "Ear Piercing": "15",
    "Makeup": "60",
    "Sunbed Tanning": "5 to 20",
    "Spray Tan": "15",
    "Nail Art (french,chrome etc)": "20",
    "Callus Peel": "30",
    "Nail Repair": "15",
    "Shellac Gel Polish- Toes": "30 to 35",
    "BIAB on Natural Nails": "75 to 85",
    "Acrylic Full set with Shellac colour": "75",
    "Luxury Pedicure": "45 to 75",
    "Infills-BIAB": "60",
    "Shellac Gel Polish- Hands": "30 to 35",
    "Soak Off Nails with tips": "30",
    "Facial Threading": "10 to 30",
    "Gents Waxing": "20 to 65",
    "Ladies Waxing-Face": "10 to 15",
    "Ladies Waxing- Arm and Underarm": "10 to 30",
    "Ladies Waxing- Leg": "20 to 30",
    "Ladies Waxing- Bikini": "15 to 20",
    "Ladies Waxing- Brazilian": "20",
    "Ladies Waxing- Hollywood": "20"
}


const myTypesServices = {
    "LVL Lash Lift": ["LVL Lash Lift"],
    "Semi-Permanent Eyelash Extensions": ["Eyelashes-Strip Lashes", "Semi-Permanent Eyelash Extensions-Infills", "Eyelash Extensions-Classic", "Eyelash Extensions-Hybrid", "Eyelash Extensions-Russian Volume", "Eyelash Extensions-Removal", "Eyelashes-Party Lashes"],
    "Eyebrow Threading": ["Eyebrow Threading", "Eyebrow Thread and Tint"],
    "Brow Lamination and Tint": ["Brow Lamination and Tint"],
    "HD Brows": ["HD Brows"],
    "Brow Shape, Tint and Lash Tint": ["Brow Shape, Tint and Lash Tint"],
    "Lash or Brow Tint": ["Eyelash Tint", "Eyebrow Tint"],
    "Shape and Tint": ["Shape and Tint"],
    "Eyebrow Shaping": ["Eyebrow Shaping"],
    "Ear Candling": ["Ear Candling"],
    "Express Pick Me Up": ["Express Pick Me Up", "Deep Luxury Cleanse", "Crystal Clear Microdermabrasion", "Dermaplaning"],
    "Ear Piercing": ["Ear Piercing"],
    "Makeup": ["Makeup"],
    "Sunbed Tanning": ["6 minutes", "3 minutes", "9 minutes", "12 minutes", "1 week Course", "1 month Course"],
    "Spray Tan": ["Spray Tan"],
    "Nail Art (french,chrome etc)": ["Nail Art (french,chrome etc)"],
    "Callus Peel": ["Callus Peel"],
    "Nail Repair": ["Nail Repair"],
    "Shellac Gel Polish- Toes": ["Shellac Gel Polish- Toes", "Shellac Gel Polish Remove and Renew-Toes"],
    "BIAB on Natural Nails": ["BIAB on Natural Nails", "BIAB Full set with Tips"],
    "Acrylic Full set with Shellac colour": ["Acrylic Full set with Shellac colour", "Acrylic Full set Ombre"],
    "Luxury Pedicure": ["Luxury Pedicure", "Luxury Pedicure with Shellac polish"],
    "Infills-BIAB": ["Infills-BIAB", "Infills-Acrylic"],
    "Shellac Gel Polish- Hands": ["Shellac Gel Polish- Hands", "Shellac Gel polish Remove and Renew-Hands"],
    "Soak Off Nails with tips": ["Soak Off Nails with tips", "Soak Off nails without tips"],
    "Facial Threading": ["Forehead", "Chin", "Upper Lip", "Lip and Chin", "Full Face"],
    "Gents Waxing": ["Eyebrows", "Back", "Chest", "Chest and Back", "Intimate Waxing"],
    "Ladies Waxing-Face": ["Chin", "Upper Lip", "Eyebrows", "Upper lip and Chin"],
    "Ladies Waxing- Arm and Underarm": ["Strip Wax", "Hot wax", "Half Arm", "Full Arm"],
    "Ladies Waxing- Leg": ["Half leg", "Full leg"],
    "Ladies Waxing- Bikini": ["Strip Wax", "Hot wax"],
    "Ladies Waxing- Brazilian": ["Strip Wax", "Hot wax"],
    "Ladies Waxing- Hollywood": ["Strip Wax", "Hot wax"]
}

const newServicesJson = {
    "LVL Lash Lift": ["60", "GBP 40"],
    "Eyelashes-Strip Lashes": ["15", "GBP 13"],
    "Semi-Permanent Eyelash Extensions-Infills": ["60", "GBP 35"],
    "Eyelash Extensions-Classic": ["90", "GBP 45"],
    "Eyelash Extensions-Hybrid": ["90", "GBP 50"],
    "Eyelash Extensions-Russian Volume": ["120", "GBP 60"],
    "Eyelash Extensions-Removal": ["20", "GBP 15"],
    "Eyelashes-Party Lashes": ["30", "GBP 25"],
    "Eyebrow Threading": ["15", "GBP 13"],
    "Eyebrow Thread and Tint": ["15", "GBP 18"],
    "Brow Lamination and Tint": ["40", "GBP 30"],
    "HD Brows": ["30", "GBP 28"],
    "Brow Shape, Tint and Lash Tint": ["30", "GBP 30"],
    "Eyelash Tint": ["20", "GBP 14"],
    "Eyebrow Tint": ["15", "GBP 10"],
    "Shape and Tint": ["15", "GBP 18"],
    "Eyebrow Shaping": ["15", "GBP 13"],
    "Ear Candling": ["30", "GBP 25"],
    "Express Pick Me Up": ["35", "GBP 30"],
    "Deep Luxury Cleanse": ["60", "GBP 40"],
    "Crystal Clear Microdermabrasion": ["60", "GBP 55"],
    "Dermaplaning": ["50", "GBP 45"],
    "Ear Piercing": ["15", "GBP 25"],
    "Makeup": ["60", "GBP 45"],
    "6 minutes": ["10", "GBP 4"],
    "3 minutes": ["5", "GBP 2"],
    "9 minutes": ["15", "GBP 6"],
    "12 minutes": ["20", "GBP 8"],
    "1 week Course": ["20", "GBP 15"],
    "1 month Course": ["20", "GBP 50"],
    "Spray Tan": ["15", "GBP 25"],
    "Nail Art (french,chrome etc)": ["20", "GBP 5"],
    "Callus Peel": ["30", "GBP 30"],
    "Nail Repair": ["15", "GBP 5"],
    "Shellac Gel Polish- Toes": ["30", "GBP 28"],
    "Shellac Gel Polish Remove and Renew-Toes": ["35", "GBP 30"],
    "BIAB on Natural Nails": ["75", "GBP 33"],
    "BIAB Full set with Tips": ["85", "GBP 39"],
    "Acrylic Full set with Shellac colour": ["75", "GBP 39"],
    "Acrylic Full set Ombre": ["75", "GBP 42"],
    "Luxury Pedicure": ["45", "GBP 35"],
    "Luxury Pedicure with Shellac polish": ["75", "GBP 45"],
    "Infills-BIAB": ["60", "GBP 33"],
    "Infills-Acrylic": ["60", "GBP 33"],
    "Shellac Gel Polish- Hands": ["30", "GBP 28"],
    "Shellac Gel polish Remove and Renew-Hands": ["35", "GBP 30"],
    "Soak Off Nails with tips": ["30", "GBP 20"],
    "Soak Off nails without tips": ["30", "GBP 15"],
    "Forehead": ["10", "GBP 9"],
    "Chin": ["10", "GBP 9"],
    "Upper Lip": ["10", "GBP 9"],
    "Lip and Chin": ["15", "GBP 14"],
    "Full Face": ["30", "GBP 17"],
    "Eyebrows Gents Waxing": ["20", "GBP 13"],
    "Eyebrows Ladies Waxing-Face": ["10", "GBP 13"],
    "Back": ["20", "GBP 30"],
    "Chest": ["20", "GBP 30"],
    "Chest and Back": ["45", "GBP 40"],
    "Intimate Waxing": ["65", "GBP 60"],
    "Upper lip and Chin": ["15", "GBP 14"],
    "Strip Wax Ladies Waxing- Arm and Underarm": ["10", "GBP 12"],
    "Hot wax Ladies Waxing- Arm and Underarm": ["15", "GBP 14"],
    "Strip Wax Ladies Waxing- Bikini": ["15", "GBP 25"],
    "Hot wax Ladies Waxing- Bikini": ["20", "GBP 28"],
    "Strip Wax Ladies Waxing- Brazilian": ["20", "GBP 30"],
    "Hot wax Ladies Waxing- Brazilian": ["20", "GBP 36"],
    "Strip Wax Ladies Waxing- Hollywood": ["20", "GBP 30"],
    "Hot wax Ladies Waxing- Hollywood": ["20", "GBP 36"],
    "Half Arm": ["15", "GBP 22"],
    "Full Arm": ["30", "GBP 32"],
    "Half leg": ["20", "GBP 22"],
    "Full leg": ["30", "GBP 32"]
}

const myException = ["Strip Wax", "Hot wax", "Eyebrows"]



myServicesCards.forEach(el => {
    el.addEventListener('click', () => {
        MY_SERVICE_SELECTED = el.getAttribute('data-service')
        //console.log(MY_SERVICE_SELECTED + " y el servicio es: " + myServicesArray[MY_SERVICE_SELECTED])
        el.classList.add('selected-service')
        const serviceName = myServicesArray[MY_SERVICE_SELECTED]
        const mySpecificService = mySpecificServices[serviceName]
        createOption(mySpecificService, MY_SERVICE_SELECTED)
        //console.log(serviceName)
        //console.log(mySpecificServices[serviceName])
        // mySpecificServices.serviceName.forEach((el2)=>{
        //     console.log(el2)
        // })
        myServicesCards.forEach(e => {
            if (e != el) { e.classList.remove('selected-service') }
        })
    })
})

const myArtistJSON = {
    "LVL Lash Lift": [1, 0, 2],
    "Eyelashes-Strip Lashes": [5, 2],
    "Semi-Permanent Eyelash Extensions-Infills": [5, 2],
    "Eyelash Extensions-Classic": [5, 2],
    "Eyelash Extensions-Hybrid": [5, 2],
    "Eyelash Extensions-Russian Volume": [5, 2],
    "Eyelash Extensions-Removal": [5, 2],
    "Eyelashes-Party Lashes": [5, 2],
    "Eyebrow Threading": [2],
    "Eyebrow Thread and Tint": [2],
    "Brow Lamination and Tint": [1, 0],
    "HD Brows": [1, 0],
    "Brow Shape, Tint and Lash Tint": [1, 0, 5, 2],
    "Eyelash Tint": [1, 0, 5, 2],
    "Eyebrow Tint": [1, 0, 5, 2],
    "Shape and Tint": [1, 0, 5, 2],
    "Eyebrow Shaping": [1, 0, 5, 2],
    "Ear Candling": [0, 2],
    "Express Pick Me Up": [0, 2],
    "Deep Luxury Cleanse": [0, 2],
    "Crystal Clear Microdermabrasion": [0, 2],
    "Dermaplaning": [0, 2],
    "Ear Piercing": [0],
    "Makeup": [5],
    "6 minutes": [0, 5, 2, 4],
    "3 minutes": [0, 5, 2, 4],
    "9 minutes": [0, 5, 2, 4],
    "12 minutes": [0, 5, 2, 4],
    "1 week Course": [0, 5, 2, 4],
    "1 month Course": [0, 5, 2, 4],
    "Spray Tan": [1, 0, 2],
    "Nail Art (french,chrome etc)": [1, 5, 2, 4],
    "Callus Peel": [1, 5, 2, 4],
    "Nail Repair": [1, 5, 2, 4],
    "Shellac Gel Polish- Toes": [1, 0, 5, 2, 4],
    "Shellac Gel Polish Remove and Renew-Toes": [1, 0, 5, 2, 4],
    "BIAB on Natural Nails": [1, 5, 2, 4],
    "BIAB Full set with Tips": [1, 5, 2, 4],
    "Acrylic Full set with Shellac colour": [1, 5, 2, 4],
    "Acrylic Full set Ombre": [1, 5, 2, 4],
    "Luxury Pedicure": [1, 0, 5, 2, 4],
    "Luxury Pedicure with Shellac polish": [1, 0, 5, 2, 4],
    "Infills-BIAB": [1, 5, 2, 4],
    "Infills-Acrylic": [1, 5, 2, 4],
    "Shellac Gel Polish- Hands": [1, 0, 5, 2, 4],
    "Shellac Gel polish Remove and Renew-Hands": [1, 0, 5, 2, 4],
    "Soak Off Nails with tips": [5, 2, 4],
    "Soak Off nails without tips": [5, 2, 4],
    "Forehead": [0, 2],
    "Chin": [0, 2],
    "Upper Lip": [0, 2],
    "Lip and Chin": [0, 2],
    "Full Face": [0, 2],
    "Eyebrows Gents Waxing": [0, 2],
    "Eyebrows Ladies Waxing-Face": [1, 0, 5, 2],
    "Back": [0, 2],
    "Chest": [0, 2],
    "Chest and Back": [0, 2],
    "Intimate Waxing": [0, 2],
    "Upper lip and Chin": [1, 0, 5, 2],
    "Strip Wax Ladies Waxing- Arm and Underarm": [1, 0, 5, 2],
    "Hot wax Ladies Waxing- Arm and Underarm": [1, 0, 5, 2],
    "Strip Wax Ladies Waxing- Bikini": [0, 5, 2],
    "Hot wax Ladies Waxing- Bikini": [0, 5, 2],
    "Strip Wax Ladies Waxing- Brazilian": [0, 2],
    "Hot wax Ladies Waxing- Brazilian": [0, 2],
    "Strip Wax Ladies Waxing- Hollywood": [0, 2],
    "Hot wax Ladies Waxing- Hollywood": [0, 2],
    "Half Arm": [1, 0, 5, 2],
    "Full Arm": [1, 0, 5, 2],
    "Half leg": [0, 5, 2],
    "Full leg": [0, 5, 2]
}


function createOption(myServices, myServiceIndex) {
    const myContainer = document.getElementById('myContainerSpecificServices')
    let myString = ''

    myServices.forEach((el, index) => {
        let myFontSize = 'fs2'
        if( el.length > 30 && window.innerWidth<=600){
                myFontSize = 'fs17'
        }
        //console.log("lenght del subservice: " + el + " es: " + el.length)
        myString += `
        <div class="cPointer hoverLight fShrink0 bcFirst w98 h70px br1 ff1 ${myFontSize} cSecond dFlex jcCenter aiCenter" 
        onclick="openModalService('${el}', '${index}')" data-subservice="${index}">
                ${el} - &nbsp; <span class="cWhite fs4 ">${myMinutes[el]} min</span>
        </div>`

        console.log(el)
    })
    myContainer.innerHTML = myString
    //console.log(myServices)
}

function openModalService(SubService, index) {
    const ContainerSpecialists = document.getElementById('ContainerSpecialists')
    ContainerSpecialists.innerHTML = ''
    const containerSubservice = document.getElementById('containerSubservice')
    const menuTypes = document.getElementById('menuTypes')
    let myHTML = ''
    console.log("el index del subservice: " + index)
    console.log(myTypesServices[SubService])

    myTypesServices[SubService].forEach((el) => {
        let myService_Detail = ''
        let myString
        if (myException.includes(el)) {
            myString = `${el} ${SubService}`
           
            myService_Detail = newServicesJson[myString]
        }
        else {
            myString = el
            myService_Detail = newServicesJson[el]
        }

        console.log('El string es: ' + myString)
        myHTML += `
        <div class="fShrink0 w200px h90 br10px bcFirst dGrid gtc_1 gtr_1_1_0-5 bsBorderBox pl5 pr5 cPointer hoverLight type-service"
         onclick="generateImagesArtists('${myString}')">

                    <div class="w100 h100 dFlex aiCenter jcCenter fs10 ff2 fw600 cWhite">
                        ${el}
                    </div>

                    <div class="w100 h100 dFlex aiEnd bsBorderBox pb10 jcCenter fs11 ff2 fw700 cWhite">
                        ${myService_Detail[0]} min
                    </div>

                    <div class="w100  h100 dFlex aiCenter jcCenter fs11 ff2 fw300 cWhite bsBorderBox pb10">
                    ${myService_Detail[1]}
                    </div>

                </div>`
    })

    let myHTML2 = `
            <div class="bcFourth bNone wAuto h85 dFlex aiCenter jcCenter ff2 cWhite fw600 fs10 pl10 pr10 br10px">
            ${SubService}</div>
`
    containerSubservice.innerHTML = myHTML2
    menuTypes.innerHTML = myHTML
    myModalOverview.style.display = 'flex'
    Selected_Logic()
}

const myMembersJob = ['Salon owner & Beautician', 'Beautician & Social Media', 'Beautician', 'Beautician & Social Media', 'Nail Technician', 'Acrylic & BIAB Nails']
const myMembersNames = ['Teresa', 'Lucy-Rose', 'Carly', 'Hollie', 'Marni', 'Amy']
const myMembersImgs = ['team_teresa.jpg', 'team_lucy-rose.jpg', 'team_carly.jpg', 'team_holly.jpg', 'team_marni.jpg', 'team_amy.jpg']

function generateImagesArtists(subservice_type) {
    let arrayImages = myArtistJSON[subservice_type]
   console.log("el array recibido es: " + arrayImages)
    let myHTML = ''
    const ContainerSpecialists = document.getElementById('ContainerSpecialists')
    arrayImages.forEach((el, index) => {
        myHTML += `
    <div class="fShrink0 wAuto h100 dFlex fdColumn gap10 aiCenter jcStart">
         <img src="../images/${myMembersImgs[el]}" class="myImg2 br50per b5_solid_first  changeGlowEffect cPointer" id="Img_Specialist_${index}">
         <label class="ff1 cBlack fs15">${myMembersNames[el]}</label>
         <label class="ff2 cFirst fs11 dwImg_Specialist_${index}">${myMembersJob[el]}</label>
     </div>`
    })

    ContainerSpecialists.innerHTML = myHTML
    dynamicWidth()
}


function Selected_Logic() {
    const myTypes = document.querySelectorAll('.type-service')

    myTypes.forEach(el => {
        el.addEventListener('click', () => {
            // MY_SUBSERVICE_SELECTED = el.getAttribute('data-subservice')
            //console.log(MY_SUBSERVICE_SELECTED )
            el.classList.add('selected-service')

            myTypes.forEach(e => {
                if (e != el) { e.classList.remove('selected-service') }
            })
        })
    })

}


// --------------------LOGICA PARA CERRAR EL MODAL-------------

const myModalOverview = document.getElementById('myModalArtist')
const myMainModal = document.getElementById('myMainModal')
const myBtnCloseModalS = document.getElementById('myBtnCloseModalS')
myBtnCloseModalS.addEventListener('click', () => {
    myModalOverview.style.display = 'none'
}
)

document.body.addEventListener('click', (el) => {
    //console.log('hola')
    if (el.target !== myMainModal && getComputedStyle(myModalOverview).display === "none") {
        myModalOverview.style.display = 'none'

    }
})