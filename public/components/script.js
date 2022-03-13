window.onload = () => {

    //Javascript script for user interaction

    //menu elements
    const menuSidebarHtmlElement = document.querySelector("#sidebar")
    const menuButtonHtmlElement = document.querySelector("#menu-button")
    const menuUnderlayHtmlELement = document.querySelector("#menu-underlay")

    //signature element
    const signatureHtmlElement = document.querySelector("#signature")
    const signatureTextHtmlElement = document.querySelector("#signature-text")

    //debugging menu html elements registration
    console.log(menuSidebarHtmlElement)
    console.log(menuButtonHtmlElement)
    console.log(menuUnderlayHtmlELement)

    //debugging signature elements registration
    console.log(signatureHtmlElement)

    menuButtonHtmlElement.onclick = openMenu

    function openMenu(){
        menuButtonHtmlElement.classList.toggle("click")
        menuSidebarHtmlElement.classList.toggle("show")
        menuUnderlayHtmlELement.classList.toggle("menu-fade")
    }

    signatureHtmlElement.onclick = expand

    function expand(){
        signatureHtmlElement.classList.toggle("pop")
        signatureTextHtmlElement.classList.toggle("text-pop")
    }
}