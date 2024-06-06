//question 2


// Create a Node.js application to manage personal finances using a Map to store expense details. Implement the following functionalities:
// a. Add an expense with a unique ID, description, amount, and category. If the ID already exists, print an error message.
// b. Remove an expense using its ID. If the expense is not found, print an error message.
// c. Print all recorded expenses with their details.
// d. Calculate and print the total amount of all recorded expenses.
// e. Print a summary report of expenses categorized by their category, showing the total amount spent in each category.



// const expenses = new Map();
// expense.set(1,"Cosmetic bill",100,"Cosmetics")
// expense.set(2,"Movie bill",300,"Movie")
// expense.set(3,"Loan bill",1200,"Loan")
// expense.set(4,"Resturant",500,"Food")

// console.log(expense);
const expenses = new Map();

function addExpense(id, description, amount, category) {
    if (expenses.has(id)) {
      console.log(`error: expense with id ${id} already exists.`);
    } else {
      expenses.set(id, { description, amount, category });
      console.log(`expense added with id ${id}.`);
    }
  }

addExpense(1,'Pizza',200, 'Food')
addExpense(2,'Facewash',80, 'Cosmetic')
addExpense(2,'Pen',30, 'Education')
addExpense(3,'Turbo',500,'Movie')

function removeexp(id){
    if(!expenses.has(id)){
        console.log(`the expense:${id} is not found`)
    }
    else {
        expenses.delete(id)
        console.log(`expense with ${id} removed`)
    }
    }

    function totalAmount(){
        let Totalexp=0;
        expenses.forEach(expenses =>{
            Totalexp+=expenses.amount
            
        })
        console.log(`\ntotal expense:`,Totalexp)
    }

function printexp() {
    if (expenses.size == 0) {
      console.log('no expenses recorded.')
    } else {
      console.log('\nrecorded expenses:')
    //   console.log('ID\t\tDescription\t\tAmount\t\tCategory')
      expenses.forEach((expense, id) => {
        console.log(`ID: ${id}, Description: ${expense.description}, Amount: ${expense.amount}, Category: ${expense.category}`);
        // console.log(`${id}\t\t${expense.description}\t\t${expense.amount}\t\t${expense.category}`)
    });
    }
  }

  function category(category){
    console.log('\ncategory and amount')
    expenses.forEach(expenses=>{
            console.log(`${expenses.category}:${expenses.amount}`)
            
    })
    totalAmount()
  }


printexp();
removeexp(1);
totalAmount();
category();