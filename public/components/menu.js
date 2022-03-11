window.onload = () => {

    const menuSidebarHtmlElement = document.querySelector("#sidebar")
    const menuButtonHtmlElement = document.querySelector("#menu-button")

    console.log(menuSidebarHtmlElement)
    console.log(menuButtonHtmlElement)

    menuButtonHtmlElement.onclick = openMenu

    function openMenu(){
        menuButtonHtmlElement.classList.toggle("click")
        menuSidebarHtmlElement.classList.toggle("show")
    }

}