const inputNovaTarefa = document.getElementById('novaTarefa');
const listaDeTarefa = document.getElementById('listaDeTarefas');
const botaoLimparLista = document.querySelector('.controls button');
const totalTarefasSpan = document.getElementById('totalTarefas');
const tarefasConcluidasSpan = document.getElementById('tarefasConcluidas')

const chaveLocalStorage = 'listaDeTarefas';
let tarefas = carregarTarefas();

atualizarContador();
renderizarTarefas();

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem(chaveLocalStorage);
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
}

function salvarTarefas() {
    localStorage.setItem(chaveLocalStorage, JSON.stringify(tarefas));
    atualizarContador();
}

function adicionarTarefa() {
    const textoTarefa = inputNovaTarefa.value.trim();
    if (textoTarefa !== '') {
        tarefas.push({ texto: textoTarefa, concluida: false });
        inputNovaTarefa.value = '';
        salvarTarefas();
        renderizarTarefas();
    }
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    salvarTarefas();
    renderizarTarefas();
}

function toggleConcluida(index) {
    tarefas[index].concluida = !tarefas[index].concluida;
    salvarTarefas();
    renderizarTarefas();
}

function limparLista() {
    tarefas = [];
    salvarTarefas();
    renderizarTarefas();
}

function renderizarTarefas() {
    listaDeTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.concluida;
        checkbox.addEventListener('change', () => toggleConcluida(index));

        const span = document.createElement('span');
        span.textContent = tarefa.texto;
        if (tarefa.concluida) {
            span.classList.add('concluida');
        }

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => removerTarefa(index));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botaoRemover);
        listaDeTarefas.appendChild(li);
    });
}

function atualizarContador() {
    totalTarefasSpan.textContent = tarefas.length;
    const concluidas = tarefas.filter(tarefa => tarefa.concluida).length;
    tarefasConcluidasSpan.textContent = concluidas;
}