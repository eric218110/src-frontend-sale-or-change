import { NavBarComponent } from '@presentation/components/navbar'
import { Header } from '@presentation/shared/components/header'
import { Outlet } from 'react-router-dom'
import * as S from './style'

export const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <NavBarComponent />
        <Outlet />
      </S.Container>
    </>
  )
}
