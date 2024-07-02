# React+react-router-dom library.

## Description (RU)
Данное SPA создано на базе реакта и библиотеки react-router-dom version 6. В шапке приложения применяется навигация по страницам: HomePage, BlogPage, BlogPage version 2, Search, AboutPage. 

На странице BlogPage при загрузке данных с сервера реализованы состояния загрузки: в случае загрузки отображается компонент Loader, неудачной загрузки - компонент Error, успешной загрузки - отображение лимитированных данных с использованием постраничной пагинации. Также на данной странице присутствует кнопка создания нового поста, реализован роут на страницу создания нового поста, а также функциональность создания поста. Каждый полученный пост на странице BlogPage представлен в виде ссылки, при нажатии на которую происходит роутинг на страницу конкретного поста. Помимо функциональности ссылки каждый пост имеет кнопку "Редактировать", при нажатии на которую происходит роутинг на страницу редактирования поста. Функционал редактирования, как и создания нового поста, рабочий с поправкой на то, что для данной практики был использован фэйковый сервер "JSON placeholder", который имеет урезанную версию работы с данными запросами (post, put), поэтому создание нового поста не приведет к ошибке, но выполнит редирект на пост с id = 100, а редактирование оставит нас на странице редактирования поста, вернув исходное состояние и выведет сообщение об успешном выполнении запроса на редактирование. При отправке формы с пустыми полями, выведется сообщение о том, что все поля обязательны к заполнению и запрос на сервер не будет осуществлен(простейшая валидация).

Страница BlogPageV2 - это та же страница, что и описана выше, с поправкой на то, что функционально загрузка постов происходит при помощи использования асинхронной функции loader (функция для предоставления данных элементу перед его рендерингом). На примере данной вкладки были опробован новый функционал, предоставляемый react-router-dom: использование компонентов Form, Await (в связке с Suspense(React)), использование хелперов defer, json, redirect, хуков useLoaderData, useActionData, useAsyncValue, useNavigation.

Страница Search - по сути схожа со страницей BlogPage, но при первоначальном переходе на данную страницу нам предлагается воспользоваться поисковой строкой. При вводе ключевого слова и нажатии на кнопку отправки происходит запрос к серверу, получение всех постов, а уже затем фильтрация на стороне клиента и выдача результатов поиска пользователю. Данный функционал реализован именно так, в связи с отсутствием у JSON placeholder функционала, работающего с searchParams. Также на странице реализован функционал выдачи постов в связке с ключевым словом, выдающий только свежие (в нашем случае последине: с id = 80 по 100(если ключевое слово будет в них содержаться)) посты.

На странице AboutPage была отработана функциональность работы со вложенным роутингом. Она продемонстрирована на работе двух вкладок, размещенных на данной странице - это "Our Contacts" и "Our Team".

В шапке приложения присутствует кнопка SignIn/SignOut. Реализован простейший функционал авторизации в приложении. Данный функционал предоставил возможность поработать с приватными роутами. Приватными роутами в данном случае были выбраны роут редактирования и роут создания нового поста.

В приложении также присутствует станица единичного поста, в которой реализована кнопка "ComeBack" и переход на страницу редактирования этого поста.

Еще одна страница, которая присутствует в приложении это страница NotFoundPage. Она появляется при ошибке в написании роутов.

Также есть страница при появлении ошибок - ErrorPage.

## Description (EN)
This SPA is based on React and the React-Router-dom library version 6. The application header uses page navigation: HomePage, BlogPage, BlogPage version 2, Search, AboutPage.

On the BlogPage page, when downloading data from the server, loading states are implemented: in case of loading, the Loader component is displayed, unsuccessful loading - the Error component, successful loading - displaying limited data using page pagination. Also on this page there is a button for creating a new post, a route to the page for creating a new post is implemented, as well as the functionality for creating a post. Each received post on the BlogPage is presented as a link, which, when clicked, is routed to the page of a specific post. In addition to the link functionality, each post has an “Edit” button, when clicked, it is routed to the post editing page. The functionality of editing, as well as creating a new post, is working, adjusted for the fact that for this practice a fake “JSON placeholder” server was used, which has a stripped-down version of working with these requests (post, put), so creating a new post will not lead to an error , but will redirect to a post with id = 100, and editing will leave us on the post editing page, returning the original state and displaying a message about the successful completion of the editing request. When submitting a form with empty fields, a message will be displayed stating that all fields are required and the request to the server will not be processed (simple validation).

The BlogPageV2 page is the same page as described above, except that functionally loading posts occurs through the use of an asynchronous loader function (a function to provide data to an element before it is rendered). Using this tab as an example, we tested the new functionality provided by react-router-dom: the use of Form, Await components (in conjunction with Suspense (React)), the use of defer, json, redirect helpers, useLoaderData, useActionData, useAsyncValue, useNavigation hooks.

The Search page is essentially similar to the BlogPage page, but when we first go to this page we are asked to use the search bar. When you enter a keyword and click on the submit button, a request is made to the server, all posts are received, and only then filtering is done on the client side and search results are returned to the user. This functionality is implemented exactly this way, due to the lack of JSON placeholder functionality that works with searchParams. The page also implements the functionality of displaying posts in conjunction with a keyword, which displays only recent (in our case, the last: from id = 80 to 100 (if the keyword is contained in them)) posts.

On the AboutPage page, the functionality of working with nested routing has been improved. It is demonstrated in the work of two tabs located on this page - these are “Our Contacts” and “Our Team”.

There is a SignIn/SignOut button in the application header. The simplest authorization functionality in the application has been implemented. This functionality provided an opportunity to work with private routes. In this case, the editing route and the route for creating a new post were chosen as private routes.

The application also contains a page for a single post, which has a “ComeBack” button and a transition to the page for editing this post.

Another page that is present in the application is the NotFoundPage page. It appears when there is an error in writing routes.

There is also a page when errors occur - ErrorPage.

## Technologies used
* react
* react-router-dom
* use fake API JSON placeholder

## Visual display of the application's operation

![Picture 1](./src/assets/project_description/0.%20HomePage.png)

**Picture 1.** Homepage. Route: '/'. 

![Picture 2](./src/assets/project_description/1.0%20BlogPage%20(Loading).png)


**Picture 2.** BlogPage (Loading state). Route: '/posts?_page=1&_limit=15'.

![Picture 3](./src/assets/project_description/1.1%20BlogPage.png)

**Picture 3.** BlogPage.  Route: '/posts?_page=1&_limit=15'. 

![Picture 4](./src/assets/project_description/1.2.0%20BlogPage,%20create%20new%20post%20.png)

**Picture 4.** BlogPage. Creating new post.  Route: '/posts?_page=1&_limit=15'.

![Picture 5](./src/assets/project_description/1.2.1%20CreatePostPage.png)

**Picture 5.** CreatePostPage.  Route: '/posts/create.

![Picture 6](./src/assets/project_description/1.3.0%20BlogPage,%20editing%20an%20existing%20post.png)

**Picture 6.** BlogPage. Editing an existing post. Route: '/posts?_page=1&_limit=15.

![Picture 7](./src/assets/project_description/1.3.1%20BlogPage,%20edit%20post%20page.png)

**Picture 7.** EditPostPage. Route: '/posts/:id/edit'.

![Picture 8](./src/assets/project_description/1.3.2%20BlogPage,%20Result%20message%20after%20editting%20post.png)

**Picture 8.** EditPostPage. Result message after editting post. Route: '/posts/:id/edit'.

![Picture 9](./src/assets/project_description/1.3.3%20BlogPage,%20Result%20message%20if%20form%20fields%20was%20empty.png)

**Picture 9.** EditPostPage. Result message if form fields was empty. Route: '/posts/:id/edit'.

![Picture 10](./src/assets/project_description/2.1%20BlogPage%20ver.2,%20use%20loader%20functionality.png)

**Picture 10.** BlogPage version 2. Using loader functionality. Route: '/posts-v2?_page=1&_limit=15'. 

![Picture 11](./src/assets/project_description/3.1%20SearchPage.png)

**Picture 11.** SearchPage.  Route: '/search-posts?_page=1&_limit=15'.

![Picture 12](./src/assets/project_description/3.2%20SearchPage,%20getting%20search%20results.png)

**Picture 12.** SearchPage. Getting search results. Route: '/search-posts?_page=1&_limit=15&search=lorem'.

![Picture 13](./src/assets/project_description/3.3%20SearchPage,%20getting%20search%20results%20with%20a%20checkbox%20set%20to%20display%20only%20the%20newest%20posts.png)

**Picture 13.** SearchPage. Getting search results with a checkbox set to display only the newest posts. Route: '/search-posts?_page=1&_limit=15&search=lorem&latest=true'.

![Picture 14](./src/assets/project_description/3.4%20SearchPage,%20getting%20another%20search%20results.png)

**Picture 14.** SearchPage. Getting another search results. Route: '/search-posts?_page=1&_limit=15&search=es'.

![Picture 15](./src/assets/project_description/3.5%20SearchPage,%20getting%20another%20search%20results%20with%20a%20checkbox%20set%20to%20display%20only%20the%20newest%20posts.png)

**Picture 15.** SearchPage. Getting another search results with a checkbox set to display only the newest posts. Route: '/search-posts?_page=1&_limit=15&search=es&latest=true'.

![Picture 16](./src/assets/project_description/3.6%20SearchPage,%20showing%20how%20pagination%20works.png)

**Picture 16.** SearchPage. Showing how pagination works. Route: '/search-posts?_page=3&_limit=15&search=es'.

![Picture 17](./src/assets/project_description/4.1%20AboutPage.png)

**Picture 17.** AboutPage. Route: '/about-us'.

![Picture 18](./src/assets/project_description/4.2%20AboutPage,%20showing%20company%20contacts.png)

**Picture 18.** AboutPage. Showing company contacts. Route: '/about-us/contacts'.


![Picture 19](./src/assets/project_description/4.3%20AboutPage,%20showing%20company%20team.png)

**Picture 19.** AboutPage. Showing company team. Route: '/about-us/team'.

![Picture 20](./src/assets/project_description/5.1%20LoginPage.png)

**Picture 20.** LoginPage. Route: '/login'.

![Picture 21](./src/assets/project_description/5.2%20LoginPage,%20redirect%20to%20homepage.png)

**Picture 21.** LoginPage. Redirect to HomePage. Route: '/login'.

![Picture 22](./src/assets/project_description/6.1%20Single%20post%20page.png)

**Picture 22.** PostPage. Route: '/posts/:id'.