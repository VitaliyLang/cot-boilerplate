import styled from 'styled-components'

const Table = styled.table`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  tbody tr {
    border: 1px solid #aaa;
  }
  th, td {
    padding: 10px 15px;
  }
  th {
    color: rgba(0, 0, 0, .6);
    text-align: left;
  }
`

export default Table
