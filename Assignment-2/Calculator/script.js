var a = '';
var b = '';
var num = [];
var ans;

function sendNum(digit) {

    num.push(digit);

    if (num.length != 1) {
        a = '';
        document.getElementById('screen').innerHTML = a; // clearing the screen.
    }


    for (i = 0; i < num.length; i++) {

        a = a + num[i];

    }

    document.getElementById('screen').innerHTML = a;	// displaying the concatenated string


}

function equalTo() {
    document.getElementById('screen').innerHTML = '';

    for (i = 0; i < num.length; i++) {

        b = b + num[i];
    }

    ans = eval(b);

    document.getElementById('screen').innerHTML = ans;		// result display

    while (num.length > 0) {
        num.pop();
    }

    num.push(ans.toString());


}


function clearScr() {
    document.getElementById('screen').innerHTML = '';

    while (num.length > 0) {
        num.pop();
    }

    a = '';
    b = '';
}