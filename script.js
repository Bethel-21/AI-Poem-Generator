
function handleForm(event){
    event.preventDefault();
    
    new Typewriter(".poem-place", {
      strings: "East to west, home is the best",
      autoStart: true,
      cursor: ""
    });
}

let formHandler = document.querySelector(".form");
formHandler.addEventListener("submit", handleForm);