const createBtn = document.getElementById("createBtn");
const joinBtn = document.getElementById("joinBtn");

createBtn.addEventListener("click", startGame);
joinBtn.addEventListener("click", startGame);

function startGame() {

let question = prompt("Player A: Ask your question");

if(!question) return;

let answer = prompt("Player B: Type your answer");

if(!answer) return;

alert("Scanning Lie Detector...");

setTimeout(() => {

let result = Math.random() > 0.5 ? "✅ Truth Detected" : "❌ Lie Detected";

alert("Result:\n" + result);

},2000);

}