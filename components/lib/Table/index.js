import styled from 'styled-components'

const Table = styled.table`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.14) 0 4px 5px 0;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  thead, tbody {
    flex-basis: 100%;
    tr {
      display: flex;
    }
  }
  tbody {
    max-height: ${props => props.maxBodyHeight || 'auto'};
    overflow: auto;
    tr {
      border: 1px solid #aaa;
    }
  }
  th {
    color: rgba(0, 0, 0, .6);
    text-align: left;
  }
  th, td {
    padding: 10px 15px;
    flex-grow: 1;
    flex-basis: 0;
  }
  a {
    color: #000;
    opacity: .6;
    &:hover {
      opacity: .9;
    }
  }
`

export default Table
