import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout} from '../components'
import { About, Chat, Login, NotFoundPage } from '../pages'
import { IfAuth, RequieredAuth } from '../hoc'


export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<About />} />
    <Route path='login' element={
      <IfAuth>
        <Login />
      </IfAuth> 
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