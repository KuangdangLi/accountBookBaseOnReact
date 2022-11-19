import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  flex-grow: 1;
  justify-content: end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px;
  ol{
    display: flex;
    flex-direction: row;
    width: 100vw;
    flex-wrap: wrap;
    
    >li{
      margin-right: 24px;
      margin-top: 16px;
      background: #D9D9D9; 
      border-radius: 18px;
      display:inline-block;
      padding: 3px 18px;
      font-size: 14px;
      white-space: nowrap;
      &.selected{
        background-color: #20bf64;
        color: white;
      }
    }
  }
  .button{
    color: #999;
    font-size: 14px;
    border-bottom: 1px solid #666;
    padding: 2px 4px;
    margin-top: 18px;
  }
`

const TagsSection = ()=>{
  const [tags,setTags] = useState(['衣','食','住','行'])
  const [selectedTag,setSelectedTag] = useState('')
  const selectTag =(tag:string)=>{
    if(!selectedTag || selectedTag !== tag){
      setSelectedTag(tag)
    }else{
      setSelectedTag('')
    }
  }
  const addTag = ()=>{
     const newTagName = window.prompt('请输入新标签名')
    if(newTagName === '' || newTagName === ' '){
      window.alert('请输入标签名')
    }else if(newTagName === null){
      return
    }else if(tags.indexOf(newTagName)>=0){
      window.alert('不能输入重复的标签名')
      return;
    }else if(newTagName.length>4){
      window.alert('标签名过长')
      return;
    }else{
      setTags([...tags,newTagName])
    }
    console.log(newTagName);
    console.log(typeof newTagName);
  }
  return (
    <Wrapper>
    <ol>
      {tags.map(tag=><li key={tag} onClick={()=>selectTag(tag)} className={tag === selectedTag ? 'selected' : ''}>{tag}</li>)}
    </ol>
  <button className="button" onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}


export {TagsSection};