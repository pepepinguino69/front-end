
let puntaje =0

const estados=['piedra','papel','tijera'];
if(localStorage.getItem('puntaje')!=null){
  puntaje = parseInt(localStorage.getItem('puntaje'))}




function jugar(n){
let pc = Math.floor(Math.random()*3);



if (pc==n){puntaje+=0}
else if (n==0&&pc==2||n==1&&pc==0||n==2&&pc==1)
{puntaje+=1}
else {puntaje--}
a=juegaMaquina(pc,puntaje,n)
}

function juegaMaquina(param,score,humano){
for(i=0;i<3;i++)
{
    document.getElementById((i+3).toString()).classList.add("hide")




document.getElementById(i.toString()).classList.remove("display")}
document.getElementById((humano+3).toString()).classList.remove("hide")
document.getElementById((humano+3).toString()).classList.add("disabled")
document.getElementById(param.toString()).classList.add("display")
document.getElementById("resultado").innerHTML = "PUNTAJE:"+score.toString();
document.getElementById("newGame").classList.remove("hide")




}   
function jugarNuevamente(){
localStorage.setItem('puntaje', String(puntaje));
location.reload()}



function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }    









