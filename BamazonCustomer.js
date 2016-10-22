/*
Initial setup. Connects the 
*/

var mysql = require('mysql'); //helps run db 
var inquirer = require('inquirer'); // helps with asking user questions 

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306, 
	user: "root", 
	password: "testing123", 
	database: "bamazon"
})

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id" + connection.threadID); 
})

/*
1) Running this should display the following: 
	-Items for sale,
	-IDs
	-Names
	-Prices
*/

connection.query('SELECT prod_name, id, price, qty FROM products', function(err, res) {
	if (err) {
		console.log(err);
	} else {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].prod_name + "\n ID: ", + res[i].id + " \n price: " + res[i].price + " \n qty: " + res[i].qty + "\n-------------------------------------"); 
		}
		console.log("==============================");
	}
	connection.end(); 
});

/*
Prompt TWO questions: 
1) Ask for ID of product to purchase 
2) Ask how many units of the item to purchase 
*/

var userPrompt = function() {
	inquirer.prompt([
		{
			type: "input",
			message: "Enter ID for product to purchase",
			name: "product"
		}, 
		{
			type: "input",
			message: "Enter quantity for product",
			name: "quantity"

		}
	])
	.then(function(answers)) {
		// connection.query("SELECT * FROM products WHERE id = ?", {
			// id: "product"
			console.log(JSON.stringify(inquirer, null, 2)); >>>> TROUBLESHOOT!!!!!!
		});
	

/*
App will check if there is enough in quantity for purchase:
	!!!If/else statement needed!!!
		If !enough > message: insufficent quantity!
		Else > update the db qty col && give total cost 
*/

userPrompt(); // will start prompt over 
 