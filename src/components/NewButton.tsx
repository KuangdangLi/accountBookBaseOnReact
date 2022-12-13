import React from 'react';
import Icon from './icon';

type Props = {
  onClick: ()=>void,
  iconName:string,
  content?:string
}


const NewButton:React.FC<Props> = (props)=>{
  return (
    <button className="button" onClick={props.onClick} >
      <div className="iconWrapper">
        <Icon name={props.iconName} />
      </div>
      {props.content&&<span>{props.content}</span>}
    </button>
  )
}

export default NewButton