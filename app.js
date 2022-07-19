let menu = document.getElementById('menu');
let navbar2 = document.querySelector('.navbar2')
let removeBtn = document.querySelector('.removeBtn')



menu.addEventListener('click', ()=>{
   navbar2.style.display = 'block';
   menu.style.display = 'block'
})

removeBtn.addEventListener('click', ()=>{
    navbar2.style.display = 'none'
})




