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
  &.selected::after{
    content: '';
    display: block;
    height: 4px;
    background-color: #333;
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