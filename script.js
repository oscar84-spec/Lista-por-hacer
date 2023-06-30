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
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
        const contenido = `<i class="fas fa-trash-alt trashIcon icon"></i>`
        // Colocar el texto en el div
        //nuevaTarea.innerHTML = contenido;
        nuevaTarea.appendChild(taskContent);

        list.appendChild(nuevaTarea);
    };
    btn.addEventListener("click", crearTarea);

    const checkComplete = () => {
        const i = document.createElement("i")
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (evento) => {
        const element = evento.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon")
        element.classList.toggle("far");
    }

    const removeTask = (evento) => {
        const remove = evento.target;
        remove.classList.add("far");
        remove.classList.remove("fas");
    }
})
    ();