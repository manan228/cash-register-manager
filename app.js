var billAmount = document.querySelector("#billAmount");
var userCash = document.querySelector("#userCash");
var process = document.querySelector("#process");
var output = document.querySelector("#output");

var twoThousand = 0
var fiveHundred = 0
var oneHundred = 0
var twenty = 0
var ten = 0
var five = 0
var one = 0

var difference = 0

function onClickHandler() {

    var billValue = billAmount.value;
    var cashValue = userCash.value;

    difference = cashValue - billValue;

    while (difference > 0) {

        if (difference >= 2000) {

            twoThousand = twoThousand + 1;
            difference = difference - 2000;

        } else if (difference >= 500) {

            fiveHundred = fiveHundred + 1;
            difference = difference - 500;

        } else if (difference >= 100) {

            oneHundred = oneHundred + 1;
            difference = difference - 100;

        } else if (difference >= 20) {

            twenty = twenty + 1;
            difference = difference - 20;

        } else if (difference >= 10) {

            ten = ten + 1;
            difference = difference - 10;

        } else if (difference >= 5) {

            five = five + 1;
            difference = difference - 5;

        } else if (difference >= 1) {

            one = one + 1;
            difference = difference - 1;
        }
        
    }

    output.innerHTML = "Two Thousand: " + twoThousand + " Five Hundred: " + fiveHundred + " One Hundred: " + oneHundred + " Twenty: " + twenty + " Ten: " + ten + " Five: " + five + " One: " + one
}

process.addEventListener("click", onClickHandler)