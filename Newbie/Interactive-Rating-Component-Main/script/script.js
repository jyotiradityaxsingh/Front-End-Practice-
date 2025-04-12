const submitBtn = document.querySelector(".submit");
const card = document.querySelector(".card");

const allStarBtn = document.querySelector(".star-btn");
let currentValue = 0;

const createElement = (tag, content = "", style = {}) => {
  const element = document.createElement(tag);
  element.innerText = content;
  Object.assign(element.style, style);
  return element;
};

const image = createElement("img", "", { marginTop: "10px" });
image.src = ''

// On Click For The Submit Button
submitBtn.onclick = () => {
  document.querySelector(".card-container").remove();
};
