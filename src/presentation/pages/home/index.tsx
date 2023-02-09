import {
  CardProductComponent,
  CardProductComponentProps
} from '@presentation/components/card/product'
import { TitleHeaderComponent } from '@presentation/components/titleHeader'
import * as S from './style'

export const HomePage = () => {
  const propsCard: CardProductComponentProps = {
    description: 'teste',
    images: [
      { src: 'https://img.olx.com.br/thumbs256x256/92/928381491766255.jpg' }
    ],
    price: 'R$: 1.200,00'
  }
  return (
    <S.Container>
      <div className="item">
        <TitleHeaderComponent
          title="Ofertas"
          subTitle="Veja nossas principais ofertas"
        />
        <div className="content">
          <CardProductComponent {...propsCard} />
          <CardProductComponent {...propsCard} />
          <CardProductComponent {...propsCard} />
        </div>
      </div>
    </S.Container>
  )
}
