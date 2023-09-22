

const submitButton= document.getElementById("sum");
const webWorkerButton= document.getElementById("webworker")
const backgroundButton= document.getElementById("background");

submitButton.addEventListener("click", function (){
  let total=0;
  for(let i=0;i<10000000000;i++){
    total+=i;
  }
  alert("Sum is " + total);
})

backgroundButton.addEventListener("click",event=>{
  let bgColor= document.getElementById("body").style.backgroundColor;
    if(document.body.style.background === 'beige'){
        document.body.style.background='cyan'
    }
    else{
        document.body.style.background='beige'
    }
})

webWorkerButton.addEventListener("click",function (){
    const worker= new Worker('./worker.js');
    worker.postMessage("start");
    worker.onmessage=function (data){
     alert("Sum is "+data.data)
    }
})