const query = window.location.search;          

// 2) Crea un objeto para leer los parámetros
const params = new URLSearchParams(query);
const mySideMenu = document.getElementById('mySideMenu')
if (params.has('myType')) {                    
  const myId = params.get('myId');
  const myType = params.get('myType');
  if(myType==2){
    const myDiv = document.createElement('div')
    myDiv.className = 'w90 h7vh br1 bcFirst cSecond dFlex aiCenter jcCenter fw900 ff1 fs4 cPointer hoverLight trans0-5'
    myDiv.id='btAdminModule'
    myDiv.innerHTML = 'Admin'
    mySideMenu.appendChild(myDiv)
  }

  const btAdminModule = document.getElementById('btAdminModule')

if(btAdminModule){
  btAdminModule.addEventListener('click', ()=>{
    window.location.href = `views/Admin.html?myId=${myId}&myType=${myType}`
  })
}

} 

const btTraining = document.getElementById('btTraining')
btTraining.addEventListener('click', ()=>{
  window.location.href='https://www.beautyguild.com/Training/'
})





