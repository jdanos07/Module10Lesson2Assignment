// Task 1

let balance = 0
let deposit = 50

function depositing(deposit) {
    balance += deposit
    return balance
}
console.log(depositing(deposit))

// Task 2

let withdrawl = 20
function withdrawing(withdrawl) {
    balance -= withdrawl
    return balance
}
console.log(withdrawing(withdrawl))

//Task 3

function currentBalance(balance) {
    return balance
}
console.log(currentBalance(balance))

