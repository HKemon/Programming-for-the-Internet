function convert() {
    var e = document.getElementById("convert");
    var val = e.options[e.selectedIndex].value;

    if (val === "lb-to-kg")
        document.getElementById("result").innerHTML = String(0.4536 * Number(document.getElementById("textval").value)) + " kilogram";
    else document.getElementById("result").innerHTML = String(2.2046 * Number(document.getElementById("textval").value)) + " pounds";
}