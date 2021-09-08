# __Task 4__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/task4-integration-with-database/task.md)

Task due date / deadline date - 08.09.21 / 13.09.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _** 9 points**_
 
-----------
## __Evalution Criteria__

- [x] 1 - TASK 4.1 is implemented => Link to [SQL script with exemple data](https://github.com/SeLub/shop-aws-be/blob/task-4/product-service/sql_scripts/products_and_stocks.sql)
- [x] 3 - TASK 4.2 is implemented lambda links are provided and returns data
- [x] 4 - TASK 4.3 is implemented lambda links are provided and products is stored in DB (call TASK 4.2 to see the product)
- [x] 5 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. Link to a working Front-End application is provided for cross-check reviewer.

## __Additional options__

- [x] Ad.1: POST/products lambda functions returns error 400 status code if product data is invalid
- [x] Ad.2: All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- [x] Ad.3: All lambdas do console.log for each incoming requests and their arguments
- [x] Ad.4: Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa)
------------
# __FrontEnd__

![Image of Stock](https://github.com/SeLub/shop-aws-be/blob/task-4/product-service/stock_count.png)

```
Данные во FE отобраажаются от API, который в свою очередь берёт их из базы данных RDS AWS.
Картинки хранятся в специально созданнном S3 Bucket. Для него настроен CloudFront.
Рядом с ценой каждого товара выводится остаток на складе (stock).
Для товара у которого нет картинки используется стандартная картинка-заглушка
```

* FrontEnd integrated with product service HTTP API & images from S3 Bucket: https://d3ph6tvz43noms.cloudfront.net/ 
* FrontEnd Task-4 Pull Request : - https://github.com/SeLub/shop-aws-fe/pull/3

# __BackEnd__

Task   | Description | Method | URL 
-------|-------------|--------|-----
Task 4.1 | __SQL script__ with exemple data | GET | https://github.com/SeLub/shop-aws-be/blob/task-4/product-service/sql_scripts/products_and_stocks.sql
Task 4.2 | __getProductsList__ get ALL products from DB | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products
Task 4.2 | __getProductsById__ get product from DB by id | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/830be059-d085-4f6f-976e-d5bafa3e1162
Ad.1 | __getProductsById__ get product with __WRONG id__ | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/830be059-d085-4f6f-976e-d5bafa3e1165
Ad.2 | __getProductsById__ get product with __invalid id__ | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/777
Task 4.3 | __createProduct__ POST to add product to DB | POST | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/

------------

# __Swagger documentation__

https://app.swaggerhub.com/apis/SeLub/AWSShopAPI/1.0.0
