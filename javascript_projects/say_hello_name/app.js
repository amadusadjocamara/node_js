const btnElement = document.getElementById('btnName')
const updateText = document.getElementById('updateText')

btnElement.onclick =function(){
    const yourMessage = prompt("Enter you Mensage: ");
    updateText.textContent = yourMessage;
}