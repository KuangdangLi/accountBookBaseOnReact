import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {NotesSection} from './Money/NotesSection';
import {Space} from '../components/Space';

type Params = {
  id:string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px 23px;
  align-items: center;
  background-color: white;
  &::after{
    content: '';
  }
  >svg.icon{
    width: 1.5em;
    height: 1.5em;
  }
`
const InputWrapper = styled.div`
  margin-top: 8px;
  padding-left: 23px;
  background-color: white;
`

const Tag:React.FC = ()=>{
  const {findTag} = useTags()
  const {id} = useParams<Params>()
  const tag = findTag(id)
  return (
    <Layout>
      <TopBar>
        <Icon name={'left'} />
        <span>编辑标签</span>
      </TopBar>
      <InputWrapper>
        <Input label='标签名' type="text"  placeholder='请输入标签名' value={tag.name}/>
      </InputWrapper>
      <Space />
      <Button>删除标签</Button>
    </Layout>
  )
}

export {Tag}