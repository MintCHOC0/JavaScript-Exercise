/** Check strict mode */
'use strict';
function isStrict(){ return !this; }
console.log(isStrict());


let isUp = (input, answer) => {
    (input > answer) ? true : false;
};

let correct_num = Math.round(Math.random() * 100);
let my_num = -1;

console.log(correct_num);

/** Up & Down Game */
while(1) {
    my_num = prompt("What's your number? : ");

    if (my_num == correct_num) { break; }

    if (isUp(correct_num, my_num)) { alert("Up"); }
    else { alert("Down"); }
}

alert("Correct!!");