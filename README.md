# __Task 9__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/new-tasks/task9-bff-elastic-beanstalk/task.md)

Task due date / deadline date - 06.11.21 / 06.11.21 23:59(GMT+3)

-----------
## __Evaluation criteria__

- [x] Cr.1: **3** - A working and correct **express** application should be in the **bff-service** folder. Reviewer can start this application locally with any valid configuration in the **.env** file and this application should works as described in the task 9.1
- [x] Cr.2: **5** - The **bff-service** should be deployed with Elastic Beanstalk. The **bff-service** call should be redirected to the appropriate service : **product-service** or **CART**. The response from the **bff-service** should be the same as if **product-service** or **CART** services were called directly.

## __Additional (optional) tasks__

- [x] Ad.1: **+1** - Add a cache at the **bff-service** level for a request to the **getProductsList** function of the **product-service**. The cache should expire in 2 minutes.  
- [x] Ad2.2: **+1** - Use **NestJS** to create **bff-service** instead of **express**

------------

# __Summary Report__

* FrontEnd: https://d3ph6tvz43noms.cloudfront.net/ 


Evaluation criteria   | Description | URL 
----------------------|-------------|-----
Cr.1 | Link to the **repo**.  You can clone **repo**, check env variables in .env and star app by **npm start**.  Then you can make requests by POSTMAN. Urls you can get from API table below. Resaults should be like on screenshots below. | https://github.com/SeLub/shop-aws-be/tree/task-9/bff-service
Cr.1 | Product-service service API: ALL products (GET) | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products
Cr.2 | bff-service service API: ALL products (GET) | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
Cr.1 | Product-service service API: PRODUCT by ID (GET) | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products/89da7309-e5ed-48a4-b4e6-ae47c947ae12
Cr.1 | bff-service service API: PRODUCT by ID (GET) | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product/?id=89da7309-e5ed-48a4-b4e6-ae47c947ae12
Cr.1 | Product-service service API: CREATE PRODUCT (POST) | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products
Cr.1 | bff-service service API:: CREATE PRODUCT (POST) |  http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
Cr.1 | Cart-service service API: Products in Cart (GET) | http://selub-cart-api.eu-central-1.elasticbeanstalk.com/api/profile/cart
Cr.2 | bff-service service API Products in Cart (GET) | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/cart
Ad.3 | How to check cache work - read below. I use module **node-cache**| https://github.com/SeLub/shop-aws-be/blob/task-9/bff-service/routes/index.js

### Как проверить работу кэша
- откройте фронтенд и посмотрите сколько сейчас товаров на сайте https://d3ph6tvz43noms.cloudfront.net/ 
- создайте новый товар отправив запрос из POSTMAN: http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
- сразу же из POSTMAN отправьте запрос на вывод всех товаров (через bff): http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
- и сразу же проверьте количество во фронтенде https://d3ph6tvz43noms.cloudfront.net/ 

Количество во фронтенде будет на 1 товар больше, т.к. bff кэширует вывод списка всех товаров ровно на 2 минуты. По истечении этого времени оба сервиса вернут одинаковое количество товаров


### API Table
Service | Method | URL | Action |
--------|--------|-----|--------|
product-service | GET | product | get Products List
product-service | GET | product/?id={id} | get Product By Id
product-service | POST | product | create Product
cart-service | GET | cart | get Products in Cart

## Screenshots 

------------

#### **Express Server** -  получаем список всех товаров через **bff**

![Get All Products](express_all.png)

#### **Express Server** -  получаем товар по id через **bff**

![Get Product by ID](express_id.png)

#### **Express Server** -  создаём товар через **bff**

![Create Product](express_create.png)
