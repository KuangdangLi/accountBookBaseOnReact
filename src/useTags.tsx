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
  const findTag = (id:string)=>{
     return  tags.filter(tag => tag.ID === parseFloat(id))[0];
  }
  return {tags,setTags,findTag}
}

export {useTags}