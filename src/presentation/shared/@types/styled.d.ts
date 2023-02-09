import 'styled-components'

export type ColorsTypes = {
  primary: string
  secundary: string
  text100: string
  text200: string
  text300: string
  borderColor: string
  backgroundColor100: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes
  }
}
