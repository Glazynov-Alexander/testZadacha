let form = document.querySelector(".Tasks");
let input = document.getElementById("inputText");
let submit = document.getElementById("Button");

let state = [];
let g = 1;


submit.addEventListener("click", () => {
  input.value === "555" ? (input.value = "---") : null;
  if (g % 2 === 0 && input.value !== "") {
    form.innerHTML += `<input key=${g} value=${input.value.toUpperCase()}>`;
    g++;
  } else if (g % 2 !== 0 && input.value !== "") {
    form.innerHTML += `<input key=${g} value=${input.value.toLowerCase()}>`;
    g++;
  }
});
