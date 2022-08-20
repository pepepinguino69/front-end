const jsonData= require('./data.json'); 
const datos=[]
const etiquetas=[]
for(let i=0;i<jsonData.length;i++){datos[i]=jsonData[i].amount;etiquetas[i]=jsonData[i].day}
console.log(datos,etiquetas)



