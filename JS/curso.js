let toggle = document.querySelector(".toggle");
let listaVisivle = document.querySelector(".class-list")


toggle.addEventListener("click", () =>{
listaVisivle.classList.toggle("nav-visible")
})


const article =[{
    id:1,
    name:"article1",
    image :'https://picsum.photos/250/250?random=2',
    descrispcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
},
{
    id:2,
    name:"article2",
    image :'https://picsum.photos/250/250?random=2',
    descrispcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

},
{
    id:3,
    name:"article3",
    image :'https://picsum.photos/250/250?random=2',
    descrispcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
}]