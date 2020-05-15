import React from 'react'
import styled from 'styled-components/macro'

export default function ItemList({ items }) {
  const listItems = items.map((item) => (
    <ListItemStyled key={item.id}>{item.text}</ListItemStyled>
  ))

  return <ListStyled>{listItems}</ListStyled>
}

const ListStyled = styled.ul`
  overflow: scroll;
`

const ListItemStyled = styled.li`
  color: yellow;
`
