const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Mode clair";
    } else {
        themeBtn.textContent = "🌙 Mode sombre";
    }
});


const voiceBtn = document.querySelector('.voice-btn');const searchInput = 
document.querySelector('#site-search');
voiceBtn.addEventListener('click', () => { const recognition = new 
webkitSpeechRecognition(); recognition.lang = 'fr-FR'; recognition.onresult = 
(event) => { const transcript = event.results[0][0].transcript; 
searchInput.value = transcript; }; recognition.start();});