import React from 'react';
import Layout from '../components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';

const TagList = styled.ol`
 >li{
   >a{
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
 }
`

const Space = styled.div`
height: 54px;
`

const Tags=()=>{
  const {tags} = useTags()
  return (
    <Layout>
      <TagList>
      {tags.map(tag=>
        <li key={tag.ID}>
          <Link to={'/tags/'+ tag.ID}>
          <span>{tag.name}</span>
          <Icon name={'right'} />
          </Link>
        </li>)}
      </TagList>
      <Space />
      <Button>新建标签</Button>
    </Layout>
  )
}

export default Tags;