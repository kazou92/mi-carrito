let toggle = document.querySelector(".toggle");
let listaVisivle = document.querySelector(".class-list")


toggle.addEventListener("click", () =>{
listaVisivle.classList.toggle("nav-visible")
})



const Producto = document.getElementById('product-class')

let articulosHTML = ''


let articles =[{
    id:1,
    price:100,
    name:"article1",
    image :'https://picsum.photos/250/250?random=2',
    descrispcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
},
{
    id:2,
    price:200,
    name:"article2",
    image :'https://picsum.photos/250/250?random=3',
    descrispcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

},
{
    id:3,
    price:300,
    name:"article3",
    image :'https://source.unsplash.com/random/320x320/',
    descrispcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
}]


for (let article of articles) {
    articulosHTML += `
    <div class="wrapper__product">
      <div class="wrapper__product-img">
        <img src="${article.image}" alt="${article.name}" class="wrapper__product-img-item">
      </div>
      <div class="wrapper__product-content">
        <h3 class="wrapper__product-title">${article.name}</h3>
        <p class="wrapper__product-text">
        ${article.descrispcion}
        </p>
        <div class="wrapper__product-btn">
        <span class="wrapper__product-btn-text">$ ${article.price}</span>
          <button class="wrapper__product-btn-item" data-id="${article.id}">
            <i class='bx bx-shopping-bag'></i>
            <span class="wrapper__product-btn-text">Add to Cart</span>
          </button>
        </div>
      </div>
      </div>
    `
  }
  Producto.insertAdjacentHTML('beforeend', articulosHTML);

  let miCart = [];

  function trouver(id){
      
      for(article of articles){
      if(article.id ==id){
        return article
      

      }
    }  
  }
   function addToCart(id){
       const produit=trouver(id)
       miCart.push(produit)
   }

   

   Producto.addEventListener("click",function(e){
      /* console.log("sa mw peze a",e.target)
       console.log("sa ki f sa mw peze a paret la",e.currentTarget)*/
       if(e.target.closest(".wrapper__product-btn-item")){
           
           const ident = e.target.closest(".wrapper__product-btn-item").dataset.id
           addToCart(+ident)
           
           actualizar()
           
       }
   })


   const endler =document.getElementById("envol-car")

   function actualizar(){
       let miCartHtml =[]
       for(miProducto of miCart){
           miCartHtml +=`
           <div class="cart__item">
           <div class="cart__item-img">
           <img src="${miProducto.image}" alt="${miProducto.name}" class="cart__item-img-item">
           </div>
           <div class="cart__item-content">
           <h3 class="cart__item-title">${miProducto.name}</h3>
           <p class="cart__item-text">
           ${miProducto.descrispcion}
           </p>
           <div class="cart__item-btn">
           <span class="cart__item-btn-text">$ ${miProducto.price}</span>
           <button class="cart__item-btn-item" data-id="${miProducto.id}">
           <i class="fa-solid fa-xmark"></i>
           </button>
           </div>
           </div>
           </div>

           `

       }
       const totalista =document.getElementById("car-total")
       //add()
       endler.innerHTML = miCartHtml.length>0? miCartHtml:"<p>No hay productos </p>"
       totalista.innerText = `$ ${add()}`
   }
   actualizar()

  

   function add(){
    let sum =0
       for(miProducto of miCart){
       sum +=article.price
       
       }
       return sum
   }
   function removeFromCart (id) {
    let newArr = []
    for (let miProducto of miCart) {
      if(miProducto.id !== id) {
        newArr.push(miProducto)
      }
    }
    miCart = newArr
  }
  
  endler.addEventListener('click', function (e) {
    if (e.target.closest('.cart__item-btn-item')) {
      const id = e.target.closest('.cart__item-btn-item').dataset.id
      removeFromCart(+id)
      actualizar()
    }
  })

  const checkout = document.getElementById('check-in')

checkout.addEventListener('click', function (e) {
  if(e.target.closest('.wrapper__sidebar-cart-btn-link')) {
    alert('Gracias por tu compra')
    miCart = []
    actualizar()
  }
})
