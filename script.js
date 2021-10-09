var uid = new ShortUniqueId();
let colors=["pink","blue","green","black"];
let defaultColor="black";

let input=document.querySelector(".task_input");
let mainContainer=document.querySelector(".main-container"); 
input.addEventListener("keydown",function(e){
if(e.code=="Enter"&&input.value){
    let id=uid();
    createTask(id,input.value)
input.value="";
}
    
})
function createTask(id,task){
let taskContainer=document.createElement("div");
 taskContainer.setAttribute("class","task_container")
mainContainer.appendChild(taskContainer)
taskContainer.innerHTML=`<div class="task_header ${defaultColor}"></div>
<div class="task_main-container">
    <h3 class="task_id">#${id}</h3>
    <div class="text">${task}</div>
</div>`;

let taskHeader=taskContainer.querySelector(".task_header");
taskHeader.addEventListener("click",function(){
let cColor=taskHeader.classList[1];
let idx=colors.indexOf(cColor);
let nextIdx=(idx+1)%4;
let nextColor=colors[nextIdx];
taskHeader.classList.remove(cColor);
taskHeader.classList.add(nextColor);
})



}



