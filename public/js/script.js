window.onload = inicio;
const btnTheme = document.getElementById("change-theme")
const contentNav = document.getElementById("content-nav")
const contentCard = document.getElementById("content-card-country")
const mainContent = document.getElementById("main-content")
const contentFilter = document.getElementById("content-search-filter")


function inicio(){
}
btnTheme.addEventListener("click", changeTheme)

function changeTheme(){
    contentNav.classList.toggle("navDark")
    contentCard.classList.toggle("contentCardDark")
    mainContent.classList.toggle("mainDark")
    contentFilter.classList.toggle("filterDark")
}
