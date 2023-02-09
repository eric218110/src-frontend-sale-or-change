import { AiOutlineCamera } from 'react-icons/ai'
import * as S from './style'

export const HomePage = () => {
  return (
    <S.Container>
      <div className="item">
        <div className="title">
          <h4>Ofertas</h4>
          <h6>Veja nossas principais ofertas</h6>
        </div>
        <div className="content">
          <S.Card>
            <S.SlidesWrapper className="slides-wrapper">
              <div className="amount-photos">
                <AiOutlineCamera size={18} />
                <span>40</span>
              </div>
              <div className="overlay"></div>
              <img
                src="https://img.olx.com.br/thumbs256x256/92/928381491766255.jpg"
                alt=""
              />
            </S.SlidesWrapper>
            <section>
              <span className="description">iPhone XS 256 Gb Space Grey</span>
              <span className="price">R$ 1.800</span>
            </section>
          </S.Card>
          <S.Card>
            <S.SlidesWrapper className="slides-wrapper">
              <div className="amount-photos">
                <AiOutlineCamera size={18} />
                <span>40</span>
              </div>
              <div className="overlay"></div>
              <img
                src="https://img.olx.com.br/thumbs256x256/92/928381491766255.jpg"
                alt=""
              />
            </S.SlidesWrapper>
            <section>
              <span className="description">iPhone XS 256 Gb Space Grey</span>
              <span className="price">R$ 1.800</span>
            </section>
          </S.Card>
          <S.Card>
            <S.SlidesWrapper className="slides-wrapper">
              <div className="amount-photos">
                <AiOutlineCamera size={18} />
                <span>40</span>
              </div>
              <div className="overlay"></div>
              <img
                src="https://img.olx.com.br/thumbs256x256/92/928381491766255.jpg"
                alt=""
              />
            </S.SlidesWrapper>
            <section>
              <span className="description">iPhone XS 256 Gb Space Grey</span>
              <span className="price">R$ 1.800</span>
            </section>
          </S.Card>
        </div>
      </div>
    </S.Container>
  )
}
