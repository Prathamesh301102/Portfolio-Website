function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let loginForm = document.getElementById("cta-form-id");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let Name = document.getElementById("full-name");
  let email = document.getElementById("email");
  let FoundWhere = document.getElementById("select-where");

  if (Name.value == "" || email.value == "" || FoundWhere.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${Name.value} and email of ${email.value}`
    );

    username.value = "";
    password.value = "";
  }
});
