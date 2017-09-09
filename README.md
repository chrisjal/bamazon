# bamazon
Node application emulating an e-commerce storefront with a MySQL database. This application takes in orders and updates stock from the inventory in the database.
## Requirements
node.js, mySQL server
## Usage
1. Download the repository and navigate to the directory in terminal
1. Install the node dependencies (inquirer and mysql) by entering `npm install`into your terminal
1. Open an instance of MySQL server and edit the credentials on lines 7-10 in `bamazonCustomer.js`
1. Run the scripts located in `bamazon.sql`, then import `products.csv` to the `products` table you've just created
1. In terminal, enter `node bamazonCustmer.js`
1. Follow the prompts -- This data is being pulled from the MySQL database 
## Screenshots
![Imgur](https://i.imgur.com/kGhigsC.png)

