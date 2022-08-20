








/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre=prompt('ingrese su nombre');
  let anoNacimiento;
  do {anoNacimiento=prompt('Ingrse su ano de nacimiento (aaaa) mayor a 1922')}while (isNaN(parseInt(anoNacimiento))||parseInt(anoNacimiento)<1922)
  datosPersona.edad=2022-parseInt(anoNacimiento)
  datosPersona.ciudad=prompt('Ingrse su ciudad')
  datosPersona.interesPorJs= "No"
  if(confirm("Le interesa el JS (OK en caso afirmativo)")){datosPersona.interesPorJs="Si"}}




function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
document.getElementById("nombre").innerHTML+=datosPersona.nombre
document.getElementById("edad").innerHTML+=(datosPersona.edad)
document.getElementById("ciudad").innerHTML+=(datosPersona.ciudad)
document.getElementById("javascript").innerHTML+=(datosPersona.interesPorJs)


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  document.getElementById("obtener-materias").removeEventListener("click", recorrerListadoYRenderizarTarjetas)
  listado.forEach(element => {
    let nuevoDiv=document.createElement("div");
    nuevoDiv.setAttribute('class','box')
    nuevop1=document.createElement('p');
    nuevop1.setAttribute('id','p1')
    nuevop1.setAttribute('class','lenguajes')
    nuevop2=document.createElement('p');
    nuevop2.setAttribute('id','p2')
    nuevop2.setAttribute('class','bimestre')

    nuevaimg=document.createElement('img')
    nuevaimg.setAttribute('height','100px')
    nuevaimg.setAttribute('src',element.imgUrl)
    nuevaimg.setAttribute('alt',element.lenguajes)
    nuevaimg.setAttribute('title',element.lenguajes)
    nuevoUso=document.getElementById('fila').appendChild(nuevoDiv)
    nuevoUsop2=nuevoUso.appendChild(nuevaimg).src=element.imgUrl
    nuevoUsop1=nuevoUso.appendChild(nuevop1).innerHTML=element.lenguajes
    nuevoUsop1=nuevoUso.appendChild(nuevop2).innerHTML=element.bimestre
  });


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  document.getElementById('sitio').classList.toggle('dark')


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let disableK=true;
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyF'){if(disableK){document.getElementById('sobre-mi').classList.remove('oculto');disableK=false;
  }}})
