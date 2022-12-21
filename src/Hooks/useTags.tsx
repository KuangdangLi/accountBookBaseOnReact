import {useEffect, useState} from 'react';
import {createdID} from '../lib/createdID';
import {useUpdate} from './useUpdate';
import {Tag} from '../views/Tag';
import {useRecords} from './useRecords';


const defaultTags = ():Tag[]=>{
  return [
    {ID:createdID(),name:'餐饮',type:'-'},
    {ID:createdID(),name:'交通',type:'-'},
    {ID:createdID(),name:'购物',type:'-'},
    {ID:createdID(),name:'生活缴费',type:'-'},
    {ID:createdID(),name:'工资',type:'+'},
    {ID:createdID(),name:'奖金',type:'+'},
    {ID:createdID(),name:'红包',type:'+'},
    {ID:createdID(),name:'其它支出',type:'-'},
    {ID:createdID(),name:'其它收入',type:'+'},

  ]
}

const useTags = ()=>{
  const [tags,setTags] = useState<Tag[]>([])
  const {recordList} = useRecords()
  useEffect(()=>{
    const localTagList = JSON.parse(window.localStorage.getItem('reactTagList') || '[]')
    localTagList.length === 0 ? setTags(defaultTags()) : setTags(localTagList)
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('reactTagList',JSON.stringify(tags))
  },tags)
  const findTag = (id:number):Tag=>{
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
  const updateTag=(id:number,obj:{name:string},type:Type)=>{
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(findTagIndex(id),1,{ID:id,...obj})
    setTags(tags.map(tag => tag.ID === id ? {ID:id,type,...obj} : tag))
  }
  const removeTag= (id:number)=>{
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(findTagIndex(id),1)
    recordList.filter(recordItem=>recordItem.tagID === id).forEach(recordItem=> {if(recordItem.type==='-'){recordItem.tagID=8}else {recordItem.tagID = 9}})
    setTags(tags.filter(tag=>tag.ID !== id))
  }
  return {tags,setTags,findTag,findTagIndex,updateTag,removeTag}
}

export {useTags}