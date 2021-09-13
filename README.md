# __Task 5__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/task5-import-to-s3/task.md)

Task due date / deadline date - ??.??.?? / ??.09.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _** ? points**_
 
-----------
## __Evaluation criteria__

- [x] 1 - File serverless.yml contains configuration for importProductsFile function
- [x] 3 - The importProductsFile lambda function returns a correct response which can be used to upload a file into the S3 bucket
- [x] 4 - Frontend application is integrated with importProductsFile lambda
- [x] 5 - The importFileParser lambda function is implemented and serverless.yml contains configuration for the lambda

## __Additional (optional) tasks__

- [x] Ad.1: +1 (for JS only) - async/await is used in lambda functions
- [x] Ad.2: +1 (All languages) - importProductsFile lambda is covered by unit tests ((for JS only) aws-sdk-mock can be used to mock S3 methods
- [x] Ad.3: +1 (All languages) - At the end of the stream the lambda function should move the file from the uploaded folder into the parsed folder (move the file means that file should be copied into parsed folder, and then deleted from uploaded folder)
------------
# __FrontEnd__

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
Task 5.1 | __SQL script__ with exemple data | GET | https://github.com/SeLub/shop-aws-be/blob/task-4/product-service/sql_scripts/products_and_stocks.sql
Task 5.2 | __getProductsList__ get ALL products from DB | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products
Ad.1 | __getProductsById__ get product with __WRONG id__ | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/830be059-d085-4f6f-976e-d5bafa3e1165
Ad.2 | getProductsById get product with __invalid id__ | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/777
Task 4.3 | __createProduct__ POST to add product to DB | POST | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/
Ad.3 | getProductsById get product with __invalid id__ | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/777
Task 4.3 | __createProduct__ POST to add product to DB | POST | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/

### Скриншоты 

------------

# __Swagger documentation__

https://app.swaggerhub.com/apis/SeLub/AWSShopAPI/1.0.0