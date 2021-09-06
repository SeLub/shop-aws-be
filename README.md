# __Task 3__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/task4-integration-with-database/task.md)

Task due date / deadline date - ????????? / 13.09.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _**11 points**_
 
-----------
## __Evalution Criteria__

- [ ] 1 - TASK 4.1 is implemented
- [ ] 3 - TASK 4.2 is implemented lambda links are provided and returns data
- [ ] 4 - TASK 4.3 is implemented lambda links are provided and products is stored in DB (call TASK 4.2 to see the product)
- [ ] 5 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. Link to a working Front-End application is provided for cross-check reviewer.

## __Additional options__

- [ ] POST/products lambda functions returns error 400 status code if product data is invalid
- [ ] All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- [ ] All lambdas do console.log for each incoming requests and their arguments
- [ ] Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa)
------------
# __FrontEnd__

* FrontEnd integrated with product service HTTP API & images from S3 Bucket: https://d3ph6tvz43noms.cloudfront.net/ 
* FrontEnd Task-4 Pull Request : - https://github.com/SeLub/shop-aws-fe/pull/3

# __BackEnd__

Lambda | Description | Method | URL 
-------|-------------|--------|-----
getProductsList | get ALL products from DB | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products
getProductsById | get ONE product from DB by id | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73348a80a1
getProductsById | Product in DB not found | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/777
getProductsById | POST to add product to DB | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/777

------------

# __Swagger documentation__
https://app.swaggerhub.com/apis/SeLub/AWSShopAPI/1.0.0

