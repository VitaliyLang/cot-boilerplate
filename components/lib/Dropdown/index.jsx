import styled from 'styled-components'
import { Paper } from 'cot-experience'

const Dropdown = styled(Paper)`
  min-height: auto;
  padding: 0;
  position: absolute;
  border: 1px solid rgb(228, 228, 228);
  max-height: 30vh;
  overflow: auto;
  z-index: 100;
  button, a {
    background-color: transparent;
    border: none;
    width: 100%;
    display: block;
    color: #000;
    padding: 15px 20px;
    text-decoration: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #27B161;
      color: #fff;
    }
  }
`

export default Dropdown
