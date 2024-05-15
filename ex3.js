// 3.1
function calculateTotalCost(totalAmount,transactionsNum) {
    const transactionFee = 3;
    const interestRate = 0.001;
    let totalTransactionFee = transactionsNum * transactionFee;
    let totalInterest = totalAmount * interestRate;
    return totalAmount + totalTransactionFee + totalInterest;
}

const totalAmount = 1000 ;
const transactionsNum = 2 ;
console.log(`Total cost for the month: ${calculateTotalCost(totalAmount,transactionsNum)}`);


// 3.2
    // part1
// function greetFriends(name1, name2, name3) {
//     console.log(`Welcome ${name1}, ${name2}, ${name3}`);
// }
// const name1 = "meng";
// const name2 = "nhoopuk";
// const name3 = "sun";
// greetFriends(name1,name2,name3);

//     // part2
// function calculateAge(birthYear) {
//     const currentYear = 2024 ;
//     const age = currentYear - birthYear;
//     return age;
// }
// const birthYear = 2000;
// console.log(`Now you're ${calculateAge(birthYear)} year old`);

    // part 3
function greetFriendsWithAge(name1, name2, name3, callback) { 
    const ages = birthYears.map(callback);

    console.log(`Welcome ${name1}, you are ${ages[0]}.`);
    console.log(`Welcome ${name2}, you are ${ages[1]}.`);
    console.log(`Welcome ${name3}, you are ${ages[2]}.`);
}

function calculateAge(birthYear) {
    const currentYear = 2024;
    const age = currentYear - birthYear;
    return age;
}
const name1 = "meng";
const name2 = "nhoopuk";
const name3 = "sun";
const birthYears = [1990, 1995, 2000];


greetFriendsWithAge(name1, name2, name3, calculateAge);


