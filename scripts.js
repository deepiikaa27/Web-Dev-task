let modal = document.querySelector(".mobile-modal");
let closebtn = document.querySelector(".close-btn");
let openbtn = document.querySelector(".open-btn");
let login = document.getElementById("login");
let loginspan = document.getElementById("login-span");
let input1 = document.getElementById("disable");
let title = document.getElementById("title");
let formbtn = document.getElementById("form-btn");
let mobiletitle = document.getElementById("mobile-title");
let mobilebtn = document.getElementById("mobile-btn");
let mobileinput = document.getElementById("mobile-input");
let mobiletoggle = document.getElementById("mobile-toggle");
let forgot = document.getElementById("forgot");
let forgotmob = document.getElementById("forgot-mob");
let signquotes = document.getElementById("sign-quotes");

function openModal() {
  modal.classList.remove("hide");
}
function closeModal(e) {
  modal.classList.add("hide");
}
window.onclick = function (e) {
  if (e.target == modal) {
    modal.classList.add("hide");
  }
};
let testBool = false;

function toggle() {
  testBool = !testBool;
  if (testBool) {
    input1.style.display = "none";
    title.innerHTML = "Sign in";
    formbtn.innerHTML = "Sign In";
    login.innerHTML = "Don’t have an account yet? ";
    loginspan.innerHTML = "Create new for free!";
    forgot.classList.remove("hide");
    signquotes.style.display = "none";
  } else {
    input1.style.display = "flex";
    title.innerHTML = "Create Account";
    formbtn.innerHTML = "Create Account";
    login.innerHTML = "Already have an account?";
    loginspan.innerHTML = "Sign In";
    forgot.classList.add("hide");
    signquotes.style.display = "block";
  }
}
function mobiletogglefun() {
  testBool = !testBool;
  if (testBool) {
    mobileinput.style.display = "none";
    mobiletitle.innerHTML = "Sign In";
    mobilebtn.innerHTML = "Sign In";
    forgotmob.innerHTML = "Forgot Password?";
    mobiletoggle.innerHTML = "or,Create Account";
  } else {
    mobileinput.style.display = "flex";
    mobiletitle.innerHTML = "Create Account";
    mobilebtn.innerHTML = "Create Account";
    forgotmob.innerHTML =
      "By signing up, you agree to our Terms & conditions, Privacy policy";
    mobiletoggle.innerHTML = "or, Sign In";
  }
}

loginspan.addEventListener("click", toggle);
closebtn.addEventListener("click", closeModal);
openbtn.addEventListener("click", openModal);
mobiletoggle.addEventListener("click", mobiletogglefun);
