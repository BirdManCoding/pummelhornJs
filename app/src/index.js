import "./scss/style.scss";
import { getUnicorns, getUnicornById } from "./scripts/getUnicorns";
import { getOverlay, removeOverlay } from "./scripts/getOverlay";

const container = document.getElementById("unicorn-card-wrapper");

async function renderModal(unicornId) {
  const template = document.getElementById("popup-modal");
  const clone = template.content.cloneNode(true);
  const img = clone.querySelector("img");
  const heading = clone.querySelector("h5");
  const content = clone.querySelector(".card-text");
  const dadJokeWrapper = clone.querySelector(".dad-jokes");

  const unicorn = await getUnicornById(unicornId);
  img.src = unicorn.imgUrl;
  heading.innerText = unicorn.name;
  content.innerText = unicorn.content;

  unicorn.quotes.forEach(elem => {
    const quote = document.createElement("div");
    quote.innerHTML = `<div class="card">
                        <div class="card-header">
                          Quote
                        </div>
                        <div class="card-body">
                          <blockquote class="blockquote mb-0">
                            <p>${elem.quote}</p>
                            <footer class="blockquote-footer"><cite title="Source Title">${unicorn.name}</cite></footer>
                          </blockquote>
                        </div>
                      </div>`;
    dadJokeWrapper.appendChild(quote);
  });

  const { closebtn, overlay } = getOverlay();
  closebtn.addEventListener("click", () => removeOverlay());

  document.body.append(closebtn);
  document.body.append(overlay);
  document.body.append(clone);
}

(async function renderUnicorns() {
  const template = document.getElementById("unicorn-card-template");
  const unicorns = await getUnicorns();

  unicorns.forEach(unicorn => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector("img");
    const heading = clone.querySelector("h5");
    const content = clone.querySelector(".card-text");
    const btn = clone.querySelector("button");

    btn.addEventListener("click", e => renderModal(unicorn.id));
    const trimmedContent = unicorn.content.substring(0, 150);

    img.src = unicorn.imgUrl;
    heading.innerText = unicorn.name;
    content.innerText = `${trimmedContent} ...`;
    container.append(clone);
  });
})();
