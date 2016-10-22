Queries used to create DB: 

============Setup tables====================================
CREATE TABLE products (
id INTEGER(10) NOT NULL,
prod_name VARCHAR(45) NOT NULL, 
dept VARCHAR(45) NOT NULL, 
price DECIMAL(10, 2) NOT NULL,
qty INTEGER(3) NOT NULL, 
PRIMARY KEY (id)
);


=============Setup mock data================================== 
INSERT INTO bamazon.products (id, prod_name, dept, price, qty)
VALUES (001, "Bronze Seal Skin Clubbing Shoes", "apparel", 17.99, 3),
(002, "16th Century diamond encrusted crowbar", "auto", 284.33, 9),
(003, "piece of felt covered in cat hair", "home goods", 9.23, 19), 
(004, "human baby - tan", "accessories", 8.95, 12),
(005, "Sam's cough", "gift", 17.00, 999),
(006, "John Waters' mustache", "home goods", 8758.37, 1),
(007, "Unsavory truck tow hitch thing", "auto", 33.56, 23), 
(008, "Box of live lizards, 500 count", "home goods", 3.75, 387), 
(009, "Grow-a-Nian! water capsules", "kids", 1.33, 93833),
(010, "Baby's first audit tax kit", "kids", 84.29, 18),
(011, "Vintage 1979 tupperware with mystery sandwich", "gift", 12.00, 47)
;

