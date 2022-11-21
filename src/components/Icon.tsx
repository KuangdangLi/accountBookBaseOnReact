import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name:string
} & React.SVGProps<SVGSVGElement>

const Icon = (props:Props)=>{
  const {name,children,className,...rest} = props
  return (
    <svg className={`icon${className ? className : ''}`} {...rest}>
      <use href={'#' + name}></use>
    </svg>
  )
}

export default Icon;