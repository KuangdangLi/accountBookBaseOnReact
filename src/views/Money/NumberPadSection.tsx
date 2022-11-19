import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {compute} from './NumberPadSection/Compute';


const NumberPadSection = ()=>{
  const [output,setOutput] = useState('0')
  const computeOutput = (e:React.MouseEvent)=>{
    const value =  (e.target as HTMLButtonElement).textContent
    if(value){
      setOutput(compute(value,output))
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