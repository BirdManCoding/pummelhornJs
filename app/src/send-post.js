import "./scss/style.scss";
import { v4 as uuidv4 } from "uuid";
import { getUnicorns } from "./scripts/getUnicorns";
import { getDadJoke, postDadJoke } from "./scripts/DadJoke";

const submitBtn = document.querySelector(".submit");
const dadJokeBtn = document.querySelector(".dad-joke-btn");
const dadJoke = document.querySelector(".dad-joke");
const select = document.querySelector(".form-select");

async function renderDadJoke(e) {
  e.preventDefault();
  const { attachments } = await getDadJoke();
  const joke = attachments[0].text;
  dadJoke.innerText = joke;
}

async function formHandler(e) {
  e.preventDefault();
  const unicornId = select.value;
  const joke = dadJoke.innerText;
  if (!unicornId || joke === "Here comes the Dad Joke....") {
    return alert("make a Dad Joke twerp");
  }
  const response = await postDadJoke({
    id: uuidv4(),
    quote: joke,
    unicornId: unicornId,
  });
  var newUrl = "http://localhost:9000/index.html";
  window.location.replace(newUrl);
}

(async function renderSelectOptions() {
  const unicorns = await getUnicorns();

  unicorns.forEach(unicorn => {
    const option = document.createElement("option");
    option.value = `${unicorn.id}`;
    option.innerText = `${unicorn.name}`;
    select.appendChild(option);
  });
})();

dadJokeBtn.addEventListener("click", e => renderDadJoke(e));
submitBtn.addEventListener("click", e => formHandler(e));
