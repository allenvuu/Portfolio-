function toggleMenu() {
    const menu = document.querySelector(".menu-links");//targets the list of nav
    const icon = document.querySelector(".hamburger-icon"); 
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}