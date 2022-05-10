const inputBox = document.getElementById("inputBox");
const addB = document.getElementById("addButton");
const toDoList = document.getElementById("List");



addB.addEventListener("click", function(){
    const list = document.createElement("li");
    list.innerText = inputBox.value;
    toDoList.appendChild(list);
    inputBox.value = "";

    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through";
    }
    )

    list.addEventListener("dblclick", function(){
        toDoList.removeChild(list);
    }
    )

}
)
