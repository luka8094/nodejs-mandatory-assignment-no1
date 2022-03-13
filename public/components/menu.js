window.onload = () => {

    const menuSidebarHtmlElement = document.querySelector("#sidebar")
    const menuButtonHtmlElement = document.querySelector("#menu-button")
    const menuUnderlayHtmlELement = document.querySelector("#menu-underlay")

    console.log(menuSidebarHtmlElement)
    console.log(menuButtonHtmlElement)
    console.log(menuUnderlayHtmlELement)

    menuButtonHtmlElement.onclick = openMenu

    function openMenu(){
        menuButtonHtmlElement.classList.toggle("click")
        menuSidebarHtmlElement.classList.toggle("show")
        menuUnderlayHtmlELement.classList.toggle("menu-fade")
    }

}