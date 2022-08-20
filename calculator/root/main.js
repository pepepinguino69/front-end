
let displayContent=""
let parCount=0
let decimal=false
let resultado = 0
let signos = ['/','+','*']
let signosAmpliados = ['/','+','*',"-","(",")","c","C","=",'equal','DEL','.','parOpen','parClose']
let numeros = ["1","2","3","4","5","6","7","8","9","0"]
let contad=displayContent.length
let signo = true
let ejecutar = false;
let tecla="";
resFlag = false
document.addEventListener('keydown', (event) => {
    var tecla = event.key;
    var code = event.code;agregarString(tecla)}, false);

 
 
 











function agregarString(n){
    contad = displayContent.length;
    lastChar = displayContent[displayContent.length-1]
    signo=(displayContent.includes(lastChar))
    if (n=='Backspace')
        {n="DEL"};
    if (n=='Enter' && contad>1)
    {n = '='}


    if (signosAmpliados.includes(n)||numeros.includes(n.substring(n.length-1,n.length)))
        {n=n}
    else
        {n=""}

    
  
if (contad<1 &&signos.includes(n))
    {n=""}
if (contad>1){

if (signos.includes(n)&&signos.includes(lastChar))
    {n=""}

}
if (resFlag){resFlag=false;
    if(!signosAmpliados.includes(n))
    {displayContent=""}
}












if (n=='+'||n=='-'||n=='*'||n=='/'){decimal=false;}
if (n=='.'){if (!numeros.includes(lastChar)||decimal==true){n=""}else{decimal=true}}    

if(displayContent==0)
    {displaytContent=""};
if ((displayContent==""||displayContent=="0")&& n=='0')
    {n="";displayContent=""}
if(n=='parOpen')
    {if (displayContent==""||lastChar=='-'||signos.includes(lastChar))
    
        {n='(';parCount++}
    else
           {n=""}}
if (n=='parClose'){
    if (parCount>0)
        {n=')';parCount--}
    else
        {n=""}
    };
if(n=='C'){n='';displayContent=''};
if(n=='DEL'){n="";
    if (displayContent.length==1)
        {displayContent=""}
    else
        {displayContent=displayContent.substring(0,displayContent.length-1)}};
if (displayContent.length>30)
        {n=""}
if (n=="equal"||n=='=')
    {n="";parCount=0;resultado=math.evaluate(displayContent).toFixed(3);
    displayContent="Outside Range";
    resFlag=true;
    if (resultado%1==0){resultado = parseInt(resultado)}
    if(Math.abs(resultado)<10000000000000000){displayContent=resultado+""}}
    
    
displayContent+=n;document.getElementById("display").classList.remove("smallerFont")
if (displayContent.length>12)
    {document.getElementById("display").classList.add("smallerFont")}
if (displayContent.length>32)
    {n=""}

    
document.getElementById("display").innerHTML = displayContent;

}              

