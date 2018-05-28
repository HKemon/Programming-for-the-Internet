function minMax() {
    var fields = document.getElementById("integers").value.split(',');

    var max = 0;
    var min = 1000000;
    var sum = 0;
    var average = 0;
    var reverseOrder = [];

    for (var i = 0; i < fields.length; i++) {
        var x = Number(fields[i]);
        if (x > max) max = x;
        if (x < min) min = x;
        sum += x;
        reverseOrder[fields.length - i] = x;
    }
    average = sum / fields.length;

    var ro = "";
    for (var i = 1; i < reverseOrder.length; i++) {
        if (i == 1) ro = String(reverseOrder[i]);
        else ro += ","+String(reverseOrder[i]);
    }
    document.getElementById("max").innerHTML = String(max);
    document.getElementById("min").innerHTML = String(min);
    document.getElementById("sum").innerHTML = String(sum);
    document.getElementById("average").innerHTML = String(average);
    document.getElementById("reverseOrder").innerHTML = String(ro);
}