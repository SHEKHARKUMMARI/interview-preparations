const submit = (e) => {
  e.preventdefult();
  console.log("form data", e);
};
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements);
});

const form = document.getElementById("form");
form.addEventListener("keyup", (e) => {
  if (e.target.dataset.case === "upper") {
    e.target.value = e.target.value.toUpperCase();
  }
});
