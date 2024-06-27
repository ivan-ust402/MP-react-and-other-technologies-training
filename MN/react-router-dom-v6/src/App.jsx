import "./App.css"
import {
  RouterProvider,
} from "react-router-dom"
import { AuthProvider } from "./hoc/AuthProvider"
import { router } from "./router/router"




const App = () => {
  return (
    <div className="App">
        <AuthProvider>
          <RouterProvider router={router}/>
        </AuthProvider>
    </div>
  )
}

export { App }
