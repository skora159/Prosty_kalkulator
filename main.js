let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let wynik = document.getElementById("wynik");
let input3 = document.getElementById("input1");
let input4 = document.getElementById("input2");


button1.addEventListener("click", rowne);
button2.addEventListener("click", dodaj);
button3.addEventListener("click", odejmij);
button4.addEventListener("click", pomnoz);
button5.addEventListener("click", podziel);

let input1 = +document.getElementById("input1").value;
let input2 = +document.getElementById("input2").value;


function dodaj() {
    let input1 = +document.getElementById("input1").value;
    let input2 = +document.getElementById("input2").value;
    document.getElementById("dzialanie1").innerHTML = "składnik";
    document.getElementById("dzialanie3").innerHTML = "składnik";

    return x = input1 + input2;



}

function odejmij() {
    let input1 = +document.getElementById("input1").value;
    let input2 = +document.getElementById("input2").value;
    document.getElementById("dzialanie1").innerHTML = "odjemna";
    document.getElementById("dzialanie3").innerHTML = "odjemnik";

    return x = input1 - input2;

}

function pomnoz() {
    let input1 = +document.getElementById("input1").value;
    let input2 = +document.getElementById("input2").value;
    document.getElementById("dzialanie1").innerHTML = "czynnik";
    document.getElementById("dzialanie3").innerHTML = "czynnik";

    return x = input1 * input2;;
}

function podziel() {
    let input1 = +document.getElementById("input1").value;
    let input2 = +document.getElementById("input2").value;
    document.getElementById("dzialanie1").innerHTML = "dzielna";
    document.getElementById("dzialanie3").innerHTML = "dzielnik";

    return x = input1 / input2;


}

button1.addEventListener("click", rowne);

function rowne() {

    var value1 = Number(input3.value);
    var value2 = Number(input4.value);
    if (Number.isInteger(value1) && Number.isInteger(value2)) {
        wynik.innerHTML = x;
    } else {
        alert("błędna liczba !");
    }
}