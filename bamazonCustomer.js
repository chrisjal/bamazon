// Add go back function in inquirer

let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'admin',
	password: 'password',
	database: 'bamazon_db'
});

connection.connect(function(err) {
	if (err) throw err;
	displayItems();
});

// Shows items currently in the database (regardless of stock)
let displayItems = function() {
	// querying all data in products table
	let query = "Select * FROM products";
	connection.query(query, function(err, data) {
		if (err) throw err;
		// Loops through products table to retrieve and display product info
		for (var i = 0; i < data.length; i++) {
			console.log("ID: " + data[i].item_id + " || " + "Product: " + data[i].product_name + " || " + "Price: $" + data[i].price);
		}
		// Call user selection function after loop is displayed
		selectItem();	
	});
};

// Asks user which product they want and the quantity
let selectItem = function() {
	inquirer.prompt([{
		name: "itemID",
		type: "input",
		message: "Enter the ID of the product you would like to purchase",
		validate: function(value) {
			// If value is number, allow input
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
	}, {
		name: "productUnits",
		type: "input",
		message: "How many units would you like to purchase?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
	}])
	.then(function(answer) {
		// Querying products table for price and stock_quantity columns WHERE (item_id: chosen by user)
		let query = "SELECT price, stock_quantity FROM products WHERE ?";
		connection.query(query, {item_id: answer.itemID}, function(err, data) {
			if (err) throw err;

			let price = data[0].price;
			let stockQuantity = data[0].stock_quantity;

			if (stockQuantity >= answer.productUnits) {
				// Pass information into another object
				// MAKE A BUY FUNCTION THAT GETS CALLED
				console.log("You bought it.");
			}
			else {
				// If user requests more units than remaining in db, purchase cannot continue -- user selections are displayed
				console.log("We're sorry, but there are only " + stockQuantity + " units remaining and you requested " + answer.productUnits + ". Please make another selection.");
				// restart selectItem function so user can enter acceptable # of units (this function)
				selectItem();
			}
		});
	});
};


let purchaseItem = function() {
	
}