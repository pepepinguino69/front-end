//comentario
function onClick(){selectedCell = this.id;
    if(selectedShip!='no-ship'){
    workflow=checkWithinBoard(this.id);
    if(workflow){
    action=placeShip(selectedShip,selectedCell)}}
    else{alert(selectedCell+"borrar barcos");
       
       
       
       
       
       
       
       





            
            








    }




};
function unselectShips(){
    for(i=0;i<shipPosition.length;i++){
        for(j=0;j<shipPosition[i].size;j++)
            {document.getElementById("ship"+i+"id"+j).classList.remove("seleccionado")}}
}
function onClickShip(){selectedShip=this.id;
    let prueba= unselectShips()
    for(j=0;j<shipPosition[parseInt(selectedShip.substring(4))].size;j++)
        {document.getElementById("ship"+parseInt(selectedShip.substring(4))+"id"+j).classList.add("seleccionado");}
    selectedShip=parseInt(selectedShip.substring(4));
    if(shipPosition[selectedShip].isPlaced)
        {workflow=false}
    else
        {workflow=true;return selectedShip}}

function placeShip(whatShip,gridLocation){
    workflow=false;   
    shipPosition[whatShip]={"isPlaced":true,"verticalDirection":verticalOrientation,"Initial Position":gridLocation,"size":ships[whatShip],"boardUse":[]};
    let auxZero="0";
    for(i=0;i<ships[whatShip];i++){  
        let shipPlacementSelector=document.getElementById(gridLocation)
        shipPosition[whatShip].boardUse.push(gridLocation)
        if(verticalOrientation)
            {openRoundBox="openRoundBoxV";closeRoundBox="closeRoundBoxV"}
        else
            {openRoundBox="openRoundBoxH";closeRoundBox="closeRoundBoxH"}

        if(i==0){shipPlacementSelector.classList.add(openRoundBox)}
        if(i==ships[whatShip]-1){shipPlacementSelector.classList.add(closeRoundBox)}
        shipPlacementSelector.classList.add("idea")
        shipPlacementSelector.innerHTML=ships[whatShip];
        if (verticalOrientation){increment=10}else{increment=1}
        if(increment+parseInt(gridLocation.substring(2))>9){auxZero=""}
        gridLocation='id'+auxZero+ (increment+parseInt(gridLocation.substring(2)))}
        selectedShip='no-ship'
        let sendJson=true
    //for(r=0;r<5;r++){if(shipPosition[r].isPlaced==false){sendJson=false}}
    //if(sendJson){jSondata=
        document.getElementById("ship"+whatShip).classList.add("hidden")     
    }

function checkWithinBoard(){if (verticalOrientation?increment=10:increment=1);
    let startPosition=parseInt(selectedCell.substring(2))
    let endPosition=startPosition+(shipPosition[selectedShip].size-1)*increment;
    let flag=false
    if (endPosition<100){flag=true}
    if (startPosition%10>endPosition%10){flag=false}
    if(flag){for (i=startPosition;i<endPosition+1;i=i+increment){
    if (invalidPos.includes(i)){flag=false}
    }}
    if (flag){for(i=startPosition;i<endPosition+1;i=i+increment)
        {invalidPos.push(i);
        if(increment==10)
            {borderIncrement=1}
        else
            {borderIncrement=1};
        if(i-borderIncrement>-1){invalidPos.push(i-borderIncrement)}
        if(i+borderIncrement<100){invalidPos.push(i+borderIncrement)}}
        if (startPosition-increment>-1){invalidPos.push(startPosition-increment)}
        if (endPosition+increment<100){invalidPos.push(endPosition+increment)}
    return flag}}


function orientationSelection(){
    if(verticalOrientation)
        {orientationButtonText="Press for Vertical Positioning";
        orientationMsg="Ship will be positioned horizontally";
        verticalOrientation=false}
    else
        {orientationButtonText="Press for Horizontal Positioning";
        orientationMsg="Ship will be positioned vertically";
        verticalOrientation=true}
    controlCenterContainer.innerHTML=orientationButtonText
    mainContainer4.innerHTML=orientationMsg}

function clientJson(){let xhr = new XMLHttpRequest();
    xhr.open("POST", jsonURL);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }};
    
      xhr.send(JSON.stringify(shipPosition));
    
    }
function tryShoot(){
    const controlCenterContainer2=document.createElement("button")
    controlCenterContainer2.onclick=shootProcess
    controlCenterContainer2.setAttribute("id","button2")
    buttonContainer2=mainContainer.classList.add("buttonPosition")
    document.getElementById("contenedor").appendChild(controlCenterContainer2).innerHTML="probar modo disparo"
    document.getElementById("button2").onclick=shootProcess
}

function cleanBoard(){for (i=0;i<shipPosition.length;i++){if(shipPosition[i].boardUse!=undefined){
    map1 = shipPosition[i].boardUse.map(x =>
    document.getElementById(x).setAttribute("class","box"))}}
}
function shootProcess(){let map1=[];
    prueba =unselectShips()
    prueba =cleanBoard()
    for(i=0;i<shipPosition.length;i++){document.querySelector("#ship"+i).classList.remove('hidden')}
    document.getElementById("orientationMsg").innerHTML="Game Status";
    document.getElementById('button1').setAttribute("onclick",'')
    document.querySelector('#button1').classList.add('hidden');
    document.querySelector('#button2').classList.add('hidden');
    let unclickableDiv
    for (j=0;j<shipPosition.length;j++){
    document.querySelector("#ship"+j).setAttribute("onclick",'')
    }

    selectedShot=this.id;for(i=0;i<100;i++){if(i<10?aux="0":aux="");
    document.getElementById("id"+aux+i).onclick=shootProcess}
    if(selectedShot!='button2'){
        selectedShot=selectedShot.substring(2);
        let random=Math.floor((Math.random())*100)
        document.getElementById("id"+selectedShot).classList.add("agua")
        if(random<17||parseInt(selectedShot)>90){
            let barco=Math.round(Math.random()*5);
            barcoPos=Math.floor(Math.random()*shipPosition[barco].size);
            document.getElementById("ship"+barco+"id"+barcoPos).classList.add("negro");
            document.getElementById("ship"+barco+"id"+barcoPos).classList.remove("idea");
        }}}
shipPosition=[5]
ships=[5,4,3,3,2]
let workflow=false    
verticalOrientation=true;
let jsonURL="https://ptsv2.com/t/battleship#"
for (i=0;i<5;i++){
    shipPosition[i]={"isPlaced":false};
    shipPosition[i].size=ships[i]}
let shipBillboard;
let shipContainer;
let action;
let selectedCell;
let increment;
let selectedShip='no-ship';
invalidPos=[]
orientationButtonText="Press for Horizontal Positioning"
orientationMsg="Ship will be positioned vertically"
mainContainer=document.createElement("div")
mainContainer.setAttribute("id","contenedor")
document.getElementById("commandControl").appendChild(mainContainer)
controlCenterContainer=document.createElement("button")
controlCenterContainer.onclick=orientationSelection
controlCenterContainer.setAttribute("id","button1")
buttonContainer=mainContainer.classList.add("buttonPosition")
document.getElementById("contenedor").appendChild(controlCenterContainer).innerHTML=orientationButtonText
controlCenterContainer.onclick=orientationSelection
let prueba=tryShoot()
mainContainer4=document.createElement("div")
mainContainer4.setAttribute('id','orientationMsg')
document.getElementById("contenedor").appendChild(mainContainer4).innerHTML=orientationMsg;
for(j=0;j<ships.length;j++){
    shipContainer=document.createElement("div")
    shipContainer.classList.add("ship")
    shipContainer.setAttribute("id","ship"+j)
    document.getElementById("commandControl").appendChild(shipContainer);
    for (i=0;i<ships[j];i++){
        shipBillboard=document.createElement("div")
        document.getElementById("ship"+j).appendChild(shipBillboard);
        if(i==0){shipBillboard.classList.add("openRoundBoxH")}
        if(i==ships[j]-1){shipBillboard.classList.add("closeRoundBoxH")}
        if (i>0&&i<ships[j]-1){shipBillboard.classList.add("box")}
        shipBillboard.classList.add("idea")
        shipBillboard.innerHTML=ships[j]
        shipBillboard.setAttribute('id','ship'+j+'id'+i)
        shipContainer.onclick=onClickShip;
        
    }
}
let auxi="0"    
for(i=0;i<100;i++){
    if(i>9){auxi=""}
    const para = document.createElement("div");
    para.classList.add("box")
    para.classList.add("clase"+i)
    para.innerHTML =i;
    para.onclick=onClick
    para.setAttribute('id','id'+auxi+i)
    document.getElementById("wrapper").appendChild(para);}
