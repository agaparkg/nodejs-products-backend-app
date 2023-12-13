/ - home path  
GET - /products - All products  
GET - /products/:id - Single product  
POST - /products (req.body) - Add new product  
PATCH - /products/:id (req.body & req.params.id) - Update a product  
DELETE - /products/:id (req.params.id) - Delete a product
DELETE - /:file_name (req.params.file_name) - Delete specific file path under ./data folder

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

This nodejs app has a feature of creating an endpoint if it doesn't exist
For instance, /products is there by default and contains some data, but if
user hits /users or /cars, these routes do not exist, and we will see this
as a result. However, since it doesn't exist, backend will create it dynamically.
So, filename with that route will be created in the server.

```
{
  "error": "users was not found",
  "message": "Generating a new file now. Please refresh this page."
}
```
