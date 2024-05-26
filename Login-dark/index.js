const toggelPass = document.querySelector("#toggelpass ");
const password = document.querySelector("#pass");

toggelPass.addEventListener("click", function () {
  toggelPass.classList.toggle("ri-eye-off-line");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});
