"use strict";


screen.orientation.addEventListener("change", (event) => {
    const type = event.target.type;
    document.body.textContent = type.includes("portrait")
        ? "ориентация изменилась на портретную"
        : "ориентация изменилась на альбомную";
});
