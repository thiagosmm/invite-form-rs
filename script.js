function toggleStyle() {
  const buttonContainer = document.querySelector(".button-style"); 
  const styleSpan = document.querySelector(".container-style span");

  if (buttonContainer.id === "light") {
    buttonContainer.removeAttribute("id");
    styleSpan.textContent = "Escuro"
  } else {
    buttonContainer.id = "light"; 
    styleSpan.textContent = "Claro"
  }
}
