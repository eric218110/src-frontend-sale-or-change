import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  padding: 5rem 10%;

  .content {
    display: grid;
    grid-gap: 2rem;
    grid-template: repeat(4, 1fr) / repeat(2, 1fr);
    grid-auto-flow: row dense;
  }
`
