const cart = [{
    name: 'Basketball',
    price: '10$',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg',
},

{
    name: 'Guitar',
    price: '100$',
    img: 'https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png',
}]

const products = [
    {
        name: 'Basketball',
        price: '10$',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg',
    },

    {
        name: 'Guitar',
        price: '100$',
        img: 'https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png',
    },

    {
        name: 'Sunglasses',
        price: '70$',
        img: 'data:image/jpeg;base64,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',
    },

    {
        name: "Rubik's cube",
        price: '5$',
        img: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/811842bd0aa24025bcd2709e0ebd464e_Large.jpg',
    },

    {
        name: 'Monopoly',
        price: '30$',
        img: 'https://www.kroger.com/product/images/xlarge/front/0063050951263',
    },
]  //  {name price img}


const mainBody = document.getElementById('content-container')
const aboutUsButton = document.getElementById('b2')
const allProductsButton = document.getElementById('b1')
const cartButton = document.getElementById('b3')

//about us page:

aboutUsButton.onclick = () => {
    mainBody.innerHTML = null
    mainBody.style.height = '85vh'
    mainBody.style.display = 'inherit'
    const aboutUsText = document.createElement('p')
    aboutUsText.innerHTML = "This is Eitan's store, welcome!<br>"
    aboutUsText.innerHTML += "We sell super unrelated items cause.. it's just an exercise.<br>"
    aboutUsText.innerHTML += "We gurante highest quality, and hope you'll find what you are looking for!"
    mainBody.appendChild(aboutUsText)
}

//All products page:

allProductsButton.onclick = () => {
    mainBody.innerHTML = null
    mainBody.style.height = 'auto'
    if (window.screen.width < 768) {
        mainBody.style.display = 'inherit'
    } else {
        mainBody.style.display = 'grid'
    }
    for (element in products) {

        const item = document.createElement('div')

        const pImg = document.createElement('img')
        pImg.src += products[element].img
        pImg.style.height = '200px'
        pImg.style.width = '200px'
        pImg.style.marginLeft = '10px'
        pImg.style.marginTop = '10px'
        pImg.style.marginBottom = '10px'
        pImg.style.border = '2px solid black'
        item.appendChild(pImg)

        const name = document.createElement('h3')
        name.innerHTML = products[element].name
        name.style.marginLeft = '10px'
        name.style.height = 'fit-content'
        name.style.display = 'inline-block'
        name.style.position = 'relative';
        name.style.top = '-180px'
        item.appendChild(name)

        const price = document.createElement('h3')
        price.innerHTML = products[element].price
        price.style.marginLeft = '10px'
        price.style.height = 'fit-content'
        price.style.display = 'inline-block'
        price.style.position = 'relative';
        price.style.top = '-180px'
        item.appendChild(price)

        const addToCartButton = document.createElement('button')
        addToCartButton.setAttribute('id', products[element].name)
        addToCartButton.setAttribute('class','addToCartButton')
        addToCartButton.innerHTML = 'Add to cart'
        addToCartButton.style.border = '1px black solid'
        addToCartButton.style.position = 'relative';
        addToCartButton.style.marginLeft = '10px'
        if (window.screen.width < 920){
            addToCartButton.style.top = '-70px';
            addToCartButton.style.left = '230px'
        } else{
            addToCartButton.style.top = '-20px';
            addToCartButton.style.left = '-110px'
        }

        item.appendChild(addToCartButton)

        mainBody.appendChild(item)

        addToCartButton.onclick = ()=> {
            for (x in products){
                if(products[x].name === addToCartButton.id){
                    cart.push(products[x])
                    alert(products[x].name + ' was added to your cart!')
                }
            }
        }
    }
}


//// cart page:

const delButton = function(){
    const deleteButtonsArry = document.getElementsByClassName('deleteButtons')
    for (button of deleteButtonsArry){
        button.onclick = ()=>{
            for(item in cart){
                if (cart[item].name === button.id){
                    cart.splice(item,1)
                    alert(button.id + ' was deleted from your cart!')
                    break
                    // return null
                }
            }
            loadCart()
        }
    }
}


const loadCart = () => {
    mainBody.innerHTML = null
    mainBody.style.height = '85vh'
    mainBody.style.display = 'inherit'
    const title = document.createElement('h1')
    title.innerHTML = 'Your cart holds:'
    mainBody.appendChild(title)
    if(cart.length === 0){
        const cartEmpty = document.createElement('h3')
        cartEmpty.innerHTML = 'Your cart is empty'
        cartEmpty.style.marginLeft = '10%'
        cartEmpty.style.fontsize= 'xx-large'
        cartEmpty.style.color = '#1abc9c'   
        mainBody.appendChild(cartEmpty)
    } else {
        const itemList = document.createElement('ol')
        let totalPrice = 0;
        for (item of cart) {
            const inItem = document.createElement('li')
            inItem.innerHTML = item.name +' at the price of: ' + item.price
            inItem.style.fontSize = 'x-large'
            itemList.appendChild(inItem)
            totalPrice+= parseInt(item.price.slice(0,-1))
            const deleteItemButton = document.createElement('button')
            deleteItemButton.setAttribute('id',item.name)
            deleteItemButton.setAttribute('class','deleteButtons')
            deleteItemButton.innerHTML = 'Delete item'
            deleteItemButton.style.border = 'black solid 1px'
            itemList.appendChild(deleteItemButton)
            
            deleteItemButton.onclick = delButton
    
            // deleteItemButton.onclick = ()=> {
            //     for(item in cart){
            //         if (cart[item].name === deleteItemButton.id){
            //             cart.splice(item,1)
            //             alert(deleteItemButton.id + ' was deleted from your cart!')
            //             return null
            //         }
            //     }
            // }
        }
        mainBody.appendChild(itemList)
        const totalPriceItem = document.createElement('h3')
        totalPriceItem.innerHTML = 'Cart total price: ' + totalPrice + '$';
        totalPriceItem.style.marginLeft = '20px'
        mainBody.appendChild(totalPriceItem)
    }
}

cartButton.onclick = ()=>{
    loadCart() 
}
