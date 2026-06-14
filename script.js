/* -------------------------- */
/* LOADING SCREEN */
/* -------------------------- */

const loadingMessages = [
    "Checking in with Tom, Joey, Chiku and Oreo ",
    "They were the ones helping us with the website",
    "Getting that turt energy in...",
    "Looking for the worst puns bec thats what you like",
    "It's lights out and away we go!",
    "(soooo are you proud of the f1 ref?) "
];

const loadingText = document.getElementById("loading-text");

let msgIndex = 0;

const loadingInterval = setInterval(() => {

    if (loadingText) {
        loadingText.textContent = loadingMessages[msgIndex];
    }

    msgIndex++;

    if (msgIndex >= loadingMessages.length) {
        clearInterval(loadingInterval);

        setTimeout(() => {

            document.getElementById("loading-screen").style.display = "none";

            document
                .getElementById("game-container")
                .classList
                .remove("hidden");

        }, 1000);
    }

}, 1000);

/* -------------------------- */
/* PAGE HELPERS */
/* -------------------------- */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.add("hidden");
        });

    document
        .getElementById(pageId)
        .classList
        .remove("hidden");

}

/* -------------------------- */
/* CHAOS BUTTON */
/* -------------------------- */

const dontPressBtn = document.getElementById("dontPressBtn");

if (dontPressBtn) {

    dontPressBtn.addEventListener("click", () => {
        document.body.style.backgroundImage =
    "url('background2.png')";

        document.body.classList.add("shake");

        showPage("chaos-page");

        const messages = [
            ,
            "YOU HAD ONE JOB.",
            "ek kaam dhang se nhi hota",
            "anyway",
            "continue."
        ];

        let i = 0;

        const chaosText = document.getElementById("chaosText");

        const interval = setInterval(() => {

            if (i < messages.length) {

                chaosText.textContent = messages[i];
                i++;

            } else {

                clearInterval(interval);

                setTimeout(() => {

                    showPage("password-page");

                }, 1000);
            }

        }, 1000);

    });

}

/* -------------------------- */
/* PASSWORD */
/* -------------------------- */

const passwordBtn = document.getElementById("passwordBtn");

if (passwordBtn) {

    passwordBtn.addEventListener("click", () => {

        const input =
            document.getElementById("passwordInput").value;

        const msg =
            document.getElementById("passwordMessage");

        if (input === "vanweeturns19") {

            msg.textContent = "ok enter";

            setTimeout(() => {

                showPage("puzzle-page");

            }, 1000);

        } else {

            msg.textContent =
                "Wrong password. Fake friend detected.";

        }

    });

}

/* -------------------------- */
/* PUZZLE */
/* -------------------------- */

const puzzleContainer =
    document.getElementById("puzzle-container");

let selectedPiece = null;

function createPuzzle() {

    if (!puzzleContainer) return;

    const pieces = [];

    for (let row = 0; row < 5; row++) {

        for (let col = 0; col < 5; col++) {

            pieces.push({
                row,
                col
            });

        }

    }

    const shuffled =
        [...pieces].sort(() => Math.random() - 0.5);

    shuffled.forEach((piece, index) => {

        const div =
            document.createElement("div");

        div.classList.add("puzzle-piece");

        div.dataset.correct = index;

        div.style.backgroundImage =
            "url('puzzle.jpeg')";

        div.style.backgroundPosition =
            `${-piece.col * 100}px ${-piece.row * 100}px`;

        div.addEventListener("click", () => {

            if (!selectedPiece) {

                selectedPiece = div;
                div.style.outline =
                    "4px solid gold";

            } else {

                swapPieces(
                    selectedPiece,
                    div
                );

                selectedPiece.style.outline =
                    "none";

                selectedPiece = null;

                checkPuzzle();

            }

        });

        puzzleContainer.appendChild(div);

    });

}

function swapPieces(a, b) {

    const tempImage =
        a.style.backgroundPosition;

    a.style.backgroundPosition =
        b.style.backgroundPosition;

    b.style.backgroundPosition =
        tempImage;

}

function checkPuzzle() {

    const pieces =
        document.querySelectorAll(".puzzle-piece");

    let correct = 0;

    pieces.forEach((piece, index) => {

        if (
            piece.dataset.correct == index
        ) {
            correct++;
        }

    });

    if (correct === 25) {

        document
            .getElementById(
                "puzzleCompleteBtn"
            )
            .classList
            .remove("hidden");

        launchConfetti();

    }

}

createPuzzle();

/* -------------------------- */
/* PUZZLE NEXT */
/* -------------------------- */

const puzzleBtn =
    document.getElementById(
        "puzzleCompleteBtn"
    );

if (puzzleBtn) {

    puzzleBtn.addEventListener("click", () => {

        showPage("crossword-page");

    });

}

/* -------------------------- */
/* CROSSWORD PLACEHOLDER */
/* -------------------------- */const crosswordCells =
document.querySelectorAll(".cell");

crosswordCells.forEach((cell,index)=>{

    cell.addEventListener(
        "input",
        ()=>{

            cell.value =
            cell.value.toUpperCase();

            if(
                cell.value &&
                crosswordCells[index+1]
            ){
                crosswordCells[index+1].focus();
            }

        }
    );

});


/* -------------------------- */
/* SCRAPBOOK */
/* -------------------------- */

const modal =
    document.getElementById("imageModal");

const modalImg =
    document.getElementById("modalImg");

document
    .querySelectorAll(".photo-card img")
    .forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "flex";

            modalImg.src = img.src;

        });

    });

const closeModal =
    document.getElementById("closeModal");

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            modal.style.display = "none";

        }
    );

}

const scrapbookNext =
    document.getElementById(
        "scrapbookNext"
    );

if (scrapbookNext) {

    scrapbookNext.addEventListener(
        "click",
        () => {

            showPage("video-page");

        }
    );

}

/* -------------------------- */
/* VIDEO */
/* -------------------------- */

const videoNext =
    document.getElementById(
        "videoNext"
    );

if (videoNext) {

    videoNext.addEventListener(
        "click",
        () => {

            showPage("letter-page");

            startTypewriter();

        }
    );

}

/* -------------------------- */
/* TYPEWRITER LETTER */
/* -------------------------- */

const letterText = `
Happy Birthday Vanwee 💜

This is just a placeholder letter.

Insert emotional friendship speech here.

Mention cats.

Mention Taylor Swift.

Mention Louis Tomlinson.

Mention class 308.

Mention SKP mess.

Pretend this made you cry.

Love,
Dhruvika
`;

function startTypewriter() {

    const target =
        document.getElementById(
            "typewriter-text"
        );

    let i = 0;

    target.textContent = "";

    const interval =
        setInterval(() => {

            target.textContent +=
                letterText.charAt(i);

            i++;

            if (
                i >= letterText.length
            ) {
                clearInterval(interval);
            }

        }, 30);

}

const letterNext =
    document.getElementById(
        "letterNext"
    );

if (letterNext) {

    letterNext.addEventListener(
        "click",
        () => {

            showPage("cake-page");

        }
    );

}

/* -------------------------- */
/* CAKE */
/* -------------------------- */

let blownCandles = 0;

document
    .querySelectorAll(".candle")
    .forEach(candle => {

        candle.addEventListener(
            "click",
            () => {

                candle.textContent = "💨";

                candle.style.pointerEvents =
                    "none";

                blownCandles++;

                if (
                    blownCandles === 5
                ) {

                    launchConfetti();

                    setTimeout(() => {

                        showPage(
                            "final-page"
                        );

                    }, 1500);

                }

            }
        );

    });

/* -------------------------- */
/* EASTER EGGS */
/* -------------------------- */

const catEgg =
    document.getElementById("catEgg");

if (catEgg) {

    catEgg.addEventListener(
        "click",
        () => {

            alert("meow.");

        }
    );

}

const f1Egg =
    document.getElementById("f1Egg");

if (f1Egg) {

    f1Egg.addEventListener(
        "click",
        () => {

            alert(
                "MAX MAX MAX SUPER MAX MAX MAX"
            );

        }
    );

}

const musicEgg =
    document.getElementById("musicEgg");

if (musicEgg) {

    musicEgg.addEventListener(
        "click",
        () => {

            alert(
                "Louis was here."
            );

        }
    );

}

/* -------------------------- */
/* CONFETTI */
/* -------------------------- */

function launchConfetti() {

    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";

        confetti.style.zIndex =
            "9999";

        document.body.appendChild(
            confetti
        );

        const duration =
            Math.random() * 3000 + 2000;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0)"
                },
                {
                    transform:
                        "translateY(120vh)"
                }
            ],
            {
                duration,
                easing: "linear"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}

/* -------------------------- */
/* CURSOR SPARKLES */
/* -------------------------- */

document.addEventListener(
    "mousemove",
    e => {

        const sparkle =
            document.createElement("div");

        sparkle.textContent = "✨";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            e.clientX + "px";

        sparkle.style.top =
            e.clientY + "px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.fontSize =
            "12px";

        sparkle.style.zIndex =
            "999";

        document.body.appendChild(
            sparkle
        );

        setTimeout(() => {

            sparkle.remove();

        }, 700);

    }
);
