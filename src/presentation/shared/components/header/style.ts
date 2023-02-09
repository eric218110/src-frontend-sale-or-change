import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  width: 100%;
  padding: 2% 5%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.text100};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

  .logo {
    color: blue;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    li {
      cursor: pointer;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.secundary};
      list-style: none;
      font-weight: 200;
      transition: 0.5s;
      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text100};
    border: none;
    padding: 1rem 2.4rem;
    border-radius: 10rem;
    transition: 0.5s;
    :hover {
      transform: scale(200rem);
    }
  }
`

export const FormContainer = styled.form`
  &:focus-within {
    outline: 0.5px solid ${({ theme }) => theme.colors.primary};
    border: 0.5px solid ${({ theme }) => theme.colors.primary};
  }
  display: flex;
  flex: 3;
  border-radius: 0.5rem;
  width: 100%;
  background-color: red;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  select {
    border: none;
    color: ${({ theme }) => theme.colors.text200};
    font-weight: 400;
    width: 15%;
  }
  input {
    outline: none;
    border-radius: 0.5rem;
    border: none;
    border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 1rem 2.4rem 1rem 0.5rem;
    height: 100%;
    width: 70%;
    font-weight: 200;
    font-size: 1.5rem;
  }
  button {
    width: 15%;
    padding: 0 0.4rem 0 0.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0;
  }
`
