import * as S from './style'

type TitleHeaderComponentProps = {
  title: string
  subTitle: string
}
export const TitleHeaderComponent = ({
  subTitle,
  title
}: TitleHeaderComponentProps) => (
  <S.Container>
    <h4>{title}</h4>
    <h6>{subTitle}</h6>
  </S.Container>
)
