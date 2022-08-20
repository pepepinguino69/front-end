function dispMenu(){
   

openMenu = document.getElementById('openMenu')
closeMenu = document.getElementById('closeMenu')
logo = document.getElementById('logo')
DDFeatures = document.getElementById('DDFeatures')
DDCompany = document.getElementById('DDCompany')
Careers = document.getElementById('Careers')
About = document.getElementById('About')
main= document.getElementById('main')
Login= document.getElementById('Login')
openMenu.classList.add('disp-none')
openMenu.classList.remove('desktop')
closeMenu.classList.remove('disp-none')
logo.classList.add('visib-hidden')
logo.classList.remove('visib-visible')
DDFeatures.classList.remove('mobile')
DDCompany.classList.remove('mobile')
Careers.classList.remove('mobile')
About.classList.remove('mobile')
Login.classList.remove('mobile')
Login.classList.add('box')
main.classList.remove('help')
main.classList.add('column')
main.classList.add('box')

};

function hideMenu(){
   

    openMenu = document.getElementById('openMenu')
    closeMenu = document.getElementById('closeMenu')
    DDFeatures = document.getElementById('DDFeatures')
    DDCompany = document.getElementById('DDCompany')
    Login= document.getElementById('Login')
    openMenu.classList.remove('disp-none')
    closeMenu.classList.add('disp-none')
    logo.classList.add('visib-visible')
    logo.classList.remove('visib-hidden')
    DDFeatures.classList.add('mobile')
    DDCompany.classList.add('mobile')
    Careers.classList.add('mobile')
    About.classList.add('mobile')
    main.classList.remove('box')
    Login.classList.add('mobile')
    main.classList.add('help')
    Login.classList.remove('box')
    main.classList.remove('column')

    
    
    
    
    
    };


function mobilefun(){

openMenu = document.getElementById('openMenu')
closeMenu = document.getElementById('closeMenu')
DDFeatures= document.getElementById('DDFeatures')

DDCompany= document.getElementById('DDCompany')

Careers= document.getElementById('Careers')

Login= document.getElementById('Login')

logo2= document.getElementById('logo2')


About= document.getElementById('About')



if(openMenu.classList.contains('show'))
{ openMenu.classList.add('disp-none');
closeMenu.classList.remove('disp-none');closeMenu.classList.add('show');
DDFeatures.classList.remove('hide');
DDCompany.classList.remove('hide');
Careers.classList.remove('hide');
About.classList.remove('hide');
Login.classList.remove('hide');
logo2.classList.add('hide')







}
else{

    { 
    closeMenu.classList.add('disp-none');
    openMenu.classList.remove('disp-none');
    
    DDFeatures.classList.add('hide');
    DDCompany.classList.add('hide');
    Careers.classList.add('hide');
    About.classList.add('hide');
    Login.classList.add('hide');
    logo2.classList.remove('hide')

}

}}

    








function arifun(menu)

{
    features1 = document.getElementById('features1')
    features2 = document.getElementById('features2')
    features3 = document.getElementById('features3')
    features4 = document.getElementById('features4')
    company1 = document.getElementById('company1')
    company2 = document.getElementById('company2')
    company3 = document.getElementById('company3')
    upCompany = document.getElementById('upCompany')
    downCompany = document.getElementById('downCompany')
    upFeatures =   document.getElementById('upFeatures')
    downFeatures = document.getElementById('downFeatures');
    DDFeatures = document.getElementById('DDFeatures')
    DDCompany = document.getElementById('DDCompany')
    titulo =document.getElementById('titulo')
    
    
    
    
    if (menu=='Features')
    {
        if(downCompany.classList.contains('disp-none')){
        a=retraerCompany()}

        if (upFeatures.classList.contains('disp-none'))
        
            
            {b=desplegarFeatures()}

        else

            {b=retraerFeatures()}}
    else
        {if (downFeatures.classList.contains('disp-none'))
            {a=retraerFeatures()}

        if(upCompany.classList.contains('disp-none'))
            {a=desplegarCompany()}
            else
                {a=retraerCompany()}
        }
            
            
}
    
        
                 



   
function desplegarFeatures(){
   
    upFeatures.classList.remove('disp-none')
    downFeatures.classList.add('disp-none')
    DDFeatures.classList.add('borde')
    DDFeatures.classList.add('borde-alt1')
    features1.classList.remove('hide-button')
    features2.classList.remove('hide-button')
    features3.classList.remove('hide-button')
    features4.classList.remove('hide-button')
}

function retraerFeatures(){
    
        upFeatures.classList.add('disp-none')
        downFeatures.classList.remove('disp-none')
        DDFeatures.classList.remove('borde')
        DDFeatures.classList.remove('borde-alt1')
        features1.classList.add('hide-button')
        features2.classList.add('hide-button')
        features3.classList.add('hide-button')
        features4.classList.add('hide-button') 
        
    
    }


function desplegarCompany(){
    
    upCompany.classList.remove('disp-none')
    downCompany.classList.add('disp-none')
    DDCompany.classList.add('borde')
    DDCompany.classList.add('borde-alt2')
    company1.classList.remove('hide-button')
    company2.classList.remove('hide-button')
    company3.classList.remove('hide-button')
    
   
    
    
    

    }

function retraerCompany(){
    upCompany.classList.add('disp-none')
    downCompany.classList.remove('disp-none')
    DDCompany.classList.remove('borde')
    DDCompany.classList.remove('borde')
    company1.classList.add('hide-button')
    company2.classList.add('hide-button')
    company3.classList.add('hide-button')
     
}
            






































































