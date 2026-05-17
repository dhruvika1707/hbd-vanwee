function scrollToSection(id){

    document
    .getElementById(id)
    .scrollIntoView({
        behavior:"smooth"
    });

}

const popup =
document.getElementById("popup");

const popupText =
document.getElementById("popup-text");

const messages = [

    "you make existing easier.",

    "highly suspicious friendship speed.",

    "you are annoyingly important to me.",

    "this friendship happened too fast actually.",

    "emotion detected. unfortunate.",

    "chronically online but wise somehow."

];

function showPopup(){

    popup.style.display = "flex";

    const random =
    messages[Math.floor(Math.random() * messages.length)];

    popupText.innerText = random;

}

function showChaos(){

    popup.style.display = "flex";

    popupText.innerHTML = `

    dramatic incidents recorded: 472 <br><br>

    cat mentions per conversation: concerning <br><br>

    friendship speed: alarmingly fast <br><br>

    emotional attachment levels: unsafe

    `;

}

function closePopup(){

    popup.style.display = "none";

}