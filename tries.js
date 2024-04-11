let container = document.getElementById("list-container");
function addTask() {
    let task = document.getElementById("input-box").value;
    if (task === "") {
        window.alert("you must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = task;
        container.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "&times";
        li.appendChild(cross);
    }
    task = "";
    saveData();
}   

container.addEventListener("click" , function(e){
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
})

function saveData() {
    localStorage.setItem("data", container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();