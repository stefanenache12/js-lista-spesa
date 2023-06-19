const listaSpesa = ['Pasta','Uova','Latte','Pane','Frutta'];

let listItems = document.getElementById('list');
let buttonAddListItem = document.getElementById('add-button')

let i = 0;

while(i < listaSpesa.length){
    
    listItems.innerHTML += `
        <li class="list-group-item">
            ${listaSpesa[i]}   
        </li>
    `
    i++;
}



