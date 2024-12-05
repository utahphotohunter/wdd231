// footer content
const yearSpan = document.querySelector("#currentYear");
const modified = document.querySelector("#lastModified")
let date = document.lastModified;
const currentDate = new Date(date);
let currentYear = currentDate.getFullYear();
yearSpan.textContent = currentYear;
modified.textContent = `Last Modified: ${currentDate}`;