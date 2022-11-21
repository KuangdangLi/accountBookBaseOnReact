import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useTags} from '../Hooks/useTags';
import Layout from '../components/Layout';
import Icon from '../components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
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
  const {findTag,removeTag,updateTag} = useTags()
  const {id} = useParams<Params>()
  const ID = parseFloat(id)
  const tag = findTag(ID)
  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  const content = (tag:{ID:number,name:string})=>(
    <div>
    <InputWrapper>
      <Input label='标签名' type="text"  placeholder='请输入标签名' value={tag.name} onChange={(e)=>{updateTag(ID,{name:e.target.value})}}/>
    </InputWrapper>
  <Space />
  <Button onClick={()=>{removeTag(ID)}}>删除标签</Button>
    </div>
  )
  return (
    <Layout>
      <TopBar>
        <Icon name={'left'} onClick={goBack}/>
        <span>编辑标签</span>
      </TopBar>
      {tag ? content(tag) : <div>标签不存在</div>}
    </Layout>
  )
}

export {Tag}