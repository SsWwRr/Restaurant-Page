function contact(){
    let testMenu = document.getElementById("menuContainer")
    let testHome = document.getElementById("homeContainer")
    let testContact = document.getElementById("contactContainer")
    if(testMenu){
        console.log("there are two menus")
        testMenu.remove()
    }
    if(testHome){
        console.log("there are two homes")
        testHome.remove()
    }
    if(testContact){
        testContact.remove()
    }
    //get the content container
    let content = document.getElementById("content")
    //create a menu container
    let contactContainer = document.createElement("div")
    content.append(contactContainer)
    contactContainer.id = "contactContainer"
    //create a contact number
    let contactNumber = document.createElement("h2")
    contactContainer.append(contactNumber)
    contactNumber.id = "contactNumber" 
    contactNumber.innerText = "Phone Number: +48 505 505 505"
    //create an adress
    let contactAdress = document.createElement("h2")
    contactContainer.append(contactAdress)
    contactAdress.id = "contactAdress" 
    contactAdress.innerText = "Adress: Paw street 153, Dog City, Animal Kingdom"
    //create the border for the photo
    let photoBorder = document.createElement("div")
    contactContainer.append(photoBorder)
    photoBorder.id = "photoBorder"
    //create the restaurant photo
    let restaurantPhoto = document.createElement("img")
    photoBorder.append(restaurantPhoto)
    restaurantPhoto.src = "https://cdn.pixabay.com/photo/2016/11/02/16/57/doodle-1792253_1280.png"
    restaurantPhoto.alt = "a photo of our street"
    restaurantPhoto.id = "restaurantPhoto"

}
export {contact}