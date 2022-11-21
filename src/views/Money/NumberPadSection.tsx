import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {compute} from './NumberPadSection/Compute';

type Props = {
  value:number,
  onChange:(amount:number)=>void
  onOK:()=>void
}

const NumberPadSection:React.FC<Props> = (props)=>{
  const [input,setInput] = useState('0')
  const setOutput = (newValue:string)=>{
     let medianValue
    if(newValue.length>16){
      medianValue = newValue.slice(0,16)
    }else if(newValue.length === 0){
      medianValue = 0
      newValue = '0'
    }else{
      medianValue = parseFloat(newValue)
    }
    setInput(newValue)
    if(typeof medianValue === 'number'){
      props.onChange(medianValue)
    }
  }
  const computeOutput = (e:React.MouseEvent)=>{
    const value =  (e.target as HTMLButtonElement).textContent
    if(value === null){return;}
    if(value === 'OK'){
      props.onOK()
      return
    }
    if('0123456789.'.split('').concat(['删除','清空']).indexOf(value)>=0){
      let newValue = compute(value,input)

      setOutput(newValue)
    }
  }
  return (
    <Wrapper>
      <div className="output">
        {input}
      </div>
      <div className="pad clearfix" onClick={computeOutput}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection};