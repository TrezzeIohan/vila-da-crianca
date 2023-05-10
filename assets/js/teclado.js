//Teclado

function teclado(){
    //Configurações iniciais do teclado
    cKeyboard_config.input_target = '#input_selected';
    cKeyboard();

    //Altera qual é o alvo do teclado com base na id configurada como input_selected
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => {
        input.addEventListener('focus', alvoDoTeclado);
    });


    function alvoDoTeclado() {
    // Código a ser executado quando o input estiver em foco
    // Retira a id do elemento que antes era o alvo do teclado e dá a id para o novo
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

document.addEventListener('DOMContentLoaded', teclado);






