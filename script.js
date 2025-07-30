function sendData(num) {
    document.querySelector("#data").value += num
}

function calculate() {
    let result = document.querySelector("#data").value
    document.querySelector("#data").value = eval(result)
}

function delData() {
    document.querySelector("#data").value = ''
}

function backspace() {
    let innerData = document.querySelector("#data").value;
    document.querySelector("#data").value = innerData.slice(0, -1);
}