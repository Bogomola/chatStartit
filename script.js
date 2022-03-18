//console.log(2)

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
    let zina=document.querySelector('.manaZina'); 
    let zinas=document.querySelector('.chataZinas');

    zinas.innerHTML=zinas.innerHTML+ '<br/>'+zina.value;


}
