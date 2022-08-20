var images = []
images [0]='img/rock.png'
images[1]='img/paper.png'
images [2]='img/scissors.png'
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
let fileList = this.files; 
let numFiles = document.getElementById('input').files.length;
let imagesPath='img/'
console.log(imagesPath+document.getElementById('input').files[0])
for (let i = 0; i < numFiles; i++) {
   images[i]=imagesPath+document.getElementById('input').files[i].name;
    console.log(images[i])

   
  // …
}}

let numFiles = images.length





let viewPorts=[]
viewPorts[0]={id:'C',}
viewPorts[1]={id:'F'}













let carrousel={currentPicture:0,
    maxViewports:viewPorts.length,
    maxImages:images.length,
    forward:function(){carrousel.maxImages=images.length; if(this.currentPicture+this.maxViewports<this.maxImages){this.currentPicture++};this.newPic()},
    backward:function(){carrousel.maxImages=images.length;if(this.currentPicture>0){this.currentPicture--};this.newPic()},
    newPic:function(){for(let i=0;i<this.maxViewports;i++)
        {document.getElementById(viewPorts[i].id).setAttribute('src',images[this.currentPicture+i])}}
}



/*function displayImage(src, width, height, alt,containerId,posicion) {
   // let element = document.getElementById(containerId);
    //while (element.firstChild) {
        //element.removeChild(element.firstChild)};
    a = document.createElement('img');
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;

    document.getElementById(containerId).appendChild(a);}*/
    
    



    



