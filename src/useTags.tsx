import {useState} from 'react';

const defaultTags = ['衣','食','住','行']

const useTags = ()=>{
  const [tags,setTags] = useState(defaultTags)
  return {tags,setTags}
}

export {useTags}