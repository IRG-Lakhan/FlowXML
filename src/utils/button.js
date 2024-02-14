export function getButton(container, btn, clickHandler) {
    container.appendChild(btn);
    btn.addEventListener("click", clickHandler)
    return container;
}