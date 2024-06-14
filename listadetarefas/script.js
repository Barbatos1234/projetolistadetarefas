function addtarefas() {
    const taskinput = document.getElementById('taskinput');
    const tasklist = document.getElementById('tasklist');
    const tasktext = taskinput.value.trim(); // obtém o valor do item e remove o espaço externo 
    if (tasktext !== '') { // verifica se o texto da tarefa não está vazio 
        const listitem = document.createElement('li'); //cria um novo item
        listitem.textContent = tasktext; //define o texto do item de lista
        const deletebtn = document.createElement('span'); //cria o botão de apagar
        deletebtn.textContent = 'X';
        deletebtn.className = 'delete';
        deletebtn.onclick = function(){
            tasklist.removeChild(listitem);
        };

            listitem.appendChild(deletebtn); //adiciona o botão de apagar ao item da lista
            tasklist.appendChild(listitem); //adiciona o item da lista a lista de tarefas
            taskinput.value = '';


        }
    }
    document.getElementById('taskinput').addEventListener('keypress', function(E) {
        if(E.key === 'Enter') { //verifica se a tecla pressionada é enter
            addtask(); //chama a função para adicionar a tarifa
        }
    })
        
    
