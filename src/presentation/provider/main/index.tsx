import { Routes } from '@presentation/routes'
import { theme } from '@presentation/shared/theme'
import { ThemeProvider } from 'styled-components'

export const MainProvider = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)
