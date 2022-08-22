const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];
for (const ingredient of ingredients) {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    console.log(element)

    elements.push(element);
}

console.log(elements)

document.querySelector("#ingredients").append(...elements);