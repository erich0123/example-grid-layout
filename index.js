const $ = document.querySelector.bind(document);

const grid = $(".grid-container");

function renderTemplate(selector, data) {
  const template = $(selector);
  const clone = template.content.cloneNode(true);
  const element = clone.firstElementChild;

  for (let [selector, value] of Object.entries(data))
    element.querySelector(selector).textContent = value;

  return element;
}

for (let i = 0; i < 5; i++) {
  const data = { ".grid-text": `Item ${i}` };
  // const data = { ".grid-text": texts[i] };
  const gridItem = renderTemplate("#grid-item", data);
  grid.appendChild(gridItem);
}
