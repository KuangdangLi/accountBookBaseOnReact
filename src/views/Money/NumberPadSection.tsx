import React from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {compute} from './NumberPadSection/Compute';

type Props = {
  value:number,
  onChange:(amount:number)=>void
  onOK:()=>void
}

const NumberPadSection:React.FC<Props> = (props)=>{
  const output = props.value.toString()
  const setOutput = (output:string)=>{
     let value
    if(output.length>16){
      value = output.slice(0,16)
    }else if(output.length === 0){
      value = 0
    }else{
      value = parseFloat(output)
    }
    console.log(value);
    if(typeof value === 'number'){
      props.onChange(value)
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
      let newValue = compute(value,output)
      console.log(newValue);
      setOutput(newValue)
    }
  }
  return (
    <Wrapper>
      <div className="output">
        {output}
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