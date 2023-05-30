console.log("Loaded");

let page;

const page_top=document.getElementById("page_top");
const page_quiz=document.getElementById("page_quiz");
const top_start=document.getElementById("top_start");


top_start.addEventListener("click",e=>{
   //start();
   page_top.style.display="none";
   page_quiz.style.display="flex";
});
