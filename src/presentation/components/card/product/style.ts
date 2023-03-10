import styled from 'styled-components'

export const Card = styled.body`
  display: flex;
  cursor: pointer;
  flex: 1 1 0%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08), 0 0 3px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.text100};
  border-radius: 1rem;
  overflow: hidden;
  flex-basis: 40%;
  margin: 0 1rem 2rem 0;
  max-width: calc(50% - 1rem);

  section {
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
    .description {
      font-weight: 400;
    }
    .price {
      font-size: 1.8rem;
    }
  }

  :hover {
    box-shadow: 5px 16px 16px rgba(0, 0, 0, 0.08), 0 0 5px rgba(0, 0, 0, 0.05);
    transition: 0.5s;
  }

  section {
    .description {
      color: ${({ theme }) => theme.colors.secundary};
      font-weight: 400;
      font-size: 1.6rem;
      :hover {
        color: ${({ theme }) => theme.colors.primary};
        transition: 0.5s;
      }
    }
  }
`

export const SlidesWrapper = styled.div`
  height: 22rem;
  width: 25rem;
  overflow: hidden;
  position: relative;
  .amount-photos {
    background-color: ${({ theme }) => theme.colors.backgroundColor100};
    position: absolute;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    width: 4.6rem;
    height: 3.2rem;
    bottom: 0;
    border-top-right-radius: 1rem;
    z-index: 100;
    svg {
      color: ${({ theme }) => theme.colors.text100};
    }
    span {
      color: ${({ theme }) => theme.colors.text100};
    }
  }
  .overlay {
    height: 22rem;
    width: 22rem;
    border-radius: 0.8rem;
    background-image: url('https://img.olx.com.br/images/92/928381491766255.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% center;
    overflow: hidden;
    filter: blur(3rem);
  }

  img {
    width: 100%;
    object-fit: contain;
    max-height: 22rem;
    user-select: none;
    bottom: 50%;
    right: 50%;
    position: absolute;
    transform: translate(50%, 50%);
  }
`
