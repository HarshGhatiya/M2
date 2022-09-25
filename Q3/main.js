let a= document.getElementById('increment');
let r = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

a.addEventListener('click',() =>{

    integer +=1;
    int.innerHTML = integer;

})

r.addEventListener('click',() =>{
    if  (integer >=1)
    {
    integer -= 1
    int.innerHTML = integer;
    }
    
})