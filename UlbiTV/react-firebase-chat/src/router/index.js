import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout} from '../components'
import { RequieredAuth } from '../hoc/RequiredAuth'
import { About, Chat, Login } from '../pages'


export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<About />} />
    <Route path='login' element={<Login />} />
    <Route 
      path='chat' 
      element={
        <RequieredAuth>
          <Chat />
        </RequieredAuth>
      } 
    />
  </Route>
))