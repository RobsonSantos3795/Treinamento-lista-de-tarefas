let tarefas = [];

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    inputTarefa.value = "";

    if (tarefa == "") {
        let mensagemErro = "Adicione uma tarefa válida, por favor!";
        let elementoMsg = document.getElementById("mensagem");
        elementoMsg.textContent = mensagemErro;
        elementoMsg.style.color = "red";
    } else {
        let mensagemValida = "Tarefa adicionada com sucesso!"
        let elementando = document.getElementById("mensagem");

        elementando.textContent = mensagemValida;
        elementando.style.color = "green";

        tarefas.push(tarefa);
        renderizarTarefa();
    }
}

function renderizarTarefa() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    // --- ALTERAÇÃO 1: Lógica do botão Limpar Tudo ---
    // Pegamos o botão que criamos no HTML
    let btnLimpar = document.getElementById("btnLimparTudo");

    // Se houver tarefas, mostra o botão (block). Se não, esconde (none).
    if (tarefas.length > 0) {
        btnLimpar.style.display = "block";
    } else {
        btnLimpar.style.display = "none";
    }
    // -----------------------------------------------

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i] + " "; // Adicionei um espaço para estética

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerBotao(i);
        
        // Pequena margem para separar os botões
        botaoRemover.style.marginRight = "5px"; 

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarBotao(i);

        /* ALTERAÇÃO 2: Removi a criação do botão "Limpar Tudo" daqui.
           Ele não deve ser criado para cada item individualmente.
        */

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        lista.appendChild(novaTarefa);
    }
}

function removerBotao(i) {
    tarefas.splice(i, 1);
    renderizarTarefa();
}

function editarBotao(i) {
    let tarefaEditada = prompt("Edite a tarefa: ", tarefas[i]); // Dica: Mostra o valor atual no prompt
    // Verifica se não é nulo (cancelar) e se não está vazio
    if (tarefaEditada !== null && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefa();
    }
}

// ALTERAÇÃO 3: Não precisamos do parâmetro 'i' aqui, pois limpamos tudo
function limparTarefa() {
    tarefas = []; // Zera o array (mais seguro que tarefas.length = "0")
    renderizarTarefa(); // Isso vai atualizar a tela e esconder o botão automaticamente
    
    let mensagemGeral = "Todas as tarefas apagadas com sucesso!";
    let geral = document.getElementById("mensagem");
    geral.textContent = mensagemGeral;
    geral.style.color = "orange"; // Mudei para laranja para diferenciar
}
