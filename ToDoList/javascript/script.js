let listaArray = [];

function addInput() {
    let input = document.getElementById("inputTarefa").value;
    let lista = document.getElementById("Lista");

    listaArray.push(input);

    let tarefaPos = document.createElement('li');
    tarefaPos.setAttribute("class", input);
    lista.appendChild(tarefaPos);


    let inputOpc = document.createElement('input');
    inputOpc.setAttribute('type', 'checkbox');
    inputOpc.setAttribute('class', input);
    tarefaPos.appendChild(inputOpc);


    let labelTrefa = document.createElement('label');
    tarefaPos.appendChild(labelTrefa);
    labelTrefa.innerHTML = " " + input;


    console.log("Dado adicionado na lista");
    console.log(listaArray);
    document.getElementById("inputTarefa").value = " ";

}

function remocao() {
    let checkedInput = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedInput.forEach((value) => {
        //console.log(value);
        //console.log(document.querySelectorAll(`li.${value.className}`));
        document.removeChild(document.querySelectorAll(`li.${value.className}`));

    })
}


let btnEdit = document.getElementById("btnChange");
let btnOriginalTxt = btnEdit.textContent;
let newText = "Mudei";

function editar() {
    if (btnEdit.textContent == btnOriginalTxt) {
        btnEdit.textContent = newText;
    } else {
        btnEdit.textContent = btnOriginalTxt;
    }
}


