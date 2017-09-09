CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(50),
	price DECIMAL(8,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

SELECT * FROM products;
