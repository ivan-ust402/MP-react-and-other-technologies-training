import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom"
import { AboutPage } from "../pages/AboutPage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { Layout } from "../components/Layout"
import { PostPage } from "../pages/PostPage"
import { HomePage } from "../pages/HomePage"
import { CreatePostPage } from "../pages/CreatePostPage"
import { EditPostPage } from "../pages/EditPostPage"
import { LoginPage } from "../pages/LoginPage"
import { RequireAuth } from "../hoc/RequireAuth"
import { blogLoader, BlogPage } from "../pages/BlogPage"
import { SearchPage } from "../pages/SearchPage"
import { PostPageForSearch } from "../pages/PostPageForSearch"
import { EditPostPageForSearch } from "../pages/EditPostPageForSearch"
import { Contacts } from "../components/Contacts"
import { Team } from "../components/Team"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="posts/:id" element={<PostPage />} />
      <Route
        path="posts/:id/edit"
        element={
          <RequireAuth>
            <EditPostPage />
          </RequireAuth>
        }
      />
      <Route
        path="posts/:_page?/:_limit?"
        element={<BlogPage />}
        loader={blogLoader}
      />
      <Route
        path="posts/create"
        element={
          <RequireAuth>
            <CreatePostPage />
          </RequireAuth>
        }
      />
      <Route path="posts/create/edit" element={<NotFoundPage />} />
      <Route path="about-us/*" element={<AboutPage />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="team" element={<Team />} />
      </Route>
      <Route
        path="about/*"
        element={<Navigate to={"/about-us/*"} replace />}
      ></Route>
      <Route path="search-posts/:id" element={<PostPageForSearch />} />
      <Route
        path="search-posts/:id/edit"
        element={
          <RequireAuth>
            <EditPostPageForSearch />
          </RequireAuth>
        }
      />
      <Route
        path="search-posts/:_page?/:_limit?/:search?"
        element={<SearchPage />}
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
