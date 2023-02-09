import { PhotosModel } from '@domain/models/photo.model'
import { AiOutlineCamera } from 'react-icons/ai'
import * as S from './style'

export type CardProductComponentProps = {
  description: string
  price: string
  images: PhotosModel[]
}

export const CardProductComponent = ({
  description,
  images,
  price
}: CardProductComponentProps) => (
  <S.Card>
    <S.SlidesWrapper className="slides-wrapper">
      <div className="amount-photos">
        <AiOutlineCamera size={18} />
        <span>{images.length}</span>
      </div>
      <div className="overlay"></div>
      <img src={images[0].src} alt="item details" />
    </S.SlidesWrapper>
    <section>
      <span className="description">{description}</span>
      <span className="price">{price}</span>
    </section>
  </S.Card>
)
