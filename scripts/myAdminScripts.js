const names = ['Teresa', 'Lucy-Rose', 'Amy', 'Marni', 'Hollie', 'Carly']
const photos = ['teresa', 'lucy-rose', 'amy', 'marni', 'holly', 'carly']
const jobs = ['Salon owner & Beautician', 'Beautician & Social Media', 'Acrylic & BIAB Nails', 'Nail Technician', 'Beautician & Social Media' , 'Beautician'  ]
const query = window.location.search;          

const params = new URLSearchParams(query);
const myId = params.get('myId');
const myType = params.get('myType');
// console.log('el id: ' + myType)
const current_name = names[myId - 1]
// console.log('el name es: ' + (myId-1))
const current_image = `../images/team_${photos[myId-1]}.jpg`
const current_job = jobs[myId-1]

const nameSpecialist = document.getElementById('nameSpecialist')
nameSpecialist.innerHTML = current_name

const myImgSpecialist  = document.getElementById('myImgSpecialist')
myImgSpecialist.src = current_image

const specialistJob = document.getElementById('specialistJob')
specialistJob.innerHTML = current_job


