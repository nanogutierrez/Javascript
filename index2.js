let contenedor = document.getElementById("container");
let productos = [
    { id: 1, nombre: "lemon pie", precio: 1100 },
    { id: 2, nombre: "marquise", precio: 1300 },
    { id: 3, nombre: "cheese cake", precio: 1500 },
    { id: 4, nombre: "mousse de chocolate", precio: 1700 },
];

for (const producto of productos) {
    let li = document.createElement("li");
    li.innerHTML = `<h4>Opcion: ${producto.id}</h4>
                  <p>Variedad: ${producto.nombre}</p>
                  <b>$${producto.precio}</b>
                 `;
    contenedor.append(li);
}


let saludo = document.getElementById("saludo");

let seccion = prompt("Ingresa la seccion que queres");

if(seccion === "tortas"){
    saludo.innerHTML = "<h1> Nuestras tortas</h1>";
    saludo.className = "cakes";
}else if(seccion === "tartas"){
    saludo.innerHTML = "<h1> Nuestras tartas</h1>";
    saludo.className = "pies";
}else if(seccion === "budines"){
    saludo.innerHTML = "<h1> Nuestros budines</h1>";
    saludo.className = "pudin";
}else if(seccion === "chocolates"){
    saludo.innerHTML = "<h1> Nuestros chocolates</h1>";
    saludo.className = "chocolate";
}else{
    saludo.innerHTML = "<h1> Bienvenido a Tentatortas</h1>";
}



let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
  e.preventDefault();
  if(e.target.children[2].value.includes("@") && e.target.children[2].value.includes(".")){
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "Te registraste exitosamente";
    mensaje.className = "aprobado";
    document.body.append(mensaje);
  }else{
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "no es un correo";
    mensaje.className = "error";
    document.body.append(mensaje);
    e.target.children[2].value = "";
  }
}

Swal.fire(
    'Genial',
    'Estos son nuestros productos!',
    'success'
  )

 let button = document.getElementById ("btn");

 button.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Tu Pedido/Consulta se registró correctamente. Te contactaremos a la brevedad'
      })
 });