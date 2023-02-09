import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const AsideContainer = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
`

export const Item = styled(Link)<{ isActive?: boolean }>`
  cursor: pointer;
  border-radius: 2rem;
  width: 25rem;
  padding: 0.8rem 2rem;
  text-decoration: none;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}

  svg {
    stroke: ${({ theme }) => theme.colors.text200};
    color: ${({ theme }) => theme.colors.text200};
  }

  span {
    color: ${({ theme }) => theme.colors.text200};
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    margin-left: 2rem;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.text300};
      svg {
        stroke: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
      }
      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`
