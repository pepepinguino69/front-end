let viewPorts=[]
viewPorts[0]={id:'C',}
viewPorts[1]={id:'F'}
viewPorts[2]={id:'H'}

let images = []
images [0]='img/rock.png'
images[1]='img/paper.png'
images [2]='img/scissors.png'

images[3]='img/image-hero-mobile.png'
images[4]='img/favicon-32x32.png'



let carrousel={currentPicture:0,
    maxViewports:viewPorts.length,
    maxImages:images.length,
    forward:function(){if(this.currentPicture+this.maxViewports<this.maxImages){this.currentPicture++};this.newPic()},
    backward:function(){if(this.currentPicture>0){this.currentPicture--};this.newPic()},
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
    
    



    



