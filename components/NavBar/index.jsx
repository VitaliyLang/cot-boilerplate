import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import AdminWidget from './AdminWidget'

const TopBarContainer = styled.header`
  padding: 25px 55px 25px 25px;
  width: 100%;
  border: 2px solid black;
  background-color: #fff;
`

const Logo = styled.img`
  width: 40px;
  display: block;
`

const AppHeader = () => (
  <TopBarContainer>
    <Flex align='center'>
      <Box w={1 / 10} role='button'>
        <Logo src={'../static/images/logo.png'} />
      </Box>
      <Box w={1 / 3.5}>
        <SearchBar />
      </Box>
      <Flex
        ml='auto'
        alignItems='center'
        justifyContent='flex-end'
        w='250px'>
        <AdminWidget />
      </Flex>
    </Flex>
  </TopBarContainer>
)

export default AppHeader
