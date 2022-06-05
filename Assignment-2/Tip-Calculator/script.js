const tip = document.getElementById("range");
const tit = document.querySelector(".rangePercent");
const tipamt = document.querySelector(".tipamt");
const amountTotal = document.querySelector(".bill");

tip.addEventListener("input", function (event) {
    
    let billInput = document.getElementById("num").value;
    let tipam = event.target.value;

    tit.textContent = `${tipam}`;
    tipamt.textContent = `${billInput * (tipam / 100).toFixed(2)}%`;
    console.log(tipam)
    amountTotal.textContent = tipCalc(parseFloat(billInput), parseFloat(tipam))
})

function tipCalc(amountTotal, tip) {
    let tipc = (amountTotal * tip / 100);
    return tipc + amountTotal;
}