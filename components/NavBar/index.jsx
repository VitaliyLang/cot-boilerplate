import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import AdminWidget from './AdminWidget'
import { Link } from '../../routes'

const TopBarContainer = styled.header`
  padding: 25px 55px 25px 25px;
  width: 100%;
  border: 2px solid black;
  background-color: #fff;
`

const LogoLink = styled.a`
  width: 40px;
  display: block;
  img {
    width: 100%;
    display: block;
  }
`

const AppHeader = () => (
  <TopBarContainer>
    <Flex align='center'>
      <Box w={1 / 10} role='button'>
        <Link route='/'>
          <LogoLink>
            <img src={'../static/images/logo.png'} />
          </LogoLink>
        </Link>
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
