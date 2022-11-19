import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const NotesSection:React.FC = ()=>{
  const [note,setNote] = useState('')
  console.log(note);
  return (
    <Wrapper>
    <label>
      <span>备注</span>
      <input type="text" placeholder='请输入备注' value={note} onChange={e=>(setNote(e.target.value))} maxLength={10}/>
    </label>
    </Wrapper>
  )
}

export {NotesSection};