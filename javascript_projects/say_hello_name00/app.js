const btnElement = document.querySelector('button');
const spanName = document.getElementById('updateName');

 btnElement.onclick =function() {
    const yourMess = prompt("Enter your Message");
    spanName.textContent = yourMess;
}