const deductBtn = document.getElementById("deduct");
const addBtn = document.getElementById("add");
const counter = document.getElementById("counter");
let count = 0;
deductBtn.addEventListener('click',function(){
    count-=1;
    counter.innerHTML = count;
    if(count < 0){ 
        counter.style.color = "red";
    }else if(count === 0){
        counter.style.color = "black";
    }
})

addBtn.addEventListener('click',function(){
    count+=1;
    counter.innerHTML= count;  
    if(count > 0){
        counter.style.color = "green";
    }else if(count === 0){
        counter.style.color = "black";
    }
}) 

 