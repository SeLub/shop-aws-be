# __Task 8__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/new-tasks/task8-cart-api-docker-elastic-beanstalk/task.md)

Task due date / deadline date - 25.10.21 / 25.10.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _** 5 points**_
 
-----------
## __Evaluation criteria__

- [x] Cr.1: **1** - Dockerfile is prepared, image is building. Image size is minimised to be less than 500 MB.
- [x] Cr.2: **2** - Dockerfile is optimized. Files that change more often and commands that depend on them should be included later, files and commands that change less should be at the top.
- [x] Cr.3: **3** - Folders are added to .dockerignore, with explanations. At least 2 big directories should be excluded from build context. Elastic Beanstalk application is initialized.
- [x] Cr.4: **4** - Environment is created and the app is deployed to the AWS cloud. You must provide a link to your GitHub repo with Cart API service or PR with created Dockerfile and related configurations.
- [x] Cr.5: **5** - FE application is updated with Cart API endpoint. You must provide a PR with updates in your FE repository and OPTIONALLY link to deployed front-end app which makes proper API calls to your Cart service.

------------

# __Summary Report__

* FrontEnd: https://d3ph6tvz43noms.cloudfront.net/ 


Evaluation criteria   | Description | URL 
-------|--------------|-----
Cr.1 | Dockerfile is prepared (non-optimized) | https://github.com/SeLub/shop-aws-cart-api/blob/feat/nonopimized-deploy-from-registry/Dockerfiles/Dockerfile
Cr.2 | Dockerfile is optimized | https://github.com/SeLub/shop-aws-cart-api/blob/feat/deploy-from-registry/Dockerfiles/Dockerfile
Cr.3 | At least 2 big directories should be included in .dockerignore | https://github.com/SeLub/shop-aws-cart-api/blob/feat/deploy-from-registry/.dockerignore
Cr.4 | GitHub Cart API service | https://github.com/SeLub/shop-aws-cart-api
Cr.5 | A PR with updates in FE repository | https://github.com/SeLub/shop-aws-fe/pull/6/files
Cr.5 | A link from API PATH to api/profile/cart | http://selub-cart-api.eu-central-1.elasticbeanstalk.com/api/profile/cart

## Screenshots 

------------
#### **Elastic Beanstalk** -  задеплоил приложение

![Elastic Beanstalk](eb.png)

#### Настройки браузера Brave для проверки работы Cart API. Позволяет HTTP.

![Brave Settings](brave_settings.png)

#### **Страница с товарами в корзине** - после обновления товары в корзине сохраняются.

![Cart after Page Refresh](cart_after_refresh.png)

#### **Elastic Container Registry** - разница в размерах загруженных оптимизированного и не оптимизированного images.

![Size differency of optimized and nonoptimized images](optimized-nonoptimized.png)

#### **Docker running on 64bit Amazon Linux 2** - протетсировал создание docker образа на платформе Linux 2. Теперь вместо красного Deprecated - зелёное Supported.

![deprecated](deprecated.png)
![supported](supported.png)

# Дополнительно 

Репозиторий Cart API service https://github.com/SeLub/shop-aws-cart-api
В ветке feat/nonopimized-deploy-from-registry находится НЕоптимизированный имидж. Если В приложении выполнить npm run publish:image, то в результате будет создан не оптимизированный image размером **440.54 MB**

Далее можно перейти в ветку feat/deploy-from-registry и выполнить команду npm run publish:image. В результате будет создан оптимизированный image размером **20.21**
-----

## Создание приложения

eb init -r eu-central-1

Enter Application Name: shop-aws-cart-api
It appears you are using Docker. Is this correct? Y

Select a platform branch.
1) Docker running on 64bit Amazon Linux 2
2) Multi-container Docker running on 64bit Amazon Linux (Deprecated)
3) Docker running on 64bit Amazon Linux (Deprecated)

Выбрать платформу Linux 2 - пункт 1. Это будет не **Deprecated**, а **Supported**

Do you wish to continue with CodeCommit? (Y/n) n
Do you want to set up SSH for your instances? (Y/n) n

