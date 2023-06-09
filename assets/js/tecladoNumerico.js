function tecladoNum(){
    // Configurações iniciais do teclado
    cKeyboardNum_config.input_target = '#input_selected';
    cKeyboardNum();
 


    //Altera qual é o alvo do teclado com base na id configurada como input_selected
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('click', alvoDoTeclado);
    });


    function alvoDoTeclado() {
    // Código a ser executado quando o input estiver em foco
    // Tenta retirar a id do elemento que antes era o alvo do teclado e, caso não haja nenhum 
    // com a id correspondente, dá essa id para o clicado
    try {
        const elementoAntigo = document.getElementById('input_selected');
        if (elementoAntigo.getAttribute('type') == 'number'){
            elementoAntigo.removeAttribute('id');
        }
        else{
            const focusedElement = document.activeElement;

            if (
                (focusedElement.tagName === 'INPUT' && focusedElement.getAttribute('type') === 'number')
              ) {
                focusedElement.setAttribute('id', 'input_selected');
              }
        }
        
   
    }
    catch (e) {
        const focusedElement = document.activeElement;

        if (
            (focusedElement.tagName === 'INPUT' && focusedElement.getAttribute('type') === 'number')
          ) {
            focusedElement.setAttribute('id', 'input_selected');
          }
        
    }   
        
    }

 

}

// Controla o display do teclado
function controlarDisplayTecladoNum(){
    // Elemento da página correspondente à área do teclado
    const kboard = document.getElementById('area-do-teclado-numerico');
     
    // Definir um evento para disparar a função
    document.addEventListener('click', function(event) {

        // Se o clique acontecer em um elemento input, mostrar teclado
        if(event.target.tagName == 'INPUT' && (event.target.getAttribute('type') == 'number')){
            kboard.classList.remove('d-none');
        
        }
        // Se o clique acontecer fora da área do teclado, esconder teclado
        else if (!event.target.closest('#area-do-teclado-numerico')) { 
            kboard.classList.add('d-none');
            
        } 
    });
}



document.addEventListener('DOMContentLoaded', tecladoNum);
document.addEventListener('DOMContentLoaded', controlarDisplayTecladoNum);