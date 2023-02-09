import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.text200};
  }
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
