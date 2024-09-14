
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deletePrevious() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;

}

function calculate() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
