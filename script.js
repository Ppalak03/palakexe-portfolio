/* =========================================
   PALAK.EXE
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   LOADER
========================================= */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 2500);

});


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});


document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

const navObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const id =
                    entry.target.getAttribute("id");

                navigationLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );

                });

            }

        });

    }, {
        threshold: 0.3
    });


sections.forEach(section =>
    navObserver.observe(section)
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


revealElements.forEach(element =>
    revealObserver.observe(element)
);


/* =========================================
   PERSONALITY METERS
========================================= */

const aboutSection =
    document.getElementById("about");

const meterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                document
                    .querySelectorAll(".meter-fill")
                    .forEach(meter => {

                        meter.style.width =
                            meter.dataset.width;

                    });

                meterObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.4
    });


meterObserver.observe(aboutSection);


/* =========================================
   ROTATING HERO TEXT
========================================= */

const rotatingText =
    document.getElementById("rotatingText");

const rotatingWords = [

    "Applications 💻",
    "Intelligent Systems 🤖",
    "Creative Experiences 🎨",
    "Cool Projects 🚀"

];

let rotatingIndex = 0;

setInterval(() => {

    rotatingText.style.opacity = "0";
    rotatingText.style.transform = "translateY(10px)";

    setTimeout(() => {

        rotatingIndex =
            (rotatingIndex + 1) %
            rotatingWords.length;

        rotatingText.textContent =
            rotatingWords[rotatingIndex];

        rotatingText.style.opacity = "1";
        rotatingText.style.transform = "translateY(0)";

    }, 250);

}, 2500);


/* =========================================
   PARTICLE GENERATOR
========================================= */

const particleContainer =
    document.getElementById("particles");

const particleCount =
    window.innerWidth < 700 ? 25 : 60;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${10 + Math.random() * 20}s`;

    particle.style.animationDelay =
        `${Math.random() * -20}s`;

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);

}


/* =========================================
   MOUSE REACTIVE BACKGROUND
========================================= */

const orbs =
    document.querySelectorAll(".orb");

document.addEventListener("mousemove", event => {

    if (window.innerWidth < 768) return;

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    orbs.forEach((orb, index) => {

        const strength =
            (index + 1) * 12;

        orb.style.transform =
            `translate(${x * strength}px, ${y * strength}px)`;

    });

});


/* =========================================
   MAGNETIC BUTTONS
========================================= */

const magneticButtons =
    document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        if (window.innerWidth < 768) return;

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left -
            rect.width / 2;

        const y =
            event.clientY - rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0, 0)";

    });

});


/* =========================================
   SKILL GALAXY
========================================= */

const skillNodes =
    document.querySelectorAll(".skill-node");

const skillInfoCard =
    document.getElementById("skillInfoCard");

const skillName =
    document.getElementById("skillName");

const skillDescription =
    document.getElementById("skillDescription");

const skillLevel =
    document.getElementById("skillLevel");

const skillTech =
    document.getElementById("skillTech");

const closeSkillCard =
    document.getElementById("closeSkillCard");


function showSkillInfo(skill) {

    skillName.textContent =
        skill.dataset.skill;

    skillDescription.textContent =
        skill.dataset.description;

    skillLevel.textContent =
        skill.dataset.level;

    skillTech.textContent =
        skill.dataset.tech;

    skillInfoCard.classList.add("show");

}


skillNodes.forEach(skill => {

    skill.addEventListener("click", () => {

        showSkillInfo(skill);

    });


    skill.addEventListener("mouseenter", () => {

        if (window.innerWidth > 768) {

            showSkillInfo(skill);

        }

    });

});


closeSkillCard.addEventListener("click", () => {

    skillInfoCard.classList.remove("show");

});


/* =========================================
   PROJECT 3D EFFECT
========================================= */

const projectWindow =
    document.querySelector(".project-window");

if (projectWindow) {

    projectWindow.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 768) return;

            const rect =
                projectWindow.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateY =
                (x - 0.5) * 5;

            const rotateX =
                (0.5 - y) * 5;

            projectWindow.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    projectWindow.addEventListener(
        "mouseleave",
        () => {

            projectWindow.style.transform = "";

        }
    );

}


/* =========================================
   EXPERIMENT LAB TABS
========================================= */

const labTabs =
    document.querySelectorAll(".lab-tab");

const labContents =
    document.querySelectorAll(".lab-content");


labTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target =
            tab.dataset.tab;

        labTabs.forEach(item =>
            item.classList.remove("active")
        );

        labContents.forEach(content =>
            content.classList.remove("active")
        );

        tab.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});


/* =========================================
   RANDOM FACT GENERATOR
========================================= */

const factButton =
    document.getElementById("factButton");

const factDisplay =
    document.getElementById("factDisplay");

const facts = [

    "💜 Purple is one of my favorite colors.",

    "🎬 I enjoy video editing.",

    "🚗 I love cars and bikes.",

    "🏎️ Dream car: Porsche 911 GT3 RS.",

    "🎵 I'm a BTS fan.",

    "🌃 I love late-night and early-morning city drives.",

    "🎨 I love mixing creativity with technology.",

    "🏊 One day I want to learn swimming.",

    "🍰 I would love to improve my baking skills.",

    "🤖 My long-term goal is to become a Java + AI Developer."

];

let previousFact = -1;


factButton.addEventListener("click", () => {

    let randomIndex;

    do {

        randomIndex =
            Math.floor(Math.random() * facts.length);

    } while (
        randomIndex === previousFact &&
        facts.length > 1
    );

    previousFact = randomIndex;

    factDisplay.style.transform =
        "scale(0.95)";

    factDisplay.style.opacity = "0";

    setTimeout(() => {

        factDisplay.innerHTML =
            `<span>✨</span><p>${facts[randomIndex]}</p>`;

        factDisplay.style.transform =
            "scale(1)";

        factDisplay.style.opacity = "1";

    }, 200);

});


/* =========================================
   BUG HUNTER GAME
========================================= */

const startGame =
    document.getElementById("startGame");

const bugArea =
    document.getElementById("bugArea");

const bugScoreElement =
    document.getElementById("bugScore");

const developerLevelElement =
    document.getElementById("developerLevel");

let bugScore = 0;
let gameActive = false;
let bugInterval;


function updateDeveloperLevel() {

    let level = "INTERN";

    if (bugScore >= 20) {

        level = "BUG DESTROYER 🔥";

    } else if (bugScore >= 12) {

        level = "DEVELOPER";

    } else if (bugScore >= 5) {

        level = "JUNIOR DEVELOPER";

    }

    developerLevelElement.textContent =
        level;

}


function createBug() {

    if (!gameActive) return;

    const bug =
        document.createElement("button");

    bug.classList.add("bug");

    bug.textContent = "🐛";

    const maxX =
        bugArea.clientWidth - 45;

    const maxY =
        bugArea.clientHeight - 45;

    bug.style.left =
        `${Math.random() * maxX}px`;

    bug.style.top =
        `${Math.random() * maxY}px`;


    bug.addEventListener("click", () => {

        bugScore++;

        bugScoreElement.textContent =
            bugScore;

        updateDeveloperLevel();

        bug.style.transform =
            "scale(0)";

        setTimeout(() => {

            bug.remove();

        }, 150);

    });


    bugArea.appendChild(bug);


    setTimeout(() => {

        if (bug.parentElement) {

            bug.remove();

        }

    }, 2000);

}


startGame.addEventListener("click", () => {

    if (gameActive) return;

    gameActive = true;

    bugScore = 0;

    bugScoreElement.textContent = "0";

    developerLevelElement.textContent =
        "INTERN";

    startGame.style.display = "none";

    bugInterval =
        setInterval(createBug, 700);


    setTimeout(() => {

        gameActive = false;

        clearInterval(bugInterval);

        document
            .querySelectorAll(".bug")
            .forEach(bug => bug.remove());

        startGame.style.display =
            "block";

        startGame.textContent =
            "PLAY AGAIN 🐛";

    }, 30000);

});


/* =========================================
   DIGITAL ASSISTANT
========================================= */

const chatResponse =
    document.getElementById("chatResponse");

const questionButtons =
    document.querySelectorAll(
        ".question-grid button"
    );


const assistantAnswers = {

    who:
        "👩‍💻 Palak Prajapati is an aspiring Java Developer, creative technologist and future Java + AI Developer who loves learning, building and experimenting with technology.",

    build:
        "🚀 She builds web applications, Java projects and creative digital experiences — and is working toward building intelligent AI-powered systems.",

    tech:
        "💻 Her current toolkit includes Java, C, C++, Python, HTML, CSS, JavaScript, JSP, Servlets, JDBC and MySQL.",

    learning:
        "🧠 Right now she is exploring Data Structures & Algorithms, Advanced Java, Artificial Intelligence and Machine Learning.",

    next:
        "🌟 Next mission: become a stronger Java Developer, participate in hackathons, build impactful projects and combine Java + AI."
};


questionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const question =
            button.dataset.question;

        const answer =
            assistantAnswers[question];

        chatResponse.style.opacity = "0";

        setTimeout(() => {

            chatResponse.textContent =
                "PALAK.EXE > " + answer;

            chatResponse.style.opacity = "1";

        }, 200);

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", async event => {

    event.preventDefault();

    const button =
        contactForm.querySelector(".transmit-btn");

    // Show transmitting state
    button.textContent =
        "📡 TRANSMITTING...";

    button.disabled = true;

    formMessage.textContent =
        "Connecting to transmission network...";


    try {

        // Send form data to Formspree
        const response = await fetch(
            contactForm.action,
            {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            // Success
            button.textContent =
                "✅ MESSAGE TRANSMITTED!";

            formMessage.textContent =
                "✨ Transmission complete! Your message has been received.";

            contactForm.reset();


            // Restore button
            setTimeout(() => {

                button.textContent =
                    "🚀 TRANSMIT MESSAGE";

                button.disabled = false;

                formMessage.textContent = "";

            }, 3000);


        } else {

            throw new Error(
                "Form submission failed"
            );

        }

    } catch (error) {

        // Error state
        button.textContent =
            "❌ TRANSMISSION FAILED";

        formMessage.textContent =
            "⚠️ Something went wrong. Please try again.";

        button.disabled = false;


        // Restore button
        setTimeout(() => {

            button.textContent =
                "🚀 TRANSMIT MESSAGE";

        }, 2500);

    }

});
/* =========================================
   ACCESSIBILITY:
   CLOSE SKILL CARD WITH ESCAPE
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        skillInfoCard.classList.remove("show");

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

    }

});