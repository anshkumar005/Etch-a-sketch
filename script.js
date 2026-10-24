const body=document.querySelector("body")
const container = document.querySelector("#container");

gridLoop(16);

function createDiv(){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.addEventListener("mouseenter", function() {
        div.style.backgroundColor="red"
    })
    container.appendChild(div);
}

function gridLoop(input){
    for (let i=0;i<input;i++){
        let row ='';
        for(let j=1;j<=input;j++){
            createDiv();
        }
    }
}

const button = document.createElement('button');
button.textContent="boxes";
button.classList.add("boxesButton"); 
body.appendChild(button);

button.addEventListener("click", function(){
    let userInput = prompt("choose grid size between 10 to 100: ",10);
    userInput = parseInt(userInput);
    if(userInput>100 || userInput<10){
        alert("number too big or small choose b/w 10-100");
        return prompt(userInput,10);
    } else{
        container.style.setProperty("--size",userInput);
        container.innerHTML='';
        gridLoop(userInput);
    }
} );
