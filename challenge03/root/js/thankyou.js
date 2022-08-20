 function validate() {
    
     var ele = document.getElementsByName('rating');
     let r=0
     for(i = 0; i < ele.length; i++) {
         if(ele[i].checked){
            document.getElementById('card').className = 'hidden';
            document.getElementById('card2').className = 'card2';

            r=ele[i].value;
            document.getElementById("result").innerHTML
            = "You selected " +r+" out of 5" }
     }
    }






