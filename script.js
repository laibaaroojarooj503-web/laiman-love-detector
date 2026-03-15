// script.js

const createBtn = document.getElementById('createBtn');
const joinBtn = document.getElementById('joinBtn');
const playerName = document.getElementById('playerName');
const roomLink = document.getElementById('roomLink');
const linkInput = document.getElementById('linkInput');

// Function to generate a unique room code
function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Create Game
createBtn.addEventListener('click', () => {
    if (playerName.value.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    const roomCode = generateRoomCode();
    const fullLink = `${window.location.href}room/${roomCode}`;
    linkInput.value = fullLink;
    roomLink.classList.remove('hidden');

    alert(`Game created! Share this link with your friend:\n${fullLink}`);
});

// Join Game
joinBtn.addEventListener('click', () => {
    if (playerName.value.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    const joinCode = prompt("Enter Room Code:");
    if (joinCode) {
        alert(`Joining Room: ${joinCode}`);
        // Next step: Connect to Firebase room
    }
});