import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";

(() => {
    const btn = document.querySelector("[data-form-btn]");

    const crearTarea = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]"); //seleccionando lo que el usuario escribio en el input
        const value = input.value; // Capturando el valor del input
        const list = document.querySelector("[data-list]");
        const nuevaTarea = document.createElement('li');
        nuevaTarea.classList.add("card");
        input.value = "";

        const taskContent = document.createElement("div")
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        // taskContent.appendChild(deleteIcon());
        // Colocar el texto en el div
        //nuevaTarea.innerHTML = contenido;
        nuevaTarea.appendChild(taskContent);
        nuevaTarea.appendChild(deleteIcon()); 
        list.appendChild(nuevaTarea);
    };
    btn.addEventListener("click", crearTarea);
})();