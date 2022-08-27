// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */
   let errores=[]
   let contarSegundos=()=>{}
   document.querySelector('main').innerHTML+=`<button class="btn-closeSession">Cerrar sesion</button>`
   btnSubmit=document.querySelector('.login-btn').addEventListener('click',(e)=>{
    cumplirCondiciones(e)})
   btncloseSession=document.querySelector('.btn-closeSession').addEventListener('click',(e)=>{
     eraseLocalStorage(e)})
   user =localStorage.getItem("user");
   if(user!=null&&pass!=null){
    document.querySelector('#email-input').value=user
    document.querySelector('#password-input').value=pass
   } else{document.querySelector('.btn-closeSession').classList.add('hidden')
    
   }

      function eraseLocalStorage(e){
        localStorage.clear();
      location.reload()}
   
   function validarEmail(str){
     if(str.indexOf('@')<1||str.indexOf('@')>str.length-3){errores.push('email1')}
       else
     if(str.indexOf('.')<3||str.indexOf('.')>str.length-2){errores.push('email2')}
       else
     if(str.indexOf('.',str.indexOf('@'))<0){errores.push('email3')}}
   
   function validarPass(str){
     if(str.length<5){errores.push('pass')}}
   
   function validarLogin(user,pass){
     valid=false
     baseDeDatos.usuarios.forEach(e=>{if(e.email==email&&e.password==pass){valid=true}})
     if(!valid){errores.push('user')}}
     
   function newSession(u,p){
     for(i=0;i<4;i++){setTimeout(contarSegundos(i),1000)}
     errores.length=0
     localStorage.setItem("user",u);
     formScreen=document.querySelector('form').classList.add('hidden')
     sessionLoading=document.querySelector('#loader').classList.remove('hidden')
     welcomeScreen=document.querySelector('h1').innerHTML='<h1> Bienvenido al sitio 😘 </h1>'
     document.querySelector('.btn-closeSession').classList.remove('hidden')
   }
   
   function cumplirCondiciones(e){
     e.preventDefault()
     email=document.querySelector('#email-input').value
     validarEmail(email)
     pass=document.querySelector('#password-input').value
     validarPass(pass)
     validarLogin(email,pass)
     if(errores.length==0)
       {newSession(email,pass)}
     else
       {mostrarErrores()}}
   
   function mostrarErrores(){
       aw=document.querySelector('#error-container')
       aw.classList.remove('hidden')
       aw.innerHTML='<small>Alguno de los datos ingresados son incorrectos</small>'
       errores.length=0
       setTimeout(borrarErrores,5000)}


   function borrarErrores(){
     aw=document.querySelector('#error-container')
     aw.classList.add('hidden')}
   