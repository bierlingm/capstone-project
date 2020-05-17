import React from 'react'
import styled from 'styled-components/macro'

export default function ItemList({ gridClass, items }) {
  const listItems = items.map((item) => (
    <ListItemStyled key={item.id}>{item.text}</ListItemStyled>
  ))

  return <ListStyled className={gridClass}>{listItems}</ListStyled>
}

const ListStyled = styled.ul`
  overflow: scroll;
  list-style: none;
  padding: 0;
`

const ListItemStyled = styled.li`
  color: yellow;
  font-size: 20px;
`
