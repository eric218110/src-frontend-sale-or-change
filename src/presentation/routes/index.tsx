import { zipCodeConnector } from '@presentation/core/connectors/zipCode'
import { HomePage } from '@presentation/pages/home'
import { NegotiationsPage } from '@presentation/pages/negotiations'
import { Layout } from '@presentation/shared/components/layout'
import { GlobalStyles } from '@presentation/shared/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { paths } from './path'

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: paths.home,
      element: <Layout />,
      children: [
        {
          path: paths.home,
          element: <HomePage />
        },
        {
          path: paths.negotiations,
          element: <NegotiationsPage zipCodeService={zipCodeConnector} />
        }
      ]
    }
  ])

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}
