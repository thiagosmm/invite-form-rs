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

function toggleType() {
  const presencial = document.querySelector("#presencial");
  const online = document.querySelector("#online");

  const presencialImg = presencial.querySelector("img");
  const onlineImg = online.querySelector("img");

  if (presencial.classList.contains("selected")) {
    presencial.classList.remove("selected");
    presencialImg.src = "/assets/icons/building.png";
    online.classList.add("selected");
    onlineImg.src = "/assets/icons/video-selected.png";
  } else {
    presencial.classList.add("selected");
    presencialImg.src = "/assets/icons/building-selected.png";
    online.classList.remove("selected");
    onlineImg.src = "/assets/icons/video.png"; 
  }
}
