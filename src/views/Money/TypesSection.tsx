import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  >ol{
  display: flex;
  flex-direction: row;
  >li{
    width: 50%;
    font-size: 24px;
    line-height: 64px;
    position: relative;
    &:nth-child(1){
      //background-color: rgba(62, 181, 117,0.5);
      background-color: #fff;
      color: black;
      &.selected{
        background-color: rgb(62, 181, 117);
        color: white;
      }
    }
    &:nth-child(2){
      //background-color: rgba(227, 174, 0,0.5);
      background-color: white;
      color: black;
      &.selected{
        background-color: rgb(227, 174, 0);
        color: white;
      }
    }
  &:not(.selected)::after{
    content: '';
    display: block;
    height: 2px;
    background-color: #e7e7e7;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  }
  }
`

const typeMap = {
  '-':'支出',
  '+':'收入'
}
type Type = keyof typeof typeMap

type Props = {
  value: Type,
  onChange:(type:Type)=>void
}

const TypesSection:React.FC<Props> = (props)=>{
  const [typeList] = useState<Type[]>(['-','+'])
  return (
    <Wrapper>
      <ol>
        {typeList.map(item=><li key={item} className={item === props.value ? 'selected' : ''} onClick={()=>{props.onChange(item)}}>{typeMap[item]}</li>)}
      </ol>
    </Wrapper>
  )
}
export {TypesSection};