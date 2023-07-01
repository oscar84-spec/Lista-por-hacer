const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt","trashIcon","icon");

    i.addEventListener("click", deleteTask );
    return i;
}
const deleteTask = (evento) => {
    const elementPadre = evento.target.parentElement;
    // console.log(elementPadre);
    elementPadre.remove();
}
export default deleteIcon;