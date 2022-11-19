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
    >li{
      margin-right: 24px;
      background: #D9D9D9; 
      border-radius: 18px;
      display:inline-block;
      padding: 3px 18px;
      font-size: 14px;
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
  return (
    <Wrapper>
    <ol>
      {tags.map(tag=><li key={tag} onClick={()=>selectTag(tag)} className={tag === selectedTag ? 'selected' : ''}>{tag}</li>)}
      {/*<li>衣</li>*/}
      {/*<li>食</li>*/}
      {/*<li>住</li>*/}
      {/*<li>行</li>*/}
    </ol>
  <button className="button">新增标签</button>
    </Wrapper>
  )
}


export {TagsSection};