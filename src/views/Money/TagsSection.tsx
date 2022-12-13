import styled from 'styled-components';
import React, {useMemo} from 'react';
import {useTags} from '../../Hooks/useTags';
import {createdID} from '../../lib/createdID';
import Icon from '../../components/icon';
import NewButton from '../../components/NewButton';

const Wrapper = styled.section`
  flex-grow: 1;
  justify-content: end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px; 
  background-color: #fff;
  overflow-y: hidden;
  ol {
    @media (max-width: 300px){
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-size: 10px;
    overflow-y: auto;
    > li {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
       .iconWrapper {
        margin-bottom: 5px;
        border: 1px solid #f7f7f7;
        padding: 8px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        > svg {
          width: 20px;
          height: 20px;
          fill: #c4c4c4;
        }
      }
      > span {
        display: inline-block;
        color: #c4c4c4;
      }  
      &.selected {
        >span {
          color: black;
        }
        &.minus{
          > .iconWrapper {
            //border: 1px solid black;
            border-color: transparent;
            background-color: #38b478;
            > svg {
              fill: white;
            }
          }
        }
        &.plus{
          > .iconWrapper {
            //border: 1px solid black;
            border: none;
            background-color: #e3ae00;
            > svg {
              fill: white;
            }
          }
        }
      }
      >button.button{
        font-size: 12px;
        color: #a3b0c5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
          svg{
            fill: #c4c4c4;
          }
      }
    }
  }
`

type Props = {
  value: number,
  onChange: (tagID:number) => void
  type:Type
}

const TagsSection:React.FC<Props> = (props)=>{
  const {tags,setTags} = useTags()
  const selectTag =(tagID:number)=>{
    if(!props.value || props.value !== tagID){
      props.onChange(tagID)
    }else{
      props.onChange(0)
    }
  }
  const selectedAndColor = useMemo(()=>{
    return (tag:Tag)=>{
      let className = ''
      if(tag.ID === props.value){
        className = 'selected'
      }
      if(className){
        if(props.type === '-'){
          className = className.concat(' minus')
        }else if(props.type === '+'){
          className = className.concat(' plus')
        }
      }
      return className || ' '
    }
  },[props.value,props.type])
  const addTag = ()=>{
     const newTagName = window.prompt('请输入新标签名')
    if(newTagName === '' || newTagName === ' '){
      window.alert('请输入标签名')
    }else if(newTagName === null){
      return
    }else if(tags.map(tag=>tag.name).indexOf(newTagName)>=0){
      window.alert('不能输入重复的标签名')
      return;
    }else if(newTagName.length>4){
      window.alert('标签名过长')
      return;
    }else{
      setTags([...tags, {ID:createdID(),name:newTagName,type:props.type}])
    }
  }
  return (
    <Wrapper>
    {/*<ol>*/}
    {/*  {tags.filter(tag=>tag.type === props.type).map(tag=><li key={tag.ID} onClick={()=>selectTag(tag.ID)} className={tag.ID === props.value ? 'selected' : ''}>{tag.name}</li>)}*/}
    {/*</ol>*/}
      <ol>
        {tags.filter(tag=>tag.type === props.type).map(tag=>
          <li key={tag.ID} onClick={()=>selectTag(tag.ID)} className={selectedAndColor(tag)}>
              <div className="iconWrapper">
                <Icon ID={tag.ID} />
              </div>
              <span>{tag.name}</span>
          </li>)}
        <li>
          {/*<button className="button" onClick={addTag}>*/}
          {/*  <div className="iconWrapper">*/}
          {/*    <Icon name={'add'} />*/}
          {/*  </div>*/}
          {/*  <span>新增标签</span>*/}
          {/*</button>*/}
          <NewButton onClick={addTag} content={'新增标签'} iconName={'add'} />
        </li>
      </ol>
    </Wrapper>
  )
}


export {TagsSection};