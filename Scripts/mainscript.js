// console.log("vinoth");
// const friends = ['vinoth','vindy'];

// console.log(friends);


// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends.lastIndexOf());

// for(i=0; i<5;i++) {
//     friends[i] = "vinoth"+i;
// }

// console.log(friends);

// // add elements 
// friends.push('rengu');
// friends.unshift('rengaraj');


// //remove elements 
// friends.pop();
// friends.shift();
// const ind = friends.indexOf('vinoth0');

// const boo = friends.includes('vinoth1');


// console.log(friends);
// console.log(boo);

const tips = [];
const tBills = [125,555,44];
const totals = [];

function calcTip(bills) {

    for (let i = 0; i < bills.length; i++) {
        
        if (bills[i] >=50 && bills[i] <=300) {
            tips.push (bills[i]*(15/100));
            totals.push(tips[i]+bills[i]);
        } else {
            tips.push (bills[i]*(20/100));
            totals.push(tips[i]+bills[i]);
        }
    }

return tips;



//     if(billValue == 50 || billValue == 300) {
//         tip = billValue*(15/100);
//         console.log(tip);
//     } else {
//         tip = billValue*(20/100);
//         console.log(tip);
//     }
// return tip;
}

console.log(calcTip(tBills));

