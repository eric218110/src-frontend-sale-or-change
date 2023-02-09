import { ReactComponent as LogoSVG } from '@presentation/assets/svg/logo.svg'
import { useForm } from 'react-hook-form'
import * as S from './style'

type FormData = {
  search: string
  category: string
}

export const Header = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const handlerOnSubmitSearch = (data: FormData) => {
    console.log(data)
  }

  return (
    <S.NavContainer>
      <div className="logo">
        <LogoSVG />
      </div>
      <S.FormContainer onSubmit={handleSubmit(handlerOnSubmitSearch)}>
        <input
          {...register('search', { required: true })}
          placeholder="Busque por Minhas negociações"
        />
        <select
          name="category"
          title="category"
          {...(register('category'), { required: true })}
        >
          <option value="" disabled selected>
            Categorias
          </option>
          <option value="Venda">Venda</option>
          <option value="Troca">Troca</option>
          <option selected value="Desejo">
            Desejo
          </option>
        </select>
        <button type="submit">Buscar</button>
      </S.FormContainer>
      <ul>
        <li>Como funciona ?</li>
        <li>Centro de ajuda</li>
        <li>Novidades</li>
      </ul>
      <button type="button">Nova negociação</button>
    </S.NavContainer>
  )
}
