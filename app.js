console.log("HI!");
const form = document.querySelector("form"); //finds the form on the html page

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
});
