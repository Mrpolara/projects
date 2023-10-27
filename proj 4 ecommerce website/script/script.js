let total = 0;
function addOrRemove(price) {
  if (price == 100) {
    let isTrue = document.getElementById("laptop").checked;
    if (isTrue) total += price;
    else total -= price;
  }

  if (price == 200) {
    let isTrue = document.getElementById("nintendo").checked;
    if (isTrue) total += price;
    else total -= price;
  }

  if (price == 300) {
    let isTrue = document.getElementById("vr").checked;
    if (isTrue) total += price;
    else total -= price;
  }

  if (price == 400) {
    let isTrue = document.getElementById("playstaion").checked;
    if (isTrue) total += price;
    else total -= price;
  }

  if (price == 500) {
    let isTrue = document.getElementById("xbox").checked;
    if (isTrue) total += price;
    else total -= price;
  }
  console.log(total);
  document.getElementById("amountText").innerHTML = total;

  let discount = "(" + (12 * total) / 100 + ")";
  document.getElementById("discountText").innerHTML = discount;

  let final = total - (12 * total) / 100;
  document.getElementById("totalPayableAmountText").innerHTML = final;
}

// function resetBtn() {

//   total = 0;
//   console.log("hello");
//   document.getElementById("amountText").innerHTML = " ";
//   document.getElementById("discountText").innerHTML = " ";
//   document.getElementById("totalPayableAmountText").innerHTML = " ";  
// }

document.getElementById("resetBtn").addEventListener("click", function () {
  location.reload();
});