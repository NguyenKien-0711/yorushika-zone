const topMenu = document.getElementById("ndk-top-menu-toggle");
const menuIcon = document.getElementById("ndk-menu-icon");

document.addEventListener("click", (e) => {
    if(menuIcon.contains(e.target)) {
        topMenu.classList.toggle("ndk-top-menu-toggle");
    }
})