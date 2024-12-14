let texts = ['https://img.freepik.com/free-photo/transparent-vivid-autumn-leaves_23-2148239689.jpg?t=st=1734153866~exp=1734157466~hmac=ca3f6b3228a265fce88adf019ba8a681e6a24ac4c323cfa520260d0cf2bf8842&w=1380', 'https://img.freepik.com/free-photo/wet-monstera-deliciosa-plant-leaves-garden_53876-139812.jpg?t=st=1734153654~exp=1734157254~hmac=4c712d420f4419c576e2cb08981f8739f9e931fd6be75a5ab43a8ebb926cab72&w=1380', 'text3', 'text4']
let slider = document.querySelector ('#slider')
let left = document.querySelector ('#left')
let right = document.querySelector ('#right')
let image = document.querySelector ('img')
let i = 0
let count = texts.length
image.setAttribute ('src', texts [i])
slider.innerHTML = i
left.addEventListener ('click', ()=> {
    i--
    if (i<0) {
        i = count - 1
    }
    image.setAttribute ('src', texts [i])

})
right.addEventListener ('click', ()=> {
    i++
    if (i > count - 1) {
        i = 0
    }
    image.setAttribute ('src', texts [i])
})
//setInterval (()=> {
//    slider.innerHTML = texts [i]
//    if (i>2) {
//        i = -1
//    }
//    i++}, 1000)

//let count = image.length
//image[0].classList.add ('active')
//function removeActive(arr){
//for (const element of arr) {
//    element.classList.remove ('active')  
//}