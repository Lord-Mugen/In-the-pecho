const btnYes = document.querySelector('#yes');
const btnNo = document.querySelector('#no');

btnYes.addEventListener('click',function(){
    alert('Tomaste la decision correcta, seamos felices para siempre. Besitos en las nalgas <3. ');
})

btnNo.addEventListener('mouseover',function(){
    const x = parseInt(Math.random()*100);
    const y = parseInt(Math.random()*100);
    btnNo.style.setProperty('top',x+'%');
    btnNo.style.setProperty('left',y+'%');
    btnNo.style.setProperty('transform', `translate(-${x}%,-${y}&)`);
})