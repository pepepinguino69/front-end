const jugadas=[];
let juego=[];
jugadas[0]={nombre:"Piedra",codigo:0,peorQue:[1,3],mejorQue:2,
perder:function(jugadaOtro){for(i=0;i<this.peorQue.length;i++){if(jugadaOtro==this.peorQue[i]){return true}else{return false}}}}
jugadas[1]={nombre:"Papel",codigo:1,peorQue:[2],mejorQue:0,
perder:function(jugadaOtro){for(i=0;i<this.peorQue.length;i++){if(jugadaOtro==this.peorQue[i]){return true}else{return false}}}}
jugadas[2]={nombre:"Tijera",codigo:2,peorQue:[0,3],mejorQue:1,
perder:function(jugadaOtro){for(i=0;i<this.peorQue.length;i++){if(jugadaOtro==this.peorQue[i]){return true}else{return false}}}}
jugadas[3]={nombre:"Spock",codigo:3,peorQue:[1],mejorQue:[0,2],
perder:function(jugadaOtro){for(i=0;i<this.peorQue.length;i++){if(jugadaOtro==this.peorQue[i]){return true}else{return false}}}}
let jugadores=[];
jugadores[0]={nombre:"Ariel",score:0}
jugadores[1]={nombre:"PC",score:0}
partido={maxGames:3,playedGames:0,estado:'normal'}
let primero = jugar();
let despues = resultadosFinales();

let Jugadas = class {
    constructor(nombre, codigo, peorQue,mejorQue,resultado,perder) {
      this.nombre = nombre;
      this.codigo = codigo;
      this.peorQue = peorQue;
      this.mejorQue = mejorQue}
      perder(jugadaOtro){for(i=0;i<this.peorQue.length;i++)
        {result: if(jugadaOtro==this.peorQue[i]){return true}else{return false}}}}
    
  



function jugar(){
    for (let i=0;i<partido.maxGames;i++){
    if(Math.abs(jugadores[0].score-jugadores[1].score)>partido.maxGames-partido.playedGames)
     {break}
    humano=jugadaHumano()
    if (partido.estado=='normal'){
        humano--;
        pc = Math.floor(Math.random()*jugadas.length)
        partido.playedGames++
        alert(resultados(humano,pc))}
    else
        {break}
    }

}

function resultadosFinales(){
    
      
    if (partido.estado=='normal'){
        if (jugadores[0].score=jugadores[1].score){
            msg="EMPATE FINAL"}
        else{
            a=jugadores[encontrarGanador()].nombre
            msg='Gano ****** '+a+'*******'}
        alert(msg)
    }
    else
        alert("PARTIDO INTERRUMPIDO")
 }
    

function resultados(persona,compu){
    ganador=""
    msg =`Estado de Juego: ${partido.estado}\n\nPartido: ${partido.playedGames}\n`

    if (persona==compu)
        {msg+="Empate"}

    else{
        if (jugadas[persona].perder())
            {ganador=jugadores[1].nombre;jugadores[1].score++}
        else
            {ganador=jugadores[0].nombre;jugadores[0].score++}
        msg += (`Gano: ${ganador}\n\n${jugadores[1].nombre}: ${jugadas[compu].nombre}\n\n${jugadores[0].nombre}: ${jugadas[persona].nombre}`)}
    return msg}
     

function jugadaHumano(){
menu = 'Ingresa tu jugada (0 sale)'+'\n'+'\n'
for (i=0;i<jugadas.length;i++){menu+=i+1+'-'+jugadas[i].nombre+"\n"}
do { humano=prompt(''+
jugadores[0].nombre+":"+jugadores[0].score+'\n\n'+jugadores[1].nombre+":"
+jugadores[1].score+'\n'+menu)}while (humano<0||humano-1>jugadas.length);
if (humano==0){partido.estado='cancelado'}
return humano}

function encontrarGanador(){
    
    let indiceGanador=0
    if (jugadores[1].score>jugadores[0].score){indiceGanador=1}
    return indiceGanador
}
//
//    //jugadores.map(function(obj){     
    //if (obj.score > maxscore) maxobj = obj});}