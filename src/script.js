function changeColor() {
  let body = document.querySelector("body");
  if (body.classList.contains("oscuro")) {
    body.classList.remove("oscuro");
  } else {
    body.classList.add("oscuro");
  }
}
let themeButton = document.querySelector(".dark");
themeButton.addEventListener("click", changeColor);

function personalData() {
  let name = prompt`Hello!👋 What is your name?`;
  let location = prompt`Around which city are you looking for trails🚶🏾‍♀️?`;
  let email = prompt`What is your email address?`;
  alert(
    `Thank you ${name}! You will receive an email shortly with more information about hiking trails near you.`
  );
}
let information = document.querySelector(".hikingTrails");
information.addEventListener("click", personalData);
