// const redPill = document.querySelector(".takeAPill__btn--red");
// const bluePill = document.querySelector(".takeAPill__btn--blue");

// redPill.addEventListener("click", () => {
//     alert("Tu reste au Pays des Merveilles et je t'ammène au tréfonds du terrier.");
// });

// bluePill.addEventListener("click", () => {
//     alert("Tout s'arrête. Tu te réveilles dans ton lit et tu crois ce que bon te semble.");
// });

const validateForm = () => {
    console.log("call validateForm");

    const firstNameElement = document.getElementById("firstName");
    const lastNameElement = document.getElementById("lastName");
    const emailElement = document.getElementById("email");
    // const phoneElement = document.getElementById("phone");
    const addressElement = document.getElementById("address");
    // const productElement = document.getElementById("product");
    // const categoryElement = document.getElementById("category");
    const descriptionElement = document.getElementById("description");

    const firstNameValue = firstNameElement.value.trim();
    const lastNameValue = lastNameElement.value.trim();
    const emailValue = emailElement.value.trim();
    // const phoneValue = phoneElement.value.trim();
    const addressValue = addressElement.value.trim();
    // const productValue = productElement.value.trim();
    // const categoryValue = categoryElement.value.trim();
    const descriptionValue = descriptionElement.value.trim();

    let noError = true;
    let errorMsg = "";

    console.log("firstNameElement :" + firstNameElement);
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

    // if(addressValue === ""){
    //     noError = false;
    //     errorMsg = "L'adresse est vide";
    //     setError(addressElement, errorMsg);
    // }
    // else {
    //     setSuccess(addressElement);
    // }

    if(descriptionValue === ""){
        noError = false;
        errorMsg = "La description est vide";
        setError(descriptionElement, errorMsg);
    }
    else {
        setSuccess(descriptionElement);
    }
    console.log("noError: " + noError);
    return noError;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    inputControl.querySelector(".errorMessage").innerText = "";
    // inputControl.classList.add("text-green-500");
    // inputControl.classList.add("text-sm");
    // inputControl.classList.remove("error");
}

const setError = (element, errorMsg) => {
    console.log("setError");
    console.log(element);

    const inputControl = element.parentElement;
    console.log(inputControl);
    inputControl.querySelector(".errorMessage").innerText = errorMsg;
    // inputControl.classList.add("text-red-500");
    // inputControl.classList.add("text-sm");

    // inputControl.classList.remove("success");
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