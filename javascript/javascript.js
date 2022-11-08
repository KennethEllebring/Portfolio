//////////////////// Toggle about overlay menu on&off ///////////////////////
document.getElementById("section1").addEventListener("click", toggleAbout());

function toggleAbout() {
  navSize = document.getElementById("about").style.height;
  if (navSize == "0%") {
    return openAbout();
  } else {
    return closeAbout();
  }
}
function openAbout() {
  document.getElementById("about").style.height = "50%";
}
function closeAbout() {
  document.getElementById("about").style.height = "0%";
}
//////////////////// Toggle projects overlay menu on&off ///////////////////////
document.getElementById("section2").addEventListener("click", toggleProjects());

function toggleProjects() {
  navSize = document.getElementById("projects").style.height;
  if (navSize == "0%") {
    return openProjects();
  } else {
    return closeProjects();
  }
}
function openProjects() {
  document.getElementById("projects").style.height = "50%";
}
function closeProjects() {
  document.getElementById("projects").style.height = "0%";
}
//////////////////// Toggle contact overlay menu on&off ///////////////////////
document.getElementById("section3").addEventListener("click", toggleContact());

function toggleContact() {
  navSize = document.getElementById("contact").style.height;
  if (navSize == "0%") {
    return openContact();
  } else {
    return closeContact();
  }
}
function openContact() {
  document.getElementById("contact").style.height = "50%";
}
function closeContact() {
  document.getElementById("contact").style.height = "0%";
}
