import React, {useState} from 'react';
import Layout from '../components/Layout';
import {useTags} from 'Hooks/useTags';
import styled from 'styled-components';
import Icon from '../components/icon';
import {Link} from 'react-router-dom';
import {TypesSection} from './Money/TypesSection';
import NewButton from '../components/NewButton';
import {createdID} from '../lib/createdID';

const TagList = styled.ol`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &.minus{
    .iconWrapper{
      background-color: #3eb575;
    }
  }
  &.plus{
    .iconWrapper{
      background-color: #e3ae00;
    }
  }
 >li{
   -webkit-tap-highlight-color: rgba(255,255,255,0);
   margin-bottom: 10px;
   >a{
    display: flex;
    flex-direction: column;
     justify-content: center;
     align-items: center;
     //width: 50px;
     //height: 50px;
   }
   >.button{
    font: inherit;
   }
   .iconWrapper{
     border: 1px solid #f8f8f8;
     padding: 15px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     svg{
       width: 30px;
       height: 30px;
       fill: white;
     }
   }
   span{
     display: inline-block;
   }
 }
`


const Tags=()=>{
  const {setTags,tags} = useTags()
  const [type,setType] = useState<Type>('-');
  const changeType = (type:Type)=>{setType(type)}
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
      setTags([...tags, {ID:createdID(),name:newTagName,type:type}])
    }
  }
  return (
    <Layout>
      <TypesSection value={type} onChange={(type)=>{changeType(type)}}/>
      <TagList className={type === '-' ? 'minus' : 'plus'}>
      {tags.filter(tag=>tag.type === type).map(tag=>
        <li key={tag.ID}>
          <Link to={'/tags/'+ ((tag.ID<10) ? '' : tag.ID)}>
           <div className="iconWrapper">
          <Icon ID={tag.ID} />
           </div>
          <span>{tag.name}</span>
          </Link>
        </li>)}
        <li>
          <NewButton onClick={addTag} content={'新增标签'} iconName={'add'} />
        </li>
      </TagList>
      {/*<Space />*/}
      {/*<Button>新建标签</Button>*/}
    </Layout>
  )
}

export default Tags;