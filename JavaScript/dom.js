// document.writeIn("hello");

function result(){
        let inputData=document.getElementById("InputText").value;
         document.getElementById('text').innerHTML=inputData;

 // Valid age for vote casting...        
if(inputData>=18){
      alert("Valid Data");              
}   
else{
     alert("Not Valid Data");               
}    
      
// change color of heading on click
        let changeColor=document.getElementById('text');
        changeColor.style.color="red";

        let  bodyColor=document.getElementsByTagName('body')[0];
        bodyColor.style.backgroundColor="blue";          
}

// let para=document.getElementById("paratext");
// function changeColor(){
//       para.style.background="red";               
// }
// para.addEventListener('mouseover',changetextColor);