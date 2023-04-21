import throttle from "lodash.throttle";

const FORM_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");

const settingsObj = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {
    email: "",
    message: ""
};

formEl.elements.email.value = settingsObj.email;
formEl.elements.message.value = settingsObj.message;

formEl.addEventListener("input", throttle(onInput, 500));
formEl.addEventListener("submit", onSubmit);

function onInput(event) {
    if (event.target.nodeName === "INPUT") {
        settingsObj.email = event.target.value;
    }
    if (event.target.nodeName === "TEXTAREA") {
        settingsObj.message = event.target.value;
    }
    localStorage.setItem(FORM_KEY, JSON.stringify(settingsObj));
}

function onSubmit(event) {
    event.preventDefault();
    console.log(settingsObj);
    console.log(
        `EMAIL: ${settingsObj.email} | MESSAGE: ${settingsObj.message}`
    );
    localStorage.removeItem(FORM_KEY);
    event.currentTarget.elements.email.value = "";
    event.currentTarget.elements.message.value = "";
}
