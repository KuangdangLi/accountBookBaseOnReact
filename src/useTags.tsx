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
  return {tags,setTags}
}

export {useTags}