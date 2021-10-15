# __Task 7__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/new-tasks/task7-lambda+cognito-authorization/task.md)

Task due date / deadline date - 16.10.21 / 17.10.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _** 6 points**_
 
-----------
## __Evaluation criteria__

- [x] Cr.1: **1** - **authorization-service** is added to the repo, has correct **basicAuthorizer** lambda and correct **serverless.yaml** file
- [x] Cr.2: **3** - **import-service** serverless.yaml file has authorizer configuration for the **importProductsFile** lambda. Request to the **importProductsFile** lambda should work only with correct **authorization_token** being decoded and checked by **basicAuthorizer** lambda. Response should be in 403 HTTP status if access is denied for this user (invalid **authorization_token**) and in 401 HTTP status if Authorization header is not provided.
- [x] Cr.3: **5** - update client application to send Authorization: Basic **authorization_token** header on import. Client should get **authorization_token** value from browser localStorage


## __Additional (optional) tasks__

- [x] Ad.1: **+1** - Client application should display alerts for the responses in 401 and 403 HTTP statuses. This behavior should be added to the **nodejs-aws-fe-main/src/index.tsx** file

------------

# __Summary Report__

* FrontEnd: https://d3ph6tvz43noms.cloudfront.net/ 


Evaluation criteria   | Description | URL 
-------|--------------|-----
Cr.1 | **authorization-service** has correct **serverless.yaml** file | https://github.com/SeLub/shop-aws-be/blob/task-7/authorization-service/serverless.yml
Cr.1 | **authorization-service** has correct **basicAuthorizer** lambda | https://github.com/SeLub/shop-aws-be/blob/task-7/authorization-service/functions/basicAuthorizer/basicAuthorizer.js
Cr.2 | **import-service** serverless.yml file has authorizer configuration for the **importProductsFile** lambda. | https://github.com/SeLub/shop-aws-be/blob/task-7/import-service/serverless.yml
Cr.2 | For Full Report - Look at the Screenshots Section. | Link You can test by Postman. Valid Key: Authorization, Value: Basic c2VsdWI6VEVTVF9QQVNTV09SRA==  https://i4j8swnir7.execute-api.eu-central-1.amazonaws.com/dev/import/?name=products.csv
Cr.3 | update client application to send Authorization: Basic **authorization_token** header on import. Client should get **authorization_token** value from browser localStorage | https://github.com/SeLub/shop-aws-fe/pull/5/files
Ad.1 | Client application should display alerts for the responses in 401 and 403 HTTP statuses | https://github.com/SeLub/shop-aws-fe/blob/task-7/src/index.tsx

## Screenshots 

------------
#### **401 HTTP status - Unauthorized** -  не передан Authorization header 

![401 HTTP status - Unauthorized](401.png)

#### **202 HTTP status - Accepted** - передан Authorization header с валидным Token

![202 HTTP status - Accepted](202.png)

#### **403 HTTP status - Forbidden** - передан Authorization header с НЕ валидным Token.

![403 HTTP status - Forbidden](403.png)

#### **400 HTTP status - Bad Request** - передан Authorization header с валидным Token, но отсутствует обязательный параметр 'name'.

![400 HTTP status - Bad Request](400.png)


## __BackEnd__


В Task-6 реализовано: 

* при деплоее автоматически создаётся S3 Bucket **task-5-csv-uploaded** и ему автоматически прописываются Сors. На данный момент Policy для бакета необходимо прописать вручную.
* лямбда **importFileParser**, загружает csv в S3 Bucket **task-5-csv-uploaded** и отсылает сообщения в SQS очередь **catalogItemsQueue**

* при деплоее автоматически создаётся SQS очередь **catalogItemsQueue**, которая является тригерром для лямбды **catalogBatchProcess**
* при деплоее автоматически создаётся лямбда **catalogBatchProcess**, которая получает сообщения из SQS очереди **catalogItemsQueue** до 5 штук за раз и сохраняет их в базе данных

* при деплоее автоматически создаётся SNS очередь **catalogItemsQueue**, которая отсылает сообщения на e-mail при парсинге товаров из csv, при этом происходит сортировка сообщений по цене. Цена равно 500$

* после загрузки csv файла создаются записи в базе данных
* **catalogBatchProcess** находится в сервисе **product-service** 

----

Структура CSV- файла:

title,description,price,count,imageid

----

## __FrontEnd__


Данные во FE отобраажаются от API, который в свою очередь берёт их из базы данных RDS AWS. Картинки хранятся в специально созданнном S3 Bucket. Для него настроен CloudFront. Для товара у которого нет картинки используется стандартная картинка-заглушка. Рядом с ценой каждого товара выводится остаток на складе (stock).

В админке реализовано: 
- выводится список товаров
- у каждого товара выводится изображение
- загрузка CSV файла со списком товаров на бэкед (в специально созданный S3 Bucket), только после авторизации
- авторизация: токен берётся из локалсторидж, туда он сохраняется перед запросом axios
- выводтся alert (сообщения в окнах) при ошибках.
- исправлены "врождённые" ошибки (cart.tsx)


* FrontEnd: https://d3ph6tvz43noms.cloudfront.net/ 
