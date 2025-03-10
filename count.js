let h1 = document.getElementById("countChild");
let btn = document.getElementById("clickBtn");
let btn2= document.getElementById("clickBtnMinus");
let count = 0;


btn.addEventListener('click',()=>{
    count ++;
    countChild.innerHTML=`<h1>COUNT:${count}</h1>`;

})

btn2.addEventListener('click',()=>{
    count--;
    countChild.innerHTML=`<h1>COUNT: ${count}</h1>`;

})