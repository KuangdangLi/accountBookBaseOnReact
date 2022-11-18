import styled from 'styled-components';

const NotesSection = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    >span{
      color: #333;
      white-space: nowrap;
      margin-right: 16px;
    }
    >input{
      border: none;
      display: block;
      width: 100%;
      height: 72px;
      background:none;
    }  
  }
`
export {NotesSection};