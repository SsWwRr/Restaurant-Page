function home(){
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
    //create a home container
    let homeContainer = document.createElement("div")
    content.append(homeContainer)
    homeContainer.id = "homeContainer"
    //create a h2 container
    let h2Container = document.createElement("div")
    homeContainer.append(h2Container)
    h2Container.id = "h2Container"
    let h2 = document.createElement("h2")
    h2Container.append(h2)
    h2.id = "h2"
    h2.innerText = "Welcome to Doggie Dishes"
    //add a paragraph about the restaurant
    let aboutTheRestaurant = document.createElement("p")
    homeContainer.append(aboutTheRestaurant)
    aboutTheRestaurant.innerText = "Welcome to Doggie Dishes, the first restaurant in which all dishes are made by a dog with a passion for cooking!"
    aboutTheRestaurant.id = "aboutTheRestaurant"
    //add a photo of a cartoon dog
    let photo = document.createElement("img")
    homeContainer.append(photo)
    photo.src="https://cdn.pixabay.com/photo/2019/02/12/23/41/animation-3993429_1280.png"
    photo.alt = "a photo of our cook"


}
export {home}