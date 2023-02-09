import * as S from './style'
import { useNavBarViewModel } from './viewModel'

export const NavBarComponent = () => {
  const { items } = useNavBarViewModel()

  return (
    <S.AsideContainer>
      {items.values.map(({ key, label, Icon, to }) => (
        <S.Item
          to={to}
          key={key}
          isActive={items.isActive(key)}
          onClick={() => items.onPress(key)}
        >
          <Icon size={18} />
          <span>{label}</span>
        </S.Item>
      ))}
    </S.AsideContainer>
  )
}
