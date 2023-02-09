import { HomePage } from '@presentation/pages/home'
import { GlobalStyles } from '@presentation/shared/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    }
  ])

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}
