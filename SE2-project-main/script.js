// function test(){
//       //  if((myform.ps.value)!=myform.pss.value){
//       //    alert("error!! ,you must enter the same password.");
//       //    return false;
//       // }
//    if(myform.ps.value.length<8)
//    {
//       alert("password must be greater than 8 ");
//       return false;
//    }

// }



const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
   bar.addEventListener('click',()=>{
      nav.classList.add('active');
   })
}

if(close){
   close.addEventListener('click',()=>{
      nav.classList.remove('active');
   })
}




