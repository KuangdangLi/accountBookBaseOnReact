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
    background-color: #C4C4C4;
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



const TypesSection = ()=>{
  const typeMap = {
    '-':'支出',
    '+':'收入'
  }
  const [type,setType] = useState('-')
  type X = keyof typeof typeMap
  const [typeList] = useState<X[]>(['-','+'])
  return (
    <Wrapper>
      <ol>
        {typeList.map(item=><li key={item} className={item === type ? 'selected' : ''} onClick={()=>{setType(item)}}>{typeMap[item]}</li>)}
      </ol>
    {/*<div >支出</div>*/}
    {/*<div className={'+' === type ? 'selected' : ''} onClick={()=>{setType('+')}}>收入</div>*/}
    </Wrapper>
  )
}
export {TypesSection};