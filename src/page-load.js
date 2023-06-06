import { menu } from "./menu"
import { home } from "./home"
import { contact } from "./contact"
export function background(){
    //get the main content element
    let content = document.getElementById("content")
    //create a header container
    let headerContainer = document.createElement("div")
    content.append(headerContainer)
    headerContainer.id = "headerContainer"
    //create a header
    let header = document.createElement("h1")
    headerContainer.append(header)
    header.id = "header"
    header.textContent = "Doggie Dishes"
    //create a button container
    let buttonContainer = document.createElement("nav")
    content.append(buttonContainer)
    buttonContainer.id = "buttonContainer"
    //create a home button
    let homeButton = document.createElement("button")
    buttonContainer.append(homeButton)
    homeButton.classList.add("button")
    //add a text to the button
    homeButton.textContent = "Home"
    homeButton.addEventListener("click",()=>{
        home()
        console.log("home is working")
    })
    //create a menu button
    let menuButton = document.createElement("button")
    buttonContainer.append(menuButton)
    menuButton.classList.add("button")
    //add a text to the button
    menuButton.textContent = "Menu"
    menuButton.addEventListener("click",()=>{
        menu()
        console.log("menu is working")
    })
    //create a contact button
    let contactButton = document.createElement("button")
    buttonContainer.append(contactButton)
    contactButton.classList.add("button")
    //add a text to the button
    contactButton.textContent = "Contact"
    contactButton.addEventListener("click",()=>{
        contact()
        console.log("contact is working")
    })
}

