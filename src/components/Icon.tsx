import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string,
  ID?:number
} & React.SVGProps<SVGSVGElement>

type IconTable = {[id:string]:string}

const iconTable:IconTable = {
  '1' : 'food',
  '2' : 'traffic',
  '3' : 'shopping',
  '4' : 'electric',
  '5' : 'salary',
  '6' : 'bonus',
  '7' : 'hongbao',
  '9999': 'accountBook'
}

const Icon = (props:Props)=>{
  const {name,ID,children,className,...rest} = props
  const svgHref =()=> {
    if(name){
      return name
    }else if(ID){
      if(ID - 7 > 0){
        return iconTable['9999']
      }else{
        return ('1234567'.indexOf(ID.toString())+1) && iconTable[ID.toString()]
      }
    }
  }
  return (
    <svg className={`icon${className ? className : ''}`} {...rest}>
      <use href={'#' + (svgHref())}></use>
    </svg>
  )
}

export default Icon;