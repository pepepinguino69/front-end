
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
  prompts=
  [
    'ingrese su nombre',
    'Ingrese su ano de nacimiento (aaaa) mayor a 1922',
    'Ingrese su ciudad',
    'Le interesa el JS'
  ]
  
  let index=-1
  for (element of Object.keys(datosPersona)) {
    index++;
    if(index<3)
      {datosPersona[element]=prompt(prompts[index])}
    else
      {datosPersona[element]=confirm(prompts[index])}}
    datosPersona.edad=2022-parseInt(datosPersona.edad);
    datosPersona.interesPorJs=datosPersona.interesPorJs?'Si':'No'}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
datos=document.getElementsByTagName('span');
let i=0
for (const item of datos) 
  {document.getElementById(item.getAttribute('id')).innerHTML+=datosPersona[Object.keys(datosPersona)[i]];
  i++
  }
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  document.getElementById("obtener-materias").removeEventListener("click", recorrerListadoYRenderizarTarjetas)
  listado.forEach(element => {
  markup= `
  <div class="caja">
     <img src=${element.imgUrl} alt='imagen con el logo de '+ ${element.lenguajes}>
     <p class="lenguajes">${element.lenguajes}</p>
     <p class="bimestre">${element.bimestre}</p>
  </div>`
 nuevoCard=document.getElementById('fila').innerHTML+=markup})
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById('sitio').classList.toggle('dark')
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let disableF=true;
document.addEventListener('keydown', (event) =>{
  if (event.code == 'KeyF'){if(disableF){document.getElementById('sobre-mi').classList.remove('oculto');
  disableF=false;
  }}})
