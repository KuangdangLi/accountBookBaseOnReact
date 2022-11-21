import {useEffect, useState} from 'react';
import {createdID} from '../lib/createdID';
import {useUpdate} from './useUpdate';

type Tag = {ID:number,name:string}

const defaultTags = ()=>{
  return [
    {ID:createdID(),name:'衣'},
    {ID:createdID(),name:'食'},
    {ID:createdID(),name:'住'},
    {ID:createdID(),name:'行'}
  ]
}

const useTags = ()=>{
  const [tags,setTags] = useState<{ID:number,name:string}[]>([])
  useEffect(()=>{
    const localTagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
    localTagList.length === 0 ? setTags(defaultTags()) : setTags(localTagList)
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('tagList',JSON.stringify(tags))
  },tags)
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
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(findTagIndex(id),1,{ID:id,...obj})
    setTags(tags.map(tag => tag.ID === id ? {ID:id,...obj} : tag))
  }
  const removeTag= (id:number)=>{
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(findTagIndex(id),1)
    setTags(tags.filter(tag=>tag.ID !== id))
  }
  return {tags,setTags,findTag,findTagIndex,updateTag,removeTag}
}

export {useTags}