import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, Profile, Register, Landing, Login, Error, Todo, HomeLayout, EditTodo} from "./pages"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { loader as dashboardLoader } from './pages/Dashboard'
import { loader as homeLayoutLoader } from './pages/HomeLayout'

import { action as loginAction } from './pages/Login'
import {action as profileAction} from './pages/Profile'
import { action as registerAction } from './pages/Register'
import {action as todoAction} from './pages/Todo'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnReconnect: 'always'
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <HomeLayout />,
    loader: homeLayoutLoader,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Todo />,
        action: todoAction
      },
      {
        path: 'profile',
        element: <Profile />,
        action: profileAction
      },
      {
        path: 'edit-todo',
        element: <EditTodo />
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App
