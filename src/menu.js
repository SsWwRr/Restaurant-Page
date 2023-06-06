function menu(){
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
    let menuContainer = document.createElement("div")
    content.append(menuContainer)
    menuContainer.id = "menuContainer"
    //create a menu item
    let menuItem1 = document.createElement("div")
    menuContainer.append(menuItem1)
    menuItem1.classList.add("menuItem")
    //create a menu Item name
    let itemName1 = document.createElement("h2")
    menuItem1.append(itemName1)
    itemName1.innerText = "Hamburger"
    itemName1.classList.add("itemName")
    //create a menu Item price container
    let itemPriceContainer1 = document.createElement("div")
    menuItem1.append(itemPriceContainer1)
    itemPriceContainer1.classList.add("itemPriceContainer")
    //create a menu Item price
    let itemPrice1 = document.createElement("h2")
    itemPriceContainer1.append(itemPrice1)
    itemPrice1.innerText = "Price: 10"
    itemPrice1.classList.add("itemPrice")
    //create a menu Item currency
    let itemCurrency1 = document.createElement("img")
    itemPriceContainer1.append(itemCurrency1)
    itemCurrency1.classList.add("itemCurrency")
    itemCurrency1.src = 'https://cdn.pixabay.com/photo/2022/08/02/17/41/bone-7360854_1280.png'
    //create a menu Item image container
    let itemImageContainer1 = document.createElement("div")
    menuItem1.append(itemImageContainer1)
    itemImageContainer1.classList.add("itemImageContainer")
    //create a menu Item image
    let itemImage1 = document.createElement("img")
    itemImageContainer1.append(itemImage1)
    itemImage1.classList.add("itemImage")
    itemImage1.src = "https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_1280.png"



/////////////////////////////////////////////////////////////////



    //create a menu item
    let menuItem2 = document.createElement("div")
    menuContainer.append(menuItem2)
    menuItem2.classList.add("menuItem")
    //create a menu Item name
    let itemName2 = document.createElement("h2")
    menuItem2.append(itemName2)
    itemName2.innerText = "Taco"
    itemName2.classList.add("itemName")
    //create a menu Item price container
    let itemPriceContainer2 = document.createElement("div")
    menuItem2.append(itemPriceContainer2)
    itemPriceContainer2.classList.add("itemPriceContainer")
    //create a menu Item price
    let itemPrice2 = document.createElement("h2")
    itemPriceContainer2.append(itemPrice2)
    itemPrice2.innerText = "Price: 7"
    itemPrice2.classList.add("itemPrice")
    //create a menu Item currency
    let itemCurrency2 = document.createElement("img")
    itemPriceContainer2.append(itemCurrency2)
    itemCurrency2.classList.add("itemCurrency")
    itemCurrency2.src = 'https://cdn.pixabay.com/photo/2022/08/02/17/41/bone-7360854_1280.png'
    //create a menu Item image container
    let itemImageContainer2 = document.createElement("div")
    menuItem2.append(itemImageContainer2)
    itemImageContainer2.classList.add("itemImageContainer")
    //create a menu Item image
    let itemImage2 = document.createElement("img")
    itemImageContainer2.append(itemImage2)
    itemImage2.classList.add("itemImage")
    itemImage2.src = "https://cdn.pixabay.com/photo/2023/05/30/16/57/taco-8029161_1280.png"



//////////////////////////////////////////////////////////////////



    //create a menu item
    let menuItem3 = document.createElement("div")
    menuContainer.append(menuItem3)
    menuItem3.classList.add("menuItem")
    //create a menu Item name
    let itemName3 = document.createElement("h2")
    menuItem3.append(itemName3)
    itemName3.innerText = "Chocolate Cake"
    itemName3.classList.add("itemName")
    //create a menu Item price container
    let itemPriceContainer3 = document.createElement("div")
    menuItem3.append(itemPriceContainer3)
    itemPriceContainer3.classList.add("itemPriceContainer")
    //create a menu Item price
    let itemPrice3 = document.createElement("h2")
    itemPriceContainer3.append(itemPrice3)
    itemPrice3.innerText = "Price: 15"
    itemPrice3.classList.add("itemPrice")
    //create a menu Item currency
    let itemCurrency3 = document.createElement("img")
    itemPriceContainer3.append(itemCurrency3)
    itemCurrency3.classList.add("itemCurrency")
    itemCurrency3.src = 'https://cdn.pixabay.com/photo/2022/08/02/17/41/bone-7360854_1280.png'
    //create a menu Item image container
    let itemImageContainer3 = document.createElement("div")
    menuItem3.append(itemImageContainer3)
    itemImageContainer3.classList.add("itemImageContainer")
    //create a menu Item image
    let itemImage3 = document.createElement("img")
    itemImageContainer3.append(itemImage3)
    itemImage3.classList.add("itemImage")
    itemImage3.src = "https://cdn.pixabay.com/photo/2020/06/16/16/13/cake-5306411_1280.png"




    //////////////////////////////////////////////////////



    //create a menu item
    let menuItem4 = document.createElement("div")
    menuContainer.append(menuItem4)
    menuItem4.classList.add("menuItem")
     //create a menu Item name
    let itemName4 = document.createElement("h2")
    menuItem4.append(itemName4)
    itemName4.innerText = "Fries"
    itemName4.classList.add("itemName")
    //create a menu Item price container
    let itemPriceContainer4 = document.createElement("div")
    menuItem4.append(itemPriceContainer4)
    itemPriceContainer4.classList.add("itemPriceContainer")
    //create a menu Item price
    let itemPrice4 = document.createElement("h2")
    itemPriceContainer4.append(itemPrice4)
    itemPrice4.innerText = "Price: 4"
    itemPrice4.classList.add("itemPrice")
    //create a menu Item currency
    let itemCurrency4 = document.createElement("img")
    itemPriceContainer4.append(itemCurrency4)
    itemCurrency4.classList.add("itemCurrency")
    itemCurrency4.src = 'https://cdn.pixabay.com/photo/2022/08/02/17/41/bone-7360854_1280.png'
    //create a menu Item image container
    let itemImageContainer4 = document.createElement("div")
    menuItem4.append(itemImageContainer4)
    itemImageContainer4.classList.add("itemImageContainer")
    //create a menu Item image
    let itemImage4 = document.createElement("img")
    itemImageContainer4.append(itemImage4)
    itemImage4.classList.add("itemImage")
    itemImage4.src = "https://cdn.pixabay.com/photo/2017/02/01/11/19/cartoon-chips-2029737_1280.png"
    
}
export {menu}