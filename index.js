var list = document.querySelector("#elements"); 
var elements = [];

list.addEventListener("click", (e) => {
    if (e.target.tagName=='SPAN') {
        const index = Number(e.target.id);  
        elements.splice(index, 1);
        render();
    }
});

function getNewElement() {
    const name = document.querySelector("#name").value;
    const content = document.querySelector("#content-input").value;
    document.querySelector("#name").value = '';
    document.querySelector("#content-input").value = '';
    return {
        name: name,
        content: content
    };
}

function addToDo() {
    const newElement = getNewElement();  
    if (newElement.name !== "" && newElement.content !== "") {
        elements.push(newElement);  
    }
    const todo = elements.map((current, index) => {
        return `<div class="elem">
                    <p>${current.name} : ${current.content}</p>
                    <span id="${index}" class="material-symbols-outlined center">delete</span>
                </div>`;
    });
    return todo;
}

function render() {
    const msg = addToDo(); 
    list.innerHTML = msg.join('');
}
