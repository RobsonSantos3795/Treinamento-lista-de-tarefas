
tarefas = [];

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    

    inputTarefa.value = "";

    if (tarefa == "") {
        let mensagemErro = "Por favor, isira uma tarefa.";
        document.getElementById("mensagem").textContent = mensagemErro;
        
    } else {
        let mensagemValida = "Tarefa adicionado com sucesso!";
        document.getElementById("mensagem").textContent = mensagemValida;
        
        tarefas.push(tarefa);
        renderizarTarefa();
        
    }
}

function renderizarTarefa() {
    let listaTarefa = document.getElementById("listaTarefa");
    listaTarefa.innerHTML = "";

        for ( let i = 0; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefas[i];
            
            let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => removerTarefa(i);

            novaTarefa.appendChild(botaoRemover);
            listaTarefa.appendChild(novaTarefa);
        }

}

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefa();
}

function entrou() {
    let cor = document.getElementById("cor");
    cor.style.background = "yellow";
}

function saiu() {
    let cor = document.getElementById("cor");
    cor.style.background = "greenyellow";
}