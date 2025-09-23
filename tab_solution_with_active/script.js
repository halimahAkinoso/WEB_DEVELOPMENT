// get buttons
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");
const skillsBtn = document.getElementById("skillsBtn");

// get contents
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const skills = document.getElementById("skills");

// show About Me by default
about.style.display = "block";
aboutBtn.classList.add("active");

// button actions
aboutBtn.onclick = () => {
  about.style.display = "block";
  contact.style.display = "none";
  skills.style.display = "none";

  aboutBtn.classList.add("active");
  contactBtn.classList.remove("active");
  skillsBtn.classList.remove("active");
};

contactBtn.onclick = () => {
  about.style.display = "none";
  contact.style.display = "block";
  skills.style.display = "none";

  contactBtn.classList.add("active");
  aboutBtn.classList.remove("active");
  skillsBtn.classList.remove("active");
};

skillsBtn.onclick = () => {
  about.style.display = "none";
  contact.style.display = "none";
  skills.style.display = "block";

  skillsBtn.classList.add("active");
  aboutBtn.classList.remove("active");
  contactBtn.classList.remove("active");
};
