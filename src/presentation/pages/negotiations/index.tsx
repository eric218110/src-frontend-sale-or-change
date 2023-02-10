import { TitleHeaderComponent } from '@presentation/components/titleHeader'
import { useEffect } from 'react'
import * as S from './style'
import { NegotiationsPageProps } from './types'
import { useViewModdelNegotiationsPage } from './viewModel'

export const NegotiationsPage = (props: NegotiationsPageProps) => {
  const {
    handlerOnSubmitForm,
    register,
    loadNavigation,
    step,
    onFindAddressByZipCode,
    onChangeImageInput,
    imagesPreview
  } = useViewModdelNegotiationsPage(props)

  useEffect(() => {
    loadNavigation()
  }, [])

  return (
    <S.Container>
      <TitleHeaderComponent
        title="Nova negociação"
        subTitle="Cadastrar uma nova negociação"
      />
      <form onSubmit={handlerOnSubmitForm}>
        {step.currentStep === 'one' && (
          <>
            <S.InputGroup>
              <label htmlFor="Tipo">Tipo</label>
              <select {...register('type', { required: true })}>
                <option value="" disabled defaultChecked>
                  Selecione um tipo
                </option>
                <option value="venda">Venda</option>
                <option value="troca">Troca</option>
                <option value="desejo">Desejo</option>
              </select>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Description">Descrição</label>
              <input
                {...register('description', { required: true })}
                type="text"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Value">Valor</label>
              <input {...register('value', { required: true })} type="number" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Negociar por">Negociar por</label>
              <input
                {...register('trade_for', { required: true })}
                type="value"
              />
            </S.InputGroup>
          </>
        )}
        {step.currentStep === 'two' && (
          <>
            <S.InputGroup>
              <label htmlFor="Tipo">Urgência</label>
              <select {...register('urgency', { required: true })}>
                <option value="" disabled defaultChecked>
                  Selecione a Urgência
                </option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
              </select>
            </S.InputGroup>
            <S.InputGroup>
              <div className="row">
                <div className="item">
                  <label htmlFor="Cep">Cep</label>
                  <input
                    {...register('zip_code', { required: true })}
                    onBlur={onFindAddressByZipCode}
                    type="text"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Rua">Rua</label>
                  <input
                    {...register('address', { required: true })}
                    type="text"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Cidade">Cidade</label>
                  <input
                    {...register('city', { required: true })}
                    type="text"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Estado">Estado</label>
                  <input
                    {...register('state', { required: true })}
                    type="text"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Data limite">Data limite</label>
                  <input
                    {...register('limit_date', { required: true })}
                    type="date"
                  />
                </div>
              </div>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Imagens">Imagens</label>
              <input
                type="file"
                onChange={onChangeImageInput}
                accept="image/*"
              />
            </S.InputGroup>
            <S.InputGroup>
              <div className="preview">
                {imagesPreview.map(({ uri, name }, key) => (
                  <div key={key}>
                    <label htmlFor={name}>{name}</label>
                    <img src={uri as unknown as string} />
                  </div>
                ))}
              </div>
            </S.InputGroup>
          </>
        )}

        {step.currentStep === 'one' && (
          <>
            <button type="reset" className="outline">
              Limpar
            </button>
            <button type="button" onClick={step.goToNextStep}>
              Próximo
            </button>
          </>
        )}
        {step.currentStep === 'two' && (
          <>
            <button onClick={step.goToBackStep} className="outline">
              Voltar
            </button>
            <button type="submit">Cadastrar</button>
          </>
        )}
      </form>
    </S.Container>
  )
}
