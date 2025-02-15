var list = document.getElementById("elements"); 
var elements = [];

list.addEventListener("click", (e) => {
    if (e.target.dataset) {
        const index = Number(e.target.dataset.index);  
        elements.splice(index, 1);
        render();
    }
});

function getNewElement() {
    const name = document.getElementById("name").value;
    const content = document.getElementById("content-input").value;
    document.getElementById("name").value = '';
    document.getElementById("content-input").value = '';
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
                    <span data-index="${index}" class="material-symbols-outlined center">delete</span>
                </div>`;
    });
    return todo;
}

function render() {
    const msg = addToDo(); 
    list.innerHTML = msg.join('');
}
