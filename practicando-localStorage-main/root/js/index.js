/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/



if(localStorage.getItem('comentariosGuardados2')==undefined)
{comentariosArr=[]}
else{
comentariosArr=JSON.parse(localStorage.getItem('comentariosGuardados2'))
for (i=0;i<comentariosArr.length;i++){
    nuevoP=document.createElement('p')
    nuevoP.textContent=comentariosArr[i]
    const divComentarios=document.querySelector('.comentarios')
    const porque=divComentarios.appendChild(nuevoP)}   
}

form=document.querySelector('form')
form.addEventListener('submit', (e)=>{
e.preventDefault()
captura=document.querySelector('#comentario').value
comentariosArr.push(captura)
localStorage.setItem('comentariosGuardados2',JSON.stringify(comentariosArr))
nuevoP=document.createElement('p')
nuevoP.textContent=captura
divComentarios=document.querySelector('.comentarios')
divComentarios.appendChild(nuevoP)})












