const mobile_nav_menu = document.querySelector(".mobile-nav__container");
const hamburger_icon = document.getElementById("hamburger");
const show_nav = () => {
  if (
    mobile_nav_menu.style.display === "none" ||
    mobile_nav_menu.style.display === "" //this line fixed the issue relates to:
    //https://stackoverflow.com/questions/31147104/onclick-trigger-doesnt-work-first-click
    //because when the display is set to none, it doesn't respond with correct value;
  ) {
    mobile_nav_menu.style.display = "block";
  } else {
    mobile_nav_menu.style.display = "none";
  }
};

hamburger_icon.addEventListener("click", show_nav);
