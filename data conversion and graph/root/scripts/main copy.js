let msg="Hola Andre! Quedate quieta!!";
function hello(){document.getElementById("sandbox").innerHTML = msg}
let contador =2;
let a=0
function estado(){
    
    if (contador%2==0)
        {contador++;msg="Hola Andre! Quedate quieta!!"} 
    else
        {contador--;msg="movete chiquita movete. deja esa timidez"}
}
