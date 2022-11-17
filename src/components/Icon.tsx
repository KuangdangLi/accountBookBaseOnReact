import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name:string
}

const Icon = (props:Props)=>{
  return (
    <svg className="icon">
      <use href={'#' + props.name}></use>
    </svg>
  )
}

export default Icon;