import "./App.css"
import Counter from "./components/Counter"
import PostConteiner from "./components/PostContainer"
import PostConteiner2 from "./components/PostContainer2"
import PostContainerForJSONServer from "./components/PostContainerForJSONServer"

import UserList from "./components/UserList"

function App() {
  return (
    <div className="App center">
      <h1>Часть 1. Работа с синхронным кодом. Создание counterSlice</h1>
      <Counter />
      <hr />
      <h1>Часть 2. Работа с асинхронным кодом. Запросы к серверу JSON placeholder на получение пользователей. Создание userSlice с использованием extraReducers, использование функции createAsyncThunk для создания асинхронного экшена user/fetchAll</h1>
      <UserList />
      <hr />
      <h1>Часть 3. Работа с библиотекой RTK Query. Создание эндпоинта на получение постов с JSON Placeholder сервера. Ознакомление с функциональными возможностями библиотеки: refetch, pollingInterval. Работа с автогенерируемыми хуками (useFetchAllPostsQuery). </h1>
      <div className="post-container">
        <PostConteiner />
        <PostConteiner2 />
      </div>
      <hr />
      <h1>Часть 4. Работа с библиотекой RTK Query и с серевером JSON Server - фейковым REST API. Создание эндпоинтов на создание нового поста, изменение поста и удаления. Работа с автосгенерированными хуками (useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation)</h1>
      <PostContainerForJSONServer />
    </div>
  )
}

export default App
