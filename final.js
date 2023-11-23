function resolver() {
    var a = parseInt(document.getElementById("1").value)
    var b = parseInt(document.getElementById("2").value)
    var c = 1; d = 1; e = a - b; f = 1;
    for (var i = 1; i <= a; i++) {
        c *= i;
    }
    for (var i = 1; i <= b; i++) {
        d *= i;
    }
    for (var i = 1; i <= e; i++) {
        f *= i;
    }
    document.getElementById("3").textContent = (a / (b * f)).toFixed(4)
}