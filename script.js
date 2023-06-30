const btn = document.querySelector("[data-form-btn]");
console.log(btn)

const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]"); //seleccionando lo que el usuario escribio en el input
    const value = input.value; // Capturando el valor del input
    const list = document.querySelector("[data-list]");
    const nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add("card");
    input.value = "";
    const contenido = 
    `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>` // Colocar el texto en el div
    nuevaTarea.innerHTML = contenido; 

    list.appendChild(nuevaTarea);
    console.log(contenido);
};
btn.addEventListener("click", crearTarea);