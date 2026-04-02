let contador = 0;
let input = document.getElementById('inputTarefa');
let btnadd= document.getElementById('btn-add');
let main = document.getElementById('AreaLista');

function addTarefa(){
   
    let valorInput = input.value;

    ++contador;

    if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `<div id="${contador}" class="item">
                <div onclick="marcarTarefa(${contador})" class="item-icone">   
                    <i id="icone_${contador}" class="fa-regular fa-circle"></i>
                </div>

                <div onclick="marcarTarefa(${contador})" class="item-nome">
                    ${valorInput} 
                </div>

                <div class="item-botao">           
                    <button onclick="deletar(${contador})" class="delete"><i class="fa-regular fa-trash-can"></i>Deletar</button>
                 </div>               
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var tarefa = document.getElementById(id);
    var icone = document.getElementById('icone_'+ id);

    if(tarefa.classList.contains('clicado')){
        tarefa.classList.remove('clicado');
        icone.classList.remove('fa-check-circle');
        icone.classList.add('fa-circle');

          main.insertBefore(tarefa, main.firstChild);

    }else{
        tarefa.classList.add('clicado');
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-check-circle');

        tarefa.parentNode.appendChild(tarefa);
    }
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnadd.click();
  }
});
