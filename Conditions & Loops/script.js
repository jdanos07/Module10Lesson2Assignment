// Task 1

let online = true

// Task 2

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (online == true) {
    console.log("Your cart contains the following items:");
    for (let item in cart)
        console.log('-', cart[item])
}
else {console.log('Users must log on to view cart')}

