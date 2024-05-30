import "./App.css"
import Counter from "./components/Counter"
import PostConteiner from "./components/PostConteiner"

import UserList from "./components/UserList"

function App() {



  return (
    <div className="App center">
      <Counter />
      <UserList />
      <PostConteiner />
    </div>
  )
}

export default App
