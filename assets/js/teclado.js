//Teclado
function teclado(){
    // Configurações iniciais do teclado
    cKeyboard_config.input_target = '#input_selected';
    cKeyboard();

    
    // Elemento da página correspondente à área do teclado
    const kboard = document.getElementById('area-do-teclado');


    //Altera qual é o alvo do teclado com base na id configurada como input_selected
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', alvoDoTeclado);
    });


    function alvoDoTeclado() {
    // Código a ser executado quando o input estiver em foco
    // Tenta retirar a id do elemento que antes era o alvo do teclado e, caso não haja nenhum 
    // com a id correspondente, dá essa id para o clicado
    try {
        const elementoAntigo = document.getElementById('input_selected');
        elementoAntigo.removeAttribute('id');
   
    }
    catch (e) {
    }   
        const focusedElement = document.activeElement;
        focusedElement.setAttribute('id', 'input_selected');
    }

 

}

// Controla o display do teclado
function controlarDisplayTeclado(){
    // Elemento da página correspondente à área do teclado
    const kboard = document.getElementById('area-do-teclado');
     
    // Definir um evento para disparar a função
    document.addEventListener('click', function(event) {

        // Se o clique acontecer em um elemento input, mostrar teclado
        if(event.target.tagName == 'INPUT'){
            kboard.classList.remove('d-none');
        }
        // Se o clique acontecer fora da área do teclado, esconder teclado
        else if (!event.target.closest('#area-do-teclado')) { 
            kboard.classList.add('d-none'); 
        } 
    });
}



document.addEventListener('DOMContentLoaded', teclado);
document.addEventListener('DOMContentLoaded', controlarDisplayTeclado);