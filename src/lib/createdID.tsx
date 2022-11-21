let id = JSON.parse(window.localStorage.getItem('ID') || '0')
const createdID = ()=>{
  id+=1;
  window.localStorage.setItem('ID',JSON.stringify(id))
  return id
}

export {createdID}