/ - home path  
GET - /products - All products  
GET - /products/:id - Single product  
POST - /products (req.body) - Add new product  
PATCH - /products/:id (req.body & req.params.id) - Update a product  
DELETE - /products/:id (req.params.id) - Delete a product

Sample Data:

```json
[
    {
        "id": "42aff213-0b48-4875-85b8-b15cefd55b29",
        "name": "Airpods Wireless Bluetooth Headphones",
        "description": "Bluetooth technology lets you connect it with compatible devices",
        "price": 89.99
    },
    ...
    ...
    ...
]
```
