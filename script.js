function showPoem(response) {
  new Typewriter(".poem-place", {
    strings: response.data.answer,
    autoStart: true,
    cursor: ""
  });
}

function callAPI(prompt) {
  let apiKey = "70dfc7dao135cdc12280t4b9f7470760";
  let context =
    "I’m in the mood for a bit of creative expression. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure the poem is abaout the word I provided. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

function handleForm(event) {
  event.preventDefault();

  let searchInput = document.querySelector(".input");
  callAPI(searchInput.value);
}

let formHandler = document.querySelector(".form");
formHandler.addEventListener("submit", handleForm);
