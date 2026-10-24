const container = document.querySelector("#container");

function createDiv(){
    const div = document.createElement("div");
    div.classList="grid-item";
    container.appendChild(div);
}
for (let i=0;i<16;i++){
    let row ='';
    for(let j=1;j<=16;j++){
        createDiv();
    }
}