//INPUTS
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

//OUTPUT
const dayOutput = document.getElementById("DD");
const monthOutput = document.getElementById("MM");
const yearOutput = document.getElementById("YY");

//FORM ELEMENT
const form = document.querySelector("form");

//ADDING THE SUBMIT EVENTLISTENTER TO FORM
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// INVALID DATE
function validate() {
    const inputs = document.querySelectorAll("input")
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required.";
            validator = false;
        } else if (monthInput.value > 12) {
            monthInput.style.borderColor = "red";
            monthInput.parentElement.querySelector("small").innerText = "must be a month.";
            validator = false;
        } else if (dayInput.value > 31) {
            dayInput.style.borderColor = "red";
            dayInput.parentElement.querySelector("small").innerText = "must be a valid day.";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayInput.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthInput.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayInput.value;
        const m = month - monthInput.value;
        const y = year - yearInput.value;

        dayOutput.innerHTML = d;
        monthOutput.innerHTML = m;
        yearOutput.innerHTML = y;
    }
}