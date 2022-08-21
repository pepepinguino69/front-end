
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
  do {anoNacimiento=prompt('Ingrese su ano de nacimiento (aaaa) mayor a 1922')}while (isNaN(parseInt(anoNacimiento))||parseInt(anoNacimiento)<1922)
  datosPersona.edad=2022-parseInt(anoNacimiento)
  datosPersona.ciudad=prompt('Ingrse su ciudad')
  datosPersona.interesPorJs= "No"
  if(confirm("Le interesa el JS")){datosPersona.interesPorJs="Si"}}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
datos=[
  {campo:"nombre",valor:datosPersona.nombre},
  {campo:"edad",valor:datosPersona.edad},
  {campo:"ciudad",valor:datosPersona.ciudad},
  {campo:"javascript",valor:datosPersona.interesPorJs}]

  datos.forEach((element,index) => {
    document.getElementById(element.campo).innerHTML+=element.valor
  })
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  document.getElementById("obtener-materias").removeEventListener("click", recorrerListadoYRenderizarTarjetas)
  let dinamico=[]
  let elementos=[]
  let nuevoCard
  listado.forEach((element,index) => {
    for (i=0;i<4;i++){
  elementos=[
    {elem:'div',atr1:'class',val1:'caja',atr2:'id',val2:'div'+index,c1:''},
    {elem:'img',atr1:'src',val1:element.imgUrl,atr2:'alt',val2:element.lenguajes,c1:''},
    {elem:'p',atr1:'id',val1:'p1-'+index,atr2:'class',val2:'lenguajes',c1:element.lenguajes},
    {elem:'p',atr1:'id',val1:'p2-'+index,atr2:'class',val2:'bimestre',c1:element.bimestre}]
        dinamico[i]=document.createElement(elementos[i].elem);
        dinamico[i].setAttribute(elementos[i].atr1,elementos[i].val1)
        dinamico[i].setAttribute(elementos[i].atr2,elementos[i].val2)
        if (i==0){
      nuevoCard=document.getElementById('fila').appendChild(dinamico[i])}
        else
          {nuevoUso=nuevoCard.appendChild(dinamico[i]).innerHTML=elementos[i].c1}
        }
      })
    }
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  document.getElementById('sitio').classList.toggle('dark')
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let disableF=true;
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyF'){if(disableF){document.getElementById('sobre-mi').classList.remove('oculto');disableF=false;
  }}})
