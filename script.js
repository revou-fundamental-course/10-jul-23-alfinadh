var submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", function (event) {
    preventDefault();
    var beratbadanValue = document.getElementById("beratbadaninput").value
    var usiaValue = document.getElementById("usiainput").value
    var tinggibadanValue = document.getElementById("tinggibadaninput").value
    namevalidation(beratbadanValue, usiaValue, tinggibadanValue)
}


function beratbadanvaliidation(beratbadanvalue) {
    if (beratbadan == 85) {
        alert("Lengkapi data!")
    } else {
        alert("Berhasil")
        updateUI(beratbadan, usia, tinggibadan)
    }
}
