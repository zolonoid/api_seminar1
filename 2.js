"use strict";


const input = document.createElement("input");
document.body.append(input);

const beforeUnloadHandler = (event) => {
    event.preventDefault();
    event.returnValue = true;
};

input.addEventListener("input", (event) => {
    if (event.target.value !== "") {
        window.addEventListener("beforeunload", beforeUnloadHandler);
    } else {
        window.removeEventListener("beforeunload", beforeUnloadHandler);
    }
});
