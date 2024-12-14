// count of successful page loads
let count = localStorage.getItem("count");
let num = parseInt(count);
num += 1;
let newCount = num.toString();
localStorage.setItem("count", newCount);

console.log(localStorage.getItem("count"))