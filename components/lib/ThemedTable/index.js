import styled from 'styled-components'

const ThemedTable = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.14) 0 4px 5px 0;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  table {
    display: flex;
    flex-wrap: wrap;
  }
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
    padding: 5px 15px;
    flex-grow: 1;
    flex-basis: 0;
    min-height: 34px;
    display: flex;
    align-items: center;
  }
  a {
    color: #000;
    opacity: .6;
    &:hover {
      opacity: .9;
    }
  }
  .bottom-button-bar {
    padding: 15px;
  }
`

export default ThemedTable
