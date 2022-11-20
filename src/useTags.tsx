import {useState} from 'react';
import {createdID} from './lib/createdID';

type Tag = {ID:number,name:string}

const defaultTags:Tag[] =
  [
    {ID:createdID(),name:'衣'},
    {ID:createdID(),name:'食'},
    {ID:createdID(),name:'住'},
    {ID:createdID(),name:'行'}
  ]

const useTags = ()=>{
  const [tags,setTags] = useState(defaultTags)
  const findTag = (id:number)=>{
     return  tags.filter(tag => tag.ID === id)[0];
  }
  const findTagIndex = (id:number)=>{
    let result = -1;
    for(let i = 0;i<tags.length;i++){
      if(tags[i].ID === id){
        result = i
        break
      }
    }
    return result
  }
  const updateTag=(id:number,obj:{name:string})=>{
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(findTagIndex(id),1,{ID:id,...obj})
    setTags(tagsClone)
  }
  const removeTag= (id:number)=>{
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(findTagIndex(id),1)
    setTags(tagsClone)
  }
  return {tags,setTags,findTag,findTagIndex,updateTag,removeTag}
}

export {useTags}