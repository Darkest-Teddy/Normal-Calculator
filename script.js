let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

const responses = [" probably", " maybe", " idk", " i guess"];
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            randomAnswer = ((parseInt(string) + (Math.random() * (0.5 - 0.1) + 0.1)).toFixed(2).toString())

            input.value = randomAnswer + responses[Math.floor(Math.random() * responses.length)];
            string = randomAnswer;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'chill'){
            string = (Math.random() * (999 - 0.1) + 0.1).toFixed(2); 
            input.value = string;
        }
        else if (e.target.innerHTML == 'funk'){
            string = "┏(-_-)┛";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})