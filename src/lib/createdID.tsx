let id = JSON.parse(window.localStorage.getItem('reactID') || '0')
const createdID = ()=>{
  id+=1;
  window.localStorage.setItem('reactID',JSON.stringify(id))
  return id
}

export {createdID}