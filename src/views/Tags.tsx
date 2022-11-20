import React from 'react';
import Layout from '../components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/icon';

const TagList = styled.ol`
 >li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
    padding: 11px 16px 12px 0;
    margin-left: 15px;
    text-align: center;
    border-bottom: 1px solid #d5d5d9;
   >svg.icon{
     width: 20px;
     height: 20px;
   }
 }
`

const Button = styled.button`
  font-size: 16px;
  padding: 9px 16px;
  background: #767676;
  color: white;
  border-radius: 4px;
`

const Space = styled.div`
height: 54px;
`

const Tags=()=>{
  const {tags,setTags} = useTags()
  return (
    <Layout>
      <TagList>
      {tags.map(tag=>
        <li>
          <span>{tag}</span>
          <Icon name={'right'} />
        </li>)}
      </TagList>
      <Space />
      <Button>新建标签</Button>
    </Layout>
  )
}

export default Tags;