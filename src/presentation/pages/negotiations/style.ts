import styled from 'styled-components'

export const Container = styled.div`
  form {
    button {
      margin-top: 2rem;
      border: none;
      padding: 1rem 3rem;
      border-radius: 0.5rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08), 0 0 3px rgba(0, 0, 0, 0.05);
      :hover {
        box-shadow: 5px 16px 16px rgba(0, 0, 0, 0.08),
          0 0 5px rgba(0, 0, 0, 0.05);
      }
    }
    button[type='button'],
    button[type='submit'] {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text100};
      margin-left: 2rem;
    }
    .outline {
      background-color: red;
      background-color: ${({ theme }) => theme.colors.text100};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .preview {
    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
    div {
      flex-basis: calc(18% - 1rem);
      display: flex;
      flex-direction: column;
    }
    img {
      max-width: 20rem;
      max-height: 20rem;
    }
  }

  .row {
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    .item {
      display: flex;
      flex-direction: column;
      flex-basis: (25% - 1rem);
      flex: 1;
    }
  }

  label {
    margin: 0.3rem 0;
    color: ${({ theme }) => theme.colors.text200};
    font-weight: 400;
    font-size: 1.2rem;
  }

  input,
  select {
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text200};
    padding: 0.8rem 0.5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text200};
    font-weight: 700;
  }
`
