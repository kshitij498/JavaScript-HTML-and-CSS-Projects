const task = document.querySelector(".search input");
const li_container=document.querySelector("#list-container");


function addTask(){
    if(task.value==='')
    {
        alert("write the task")
    }
    else{
        console.log(task.value)
        let li=document.createElement("li");
        li.innerHTML=task.value;
        li_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    task.value="";
    saveData()
}

li_container.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data", li_container.innerHTML)
}

function viewData(){
    li_container.innerHTML=localStorage.getItem("data");
}

viewData();