import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`

export const Sessao = styled.li`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const Item = styled.p`
  color: ${(props) => props.theme.corPrincipal};
`

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
