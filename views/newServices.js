const myServicesCards = document.querySelectorAll('.service-card')
let MY_SERVICE_SELECTED = -1

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


myServicesCards.forEach(el => {
    el.addEventListener('click', () => {
        MY_SERVICE_SELECTED = el.getAttribute('data-service')
        //console.log(MY_SERVICE_SELECTED + " y el servicio es: " + myServicesArray[MY_SERVICE_SELECTED])
        el.classList.add('selected-service')
        const serviceName = myServicesArray[MY_SERVICE_SELECTED]
        const mySpecificService = mySpecificServices[serviceName]
        createOption(mySpecificService)
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

function createOption(myServices){
    console.log(myServices)
}