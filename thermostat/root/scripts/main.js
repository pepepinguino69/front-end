let temp={f:72,c:function(){
    return Math.round(5*(this.f-32)/9)}}
let a = 0
function up(){temp.f++;a = displayTemperature()}
function down(){temp.f--;a = displayTemperature()}
function displayTemperature(){
    document.getElementById("F").innerHTML = temp.f+"&deg"+" F";
    document.getElementById("C").innerHTML = temp.c()+"&deg"+" C";

}


