var notify = document.querySelector("#notify");

notify.addEventListener("click", () => {
  var email = document.querySelector("#email");
  var error = document.querySelector("#error");

  if (email.value === "") {
    email.style.border = "2px solid hsl(354, 100%, 66%)";
    error.textContent = "Whoops! It looks like you forgot to add your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.style.border = "2px solid hsl(354, 100%, 66%)";
    error.textContent = "Please provide a valid email address";
  } else {
    email.style.border = "";
    error.textContent = "";
  }
});
