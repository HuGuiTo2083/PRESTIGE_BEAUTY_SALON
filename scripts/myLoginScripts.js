// 1. Seleccionamos los elementos
const mybtLogin     = document.getElementById('btLateralMenu');
const myLateralMenu = document.getElementById('side_menu1');
const myBtBackMenu  = document.getElementById('btBackMenu');
const btViewLogin   = document.getElementById('btViewLogin');

if (mybtLogin) {
  mybtLogin.addEventListener('click', () => {
    // Dentro de este callback conviene también comprobar myLateralMenu
    if (myLateralMenu) {
      myLateralMenu.classList.toggle('anim_menu1');
    }
  });
}

if (myBtBackMenu) {
  myBtBackMenu.addEventListener('click', () => {
    if (myLateralMenu) {
      myLateralMenu.classList.toggle('anim_menu1');
    }
  });
}

if (btViewLogin) {
  btViewLogin.addEventListener('click', () => {
    window.location.href = 'views/Login.html';
  });
}


//------------------LOGICA PARA EL MODULO DE LOGIN, LA ANTERIOR ES DE LA LANDING PAGE ----------------

const myLogin = document.getElementById('btLogin')

if(myLogin){
const myInputEmail = document.getElementById('inEmailLogin')
const myInputPassword = document.getElementById('inPasswordLogin')

myLogin.addEventListener('click', async ()=>{
    console.log('hola')
    const resp = await fetch('http://127.0.0.1:5000/login',{
       method: 'POST',
       headers: {'Content-Type': 'application/json'} ,
       body: JSON.stringify(
        {
            email: myInputEmail.value,
            password: myInputPassword.value
        })
    })

    const response = await resp.json()
    console.log(response)
})



const modalOverlay2= document.getElementById('modalOverlay2');
const closeBtn2 = document.getElementById('closeBtn2');

// Cerrar modal al hacer clic en la X
closeBtn2.addEventListener('click', () => {
  modalOverlay2.style.display = 'none';
});


// Cerrar modal al hacer clic fuera del modal (en el overlay)
modalOverlay2.addEventListener('click', (event) => {
  // Solo cerrar si el clic es en el overlay, no dentro del modal
  if (event.target === modalOverlay2) {
    modalOverlay2.style.display = 'none';
  }
});





}





