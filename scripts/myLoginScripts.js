const mybtLogin = document.getElementById('btLateralMenu')
const myLateralMenu = document.getElementById('side_menu1')
const myBtBackMenu = document.getElementById('btBackMenu')
mybtLogin.addEventListener('click', ()=>{
    myLateralMenu.classList.toggle('anim_menu1')
})

myBtBackMenu.addEventListener('click', ()=>{
        myLateralMenu.classList.toggle('anim_menu1')

})


