// 1. Seleccionamos los elementos
const mybtLogin = document.getElementById('btLateralMenu');
const myLateralMenu = document.getElementById('side_menu1');
const myBtBackMenu = document.getElementById('btBackMenu');
const btViewLogin = document.getElementById('btViewLogin');
const ButtonsServices = document.querySelectorAll('.btSer')

if (ButtonsServices){
// 1) Toma la parte de la URL que va después de "?" (incluye el "?")
const query = window.location.search;          //  "?myId=1"

// 2) Crea un objeto para leer los parámetros
const params = new URLSearchParams(query);

if (params.has('myId')) {                     // o: params.get('myId') !== null
  const myIdNum = params.get('myId'); // ya seguro de que existe
  console.log('ID recibido:', myIdNum);
} else {
  console.log('No viene myId en la URL');
}            
}

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

if (myLogin) {
  const myInputEmail = document.getElementById('inEmailLogin')
  const myInputPassword = document.getElementById('inPasswordLogin')

  myLogin.addEventListener('click', async () => {
    console.log('hola')
    const resp = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          email: myInputEmail.value,
          password: myInputPassword.value
        })
    })

    const response = await resp.json()
    const myModal = document.getElementById('modalOverlay2')
    const myContainer = document.getElementById('containerLogin')
    if (response.status == 1) {
      //si es un usuario registrado
      //console.log('si')
      myContainer.innerHTML = ''
      const myImg = document.createElement('img')
      myImg.src = "../icons/Success.png"
      myImg.classList.add('myImg8')

      const label1 = document.createElement('label')
      label1.className = 'fs6 ff2 fw600 cWhite'
      label1.innerHTML = 'Login Successfully'

      const label2 = document.createElement('label')
      label2.className = 'fs6 ff1 ls3 fw300 cWhite'
      label2.innerHTML = `Welcome ${response.rows[0].usr_name}`

      myContainer.appendChild(myImg)
      myContainer.appendChild(label1)
      myContainer.appendChild(label2)
      myModal.style.display = 'grid'

      setTimeout(()=>{
        window.location.href=`../index.html?myId=${response.rows[0].usr_id}`
      }, 2000)

    }

    else if (response.status == 0) {
      myContainer.innerHTML = ''
      //  console.log('holas')
      const myImg = document.createElement('img')
      myImg.src = "../icons/Error.png"
      myImg.classList.add('myImg8')

      const label1 = document.createElement('label')
      label1.className = 'fs6 ff2 fw600 cWhite'
      label1.innerHTML = 'Error'


      const label2 = document.createElement('label')
      label2.className = 'fs6 ff1 ls3 fw300 cWhite'
      if (response.number == 1) {
        label2.innerHTML = `This email does not exist`
      }
      else {
        label2.innerHTML = `Password Incorrect`

      }


      myContainer.appendChild(myImg)
      myContainer.appendChild(label1)
      myContainer.appendChild(label2)


      myModal.style.display = 'grid'
    }
    console.log(response)
  })



  const modalOverlay2 = document.getElementById('modalOverlay2');
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





