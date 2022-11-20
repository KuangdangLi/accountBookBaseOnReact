import styled from 'styled-components';
import React from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 13px 16px;
  font-size: 14px;
`
type Props = {
  value: string,
  onChange: (note:string) => void
}
const NotesSection:React.FC<Props> = (props)=>{
  return (
    <Wrapper>
      <Input label='备注' type="text" placeholder='请输入备注' value={props.value} onChange={e=>(props.onChange(e.target.value))}/>
    </Wrapper>
  )
}

export {NotesSection};