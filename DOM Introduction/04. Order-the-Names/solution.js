function solve() {
 
    let addbut = document.getElementsByTagName('button')[0];
    let input = document.querySelector("input[type=text]");
    let fLetter='';
   
   
       addbut.addEventListener('click', function(){
      
        let InputString = input.value;
       
        fLetter = InputString[0].toUpperCase();
        let index = fLetter.charCodeAt(0) - 65;  
        //console.log(index);
        let Allol = document.querySelectorAll("ol li");  
        if (Allol[index].textContent === ''){
           Allol[index].textContent += InputString.charAt(0).toUpperCase() + InputString.slice(1).toLowerCase(); 
        }else{
           Allol[index].textContent += ", "+ InputString.charAt(0).toUpperCase() + InputString.slice(1).toLowerCase();  
        }
        input.value = '';
        
        });
    }