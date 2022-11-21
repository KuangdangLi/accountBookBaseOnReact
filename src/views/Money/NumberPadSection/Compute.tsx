const compute = (value:string,output:string)=>{
  switch (value){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if(output === '0'){
        return value
      }else{
        return output + value
      }
    case '删除':
      return output.slice(0,-1)
    case '清空':
      return ''
    case '.':
      if(output.indexOf('.')>=0){return output}
      return output + '.'
    default:
      return ''
  }
}

export {compute}