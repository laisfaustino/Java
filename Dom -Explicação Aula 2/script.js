const InputElement = document.querySelector('.new-taks-input')
const addTaksButton = document.querySelector('.new-task-button')
const taksContainer = document.querySelector('.taks-container')

function validarButao(){
    if(InputElement.value ===''){
    InputElement.classList.add('erro')
    }else{
        InputElement.classList.remove('erro')
        const texto = document.createElement('p')
        texto.innerText = InputElement.value 


        taksContainer.appendChild(texto)
    }        
}
addTaksButton.addEventListener('click',validarButao)

