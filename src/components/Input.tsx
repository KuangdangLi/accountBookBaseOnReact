import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  
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
`

type Props = {
  label:String
} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<Props> =(props)=>{
  const {label,children,...rest} = props
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} maxLength={10}/>
      {/*type="text" placeholder='请输入备注' value={props.value} onChange={e=>(props.onChange(e.target.value))}*/}
    </Label>
  )
}

export {Input}