import { TitleHeaderComponent } from '@presentation/components/titleHeader'
import { useEffect } from 'react'
import * as S from './style'
import { useViewModdelNegotiationsPage } from './viewModel'

export const NegotiationsPage = () => {
  const { handlerOnSubmitForm, register, loadNavigation, step } =
    useViewModdelNegotiationsPage()

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
              <select {...register('type', { required: true })} name="type">
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
                name="description"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Value">Valor</label>
              <input
                {...register('value', { required: true })}
                type="text"
                name="value"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Negociar por">Negociar por</label>
              <input
                {...register('trade_for', { required: true })}
                type="text"
                name="trade_for"
              />
            </S.InputGroup>
          </>
        )}

        {step.currentStep === 'two' && (
          <>
            <S.InputGroup>
              <label htmlFor="Tipo">Urgência</label>
              <select {...register('type', { required: true })} name="type">
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
                    type="text"
                    name="zip_code"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Rua">Rua</label>
                  <input
                    {...register('address', { required: true })}
                    type="text"
                    name="address"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Cidade">Cidade</label>
                  <input
                    {...register('city', { required: true })}
                    type="text"
                    name="city"
                  />
                </div>
                <div className="item">
                  <label htmlFor="Estado">Estado</label>
                  <input
                    {...register('state', { required: true })}
                    type="text"
                    name="state"
                  />
                </div>
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

// “location” : {
// “lat” : DOUBLE,
// “lng” : DOUBLE,
// “zip_code” : INT
// “address” : STRING,
// “city” : STRING,
// “state”: STRING ,
// }, “urgency” : {
// “type” : ENUM (1 – Baixa, 2 – Média, 3 – Alta, 4 – Data),
// “limit_date” : DATE
// }, “photos“ : [
// { “src” : STRING },
// { “src” : STRING }
// ]
