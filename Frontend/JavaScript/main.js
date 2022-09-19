ScrollReveal().reveal("#projectOne", { reset: true, delay: 1000, easing: "ease-in-out" })
ScrollReveal().reveal("#projectTwo", { reset: true, delay: 1000, easing: "ease-in-out" })
ScrollReveal().reveal("#projectThree", { reset: true, delay: 1000, easing: "ease-in-out" })
ScrollReveal().reveal("#projectFour", { reset: true, delay: 1000, easing: "ease-in-out" })
ScrollReveal().reveal("#projectFive", { reset: true, delay: 1000, easing: "ease-in-out" })



const skillsNavBtn = document.getElementById("skillsBtn");
skillsNavBtn.addEventListener("click", (e) => {
    const skillSection = document.getElementById("skillsSection");

    skillSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})

const projectsNavBtn = document.getElementById("projectsBtn");
projectsNavBtn.addEventListener("click", (e) => {
    const projectSection = document.getElementById("projectSection");

    projectSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
})

const contactNavBtn = document.getElementById("contactBtn");
contactNavBtn.addEventListener("click", (e) => {
    const contactSection = document.getElementById("contactSection");

    contactSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})