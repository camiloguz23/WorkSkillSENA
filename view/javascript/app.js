const elemento = document.getElementById("elementos")
const contendor = document.getElementById("contenedor")
const bmw = document.querySelector(".BMW")
const audi = document.querySelector(".AUDI")
const auto = document.querySelector(".VOLKSWAGEN")
const btn_create = document.getElementById("create")
const cont_create = document.getElementById("cont-create")
const enviar = document.getElementById("enviar")
const nom_usuario = document.getElementById("nom-user")
const lista = document.getElementById("texto")
const formuser = document.getElementById("formuser")
const cerrar = document.getElementById("exit") 
const mensaje = document.getElementById("mensaje")
const confirmacion = document.getElementById("ok")

let usuario = []

elemento.addEventListener("click", (e) => {
    const marca = e.target.classList[0]
    

    switch (marca) {
        case "BMW":
            contendor.innerHTML=`
            <img src="view/img/bmw1.jpg" alt="BMW" class="img-size">
            <img src="view/img/bmw3.jpg" alt="BMW" class="img-size">
            <img src="view/img/bmw3.jpg" alt="BMW" class="img-size">
            <img src="view/img/bmw4.jpg" alt="BMW" class="img-size">
            <img src="view/img/bmw5.jpg" alt="BMW" class="img-size">
            `
            bmw.classList.add("active")
            audi.classList.remove("active")
            auto.classList.remove("active")
            break;
        case "AUDI":
            contendor.innerHTML=`
            <img src="view/img/audi1.jpg" alt="AUDI" class="img-size">
            <img src="view/img/audi2.jpg" alt="AUDI" class="img-size">
            <img src="view/img/audi3.jfif" alt="AUDI" class="img-size">
            <img src="view/img/audi4.jfif" alt="AUDI" class="img-size">
            `
            bmw.classList.remove("active")
            audi.classList.add("active")
            auto.classList.remove("active")
            break
        case "VOLKSWAGEN":
            contendor.innerHTML=`
            <img src="view/img/carro 2.jpg" alt="autos" class="img-size">
            <img src="view/img/carro1.jfif" alt="autos" class="img-size">
            <img src="view/img/carro 3.jpg" alt="autos" class="img-size">
            <img src="view/img/carro 4.jfif" alt="autos" class="img-size">
            `
            bmw.classList.remove("active")
            audi.classList.remove("active")
            auto.classList.add("active")
            break;
    }
})

btn_create.addEventListener("click", (e) => {
    e.preventDefault()
    cont_create.style.visibility="visible"
} )

enviar.addEventListener("click", (e) => {
    e.preventDefault()
    const dato = nom_usuario.value
    usuario.push(dato)
    console.log(usuario)
    formuser.reset()
    number = usuario.length -1
    console.log(number)
    const p = document.createElement("p")
    p.textContent = usuario[number]
    lista.appendChild(p)

    
    formuser.style.display="none"
    mensaje.style.display="block"
    setTimeout(() => {
        mensaje.style.display="none"
        formuser.style.display="block"
    }, 2000)
      

})

cerrar.addEventListener("click", (e) => {
    e.preventDefault()
    cont_create.style.visibility= "hidden"
})

lista.addEventListener("click", (e) => {
    const user = e.target.textContent
    

    if( user == usuario[0]){
        console.log("si es correcto")
        lista.innerHTML=`<p class="seleccionado">${user}</p>`
        btn_create.style.display = "none"
        contendor.addEventListener("click", (e) => {
            
            let opacidad = e.target
            opacidad.style.opacity = 0.5
        })
    }else {
        alert("no es correcto segun el orden de la cola ")
    }
})

confirmacion.addEventListener("click", (e) => {
    e.preventDefault()
    usuario.shift()
    console.log(usuario)
    lista.innerHTML=``
    usuario.forEach(elem => {
        const p = document.createElement("p")
        p.textContent = elem
        lista.appendChild(p)
    })
    const imagenes = document.querySelectorAll(".img-size")
    imagenes.forEach(css => {
        css.style.opacity=1
        
    })
    btn_create.style.display = "inline-block"
    

})