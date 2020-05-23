import React from 'react'
import styled from 'styled-components/macro'
import { textColor } from '../styles/colors'

export default function ItemList({ gridClass, items }) {
  const listItems = items.map((item) => (
    <ListItemStyled key={item.id}>{item.text}</ListItemStyled>
  ))

  return (
    <div className={gridClass}>
      <ListStyled>{listItems}</ListStyled>
    </div>
  )
}

const ListStyled = styled.ul`
  overflow: scroll;
  list-style: none;
  padding: 0;
`

const ListItemStyled = styled.li`
  padding-bottom: 12px;
  color: ${textColor};
  font-size: 20px;
  text-align: start;
`
