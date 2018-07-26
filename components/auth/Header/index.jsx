import React from 'react'
import styled from 'styled-components'

const Header = styled.section`
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-radius: 5px 5px 0 0;
  border: 1px solid #bebebe;
  border-bottom: none;
  img {
    width: 150px;
  }
`
export default () => (
  <Header>
    <img src="../static/images/logo-text.png" alt="CapitalOnTap logo" />
  </Header>
  )
