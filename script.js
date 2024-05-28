let string ="";
let button = document.querySelectorAll('.buttons');
Array.from(button).forEach((buttons) =>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string =  "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'del'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
        }
        
        
    });
});