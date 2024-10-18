import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout} from '../components'
import { About, Chat, Login, NotFoundPage } from '../pages'
import { RequieredAuth } from '../hoc'
import { Register } from '../pages/Register'


export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<About />} />
    <Route path='registration' element={
        <Register />
    } />
    <Route path='login' element={
        <Login />
    } />
    <Route 
      path='chat' 
      element={
        <RequieredAuth>
          <Chat />
        </RequieredAuth>
      } 
    />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
))