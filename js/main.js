const listaSpesa = ['Pasta','Uova','Latte','Pane','Frutta'];

let listItems = document.getElementById('list');
let buttonAddListItem = document.getElementById('add-button')
let inputListItem = document.getElementById('add-list-item');

let i = 0;

while(i < listaSpesa.length){
    
    listItems.innerHTML += `
        <li class="list-group-item">
            ${listaSpesa[i]}   
        </li>
    `
    i++;
}

buttonAddListItem.addEventListener('click',
    function(){

        let newListItem = inputListItem.value;
        listaSpesa.push(newListItem);
        listItems.innerHTML += `
        <li class="list-group-item">
            ${listaSpesa[listaSpesa.length - 1]}   
        </li>
        `;
        inputListItem.value = '';
    }
)

