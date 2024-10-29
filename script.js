const succPanel = document.getElementById("form-success-panel");
const form = document.getElementById("form");
const formEmail = document.getElementById("email");
const emailErrorLabel = document.getElementById("emailerror");
const succText = document.getElementById("succText");
const dismissButton = document.getElementById("dismiss");
const hidingPanel = document.getElementById("hiding");


function togglePanel(email) {
  succText.innerHTML = succText.innerHTML.replace(
    "ash@loremcompany.com",
    email
  );
  succPanel.classList.toggle("displayFlex");
  succPanel.classList.toggle("displayNone");
  hidingPanel.classList.toggle("displayFlex");
  
}

function checkEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function setEmailError() {
  formEmail.classList.add("error");
  emailErrorLabel.classList.add("error");
}

const handleSubmit = (e) => {
  e.preventDefault(e);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (checkEmail(data["email"])) {
    togglePanel(data["email"]);
  } else {
    setEmailError();
  }

};

form.addEventListener("submit", handleSubmit);
dismissButton.addEventListener("click", togglePanel);
