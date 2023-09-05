const redPill = document.querySelector(".takeAPill__btn--red");
const bluePill = document.querySelector(".takeAPill__btn--blue");

redPill.addEventListener("click", () => {
    alert("Tu reste au Pays des Merveilles et je t'ammène au tréfonds du terrier.");
});

bluePill.addEventListener("click", () => {
    alert("Tout s'arrête. Tu te réveilles dans ton lit et tu crois ce que bon te semble.");
});

const validateForm = () => {
    console.log("call validateForm");

    const firstNameElement = document.getElementById("firstName");
    const lastNameElement = document.getElementById("lastName");
    const emailElement = document.getElementById("email");
    const commentsElement = document.getElementById("comments");

    const firstNameValue = firstNameElement.value.trim();
    const lastNameValue = lastNameElement.value.trim();
    const emailValue = emailElement.value.trim();
    const commentsValue = commentsElement.value.trim();

    let noError = true;
    let errorMsg = "";

    console.log(firstNameElement);
    console.log("firstNameValue: " + firstNameValue);

    if(firstNameValue === "") {
        noError = false;
        errorMsg = "Le prénom est vide";
        setError(firstNameElement, errorMsg);
    }
    else{
        setSuccess(firstNameElement);
    }

    if(lastNameValue === "") {
        noError = false;
        errorMsg = "Le nom est vide.";
        setError(lastNameElement, errorMsg);
    }
    else{
        setSuccess(lastNameElement);
    }

    if(emailValue === ""){
        noError = false;
        errorMsg = "Le courriel est vide.";
        setError(emailElement, errorMsg);
    }
    else if(!validateEmail(emailValue)) {
        noError = false;
        errorMsg = "Le courriel n'est pas valide."
        setError(emailElement, errorMsg);
    }
    else {
        setSuccess(emailElement);
    }

    if(commentsValue === ""){
        noError = false;
        errorMsg = "Le commentaire vide.";
        setError(commentsElement, errorMsg);
    }
    else {
        setSuccess(commentsElement);
    }

    console.log("noError: " + noError);
    return noError;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    inputControl.querySelector(".errorMessage").innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const setError = (element, errorMsg) => {
    const inputControl = element.parentElement;
    inputControl.querySelector(".errorMessage").innerText = errorMsg;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const validateEmail = email => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(String(email).toLowerCase());
}





function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }