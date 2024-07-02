# React+react-router-dom library.

## Description (RU)
Данное SPA создано на базе реакта и библиотеки react-router-dom version 6. В шапке приложения применяется навигация по страницам: HomePage, BlogPage, BlogPage version 2, Search, AboutPage. 

На странице BlogPage при загрузке данных с сервера реализованы состояния загрузки: в случае загрузки отображается компонент Loader, неудачной загрузки - компонент Error, успешной загрузки - отображение лимитированных данных с использованием постраничной пагинации. Также на данной странице присутствует кнопка создания нового поста, реализован роут на страницу создания нового поста, а также функциональность создания поста. Каждый полученный пост на странице BlogPage представлен в виде ссылки, при нажатии на которую происходит роутинг на страницу конкретного поста. Помимо функциональности ссылки каждый пост имеет кнопку "Редактировать", при нажатии на которую происходит роутинг на страницу редактирования поста. Функционал редактирования, как и создания нового поста, рабочий с поправкой на то, что для данной практики был использован фэйковый сервер "JSON placeholder", который имеет урезанную версию работы с данными запросами (post, put), поэтому создание нового поста не приведет к ошибке, но выполнит редирект на пост с id = 100, а редактирование отсавит нас на странице редактирования поста но выведет сообщение об успешном выполнении запроса на редактирование. При отправке при редактировании страниц формы с пустыми полями, выведется сообщение о том, что все поля обязательны к заполнению и запрос на сервер не будет осуществлен(простейшая валидация).

Страница BlogPageV2 - это та же страница, что и описана выше, с поправкой на то, что функционально загрузка постов происходит при помощи использования асинхронной функции loader (функция для предоставления данных элементу перед его рендерингом). Также на примере данной вкладки были опробован новый функционал, предоставляемый react-router-dom: использование компонентов Form, Await (в связке с Suspense(React)), использование хелперов defer, json, redirect, хуков useLoaderData, useActionData, useAsyncValue, useNavigation.

Страница Search - по сути схожа со страницей BlogPage, но при первоначальном переходе на данную страницу нам предлагается воспользоваться поисковой строкой. При вводе ключевого слова и нажатии на кнопку отправки происходит запрос к серверу, получение всех постов, а уже затем фильтрация на стороне клиента и выдача результатов поиска пользователю. Данный функционал реализован именно так, в связи с отсутствием у JSON placeholder функционала, работающего с searchParams. Также на странице реализован функционал выдачи постов в связке с ключевым словом, выдающий только свежие (в нашем случае последине: с 80 по 100(если ключевое слово будет в них содержаться)) посты.

На странице AboutPage была отработана функциональность работы со вложенным роутингом. Она продемострирована на работе двух вкладок размещенных на данной страницы - это наши контакты и наша команда.

В шапке приложения присутствует кнопка SignIn/SignOut. Реализован простейший функционал авторизации в приложении. Данный функционал предоставил возможность поработать с приватными роутами редактирования и создания нового поста.

В приложении также присутствует станица единичного поста, в которой реализована кнопка "ComeBack" и переход на страницу редактирования этого поста.

Еще одна страница, которая присутствует в приложении это страница NotFoundPage. Она появляется при ошибке в написании роутов.

Также есть страница при повлении ошибки ErrorPage.

Подводя итог можно сказать следующее: огромный блок функционала данной библиотеки был мною хорошо освоен по мере создания данного приложения.

## Description (EN)
This SPA is based on React and the React-Router-dom library version 6. The application header uses page navigation: HomePage, BlogPage, BlogPage version 2, Search, AboutPage.

On the BlogPage page, when downloading data from the server, loading states are implemented: in case of loading, the Loader component is displayed, unsuccessful loading - the Error component, successful loading - displaying limited data using page pagination. Also on this page there is a button for creating a new post, a route to the page for creating a new post is implemented, as well as the functionality for creating a post. Each received post on the BlogPage is presented as a link, which, when clicked, is routed to the page of a specific post. In addition to the link functionality, each post has an “Edit” button, when clicked, it is routed to the post editing page. The functionality of editing, as well as creating a new post, is working, adjusted for the fact that for this practice a fake “JSON placeholder” server was used, which has a stripped-down version of working with these requests (post, put), so creating a new post will not lead to an error , but will redirect to a post with id = 100, and editing will take us to the post editing page but will display a message about the successful completion of the editing request. When submitting while editing form pages with empty fields, a message will be displayed stating that all fields are required and the request to the server will not be made (simple validation).

The BlogPageV2 page is the same page as described above, except that functionally loading posts occurs through the use of an asynchronous loader function (a function to provide data to an element before it is rendered). Also, using this tab as an example, we tested new functionality provided by react-router-dom: the use of Form, Await components (in conjunction with Suspense (React)), the use of defer, json, redirect helpers, useLoaderData, useActionData, useAsyncValue, useNavigation hooks.

The Search page is essentially similar to the BlogPage page, but when we first go to this page we are asked to use the search bar. When you enter a keyword and click on the submit button, a request is made to the server, all posts are received, and only then filtering is done on the client side and search results are returned to the user. This functionality is implemented exactly this way, due to the lack of JSON placeholder functionality that works with searchParams. The page also implements the functionality of displaying posts in conjunction with a keyword, displaying only the latest (in our case, the last: from 80 to 100 (if the keyword is contained in them)) posts.


On the AboutPage page, the functionality of working with nested routing has been improved. It is demonstrated in the work of two tabs located on this page - these are our contacts and our team.

There is a SignIn/SignOut button in the application header. The simplest authorization functionality in the application has been implemented. This functionality provided the opportunity to work with private routes for editing and creating a new post.

The application also contains a page for a single post, which has a “ComeBack” button and a transition to the page for editing this post.

Another page that is present in the application is the NotFoundPage page. It appears when there is an error in writing routes.

There is also a page when an error appears ErrorPage.

To summarize, we can say the following: a huge block of functionality of this library was well mastered by me as I created this application.

## Technologies used
* react
* react-router-dom
* use fake API JSON placeholder

## Visual display of the application's operation

![Picture 1](./src/assets/project_description/2024-05-29_00-48-02.png)

Picture 1. Loading stage 

![Picture 2](./src/assets/project_description/2024-05-29_00-48-29.png)


Picture 2. loading success stage 

![Picture 3](./src/assets/project_description/2024-05-29_00-48-55.png)

Picture 3. Pagination work 

![Picture 4](./src/assets/project_description/2024-05-29_00-49-54.png)

Picture 4. loading failed stage
