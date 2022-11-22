import React, {useState} from 'react';
import Layout from '../components/Layout';
import {TypesSection} from './Money/TypesSection';
import {useRecords} from '../Hooks/useRecords';
import styled from 'styled-components';
import {useTags} from '../Hooks/useTags';
import dayjs from 'dayjs';

const TypesSectionWrapper = styled.div`
background-color: white;
`
const Item = styled.div`
  .content{
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    font: inherit;
    color: #999;
    
  }
  }
`;

const Header = styled.h3`
  text-align: left;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`

const Statistics=()=>{
  const {recordList} = useRecords()
  const {findTag} = useTags()
  const [type,setType] = useState<Type>('-')
  const selectType = (value:Type)=>{
    setType(value)
  }
  const selectedRecordList = recordList.filter((recordItem)=>recordItem.type === type)
  const hash:{[title:string]: { List:RecordItem[],total:number }} = {}
  selectedRecordList.forEach((recordItem)=>{
    const key = dayjs(recordItem.createdAt).format('YYYY年MM月DD日')
    if(!hash[key]){
      hash[key] = {List:[],total: 0}
    }
    hash[key].List.push(recordItem)
  })
  const array = ()=>{
    for(let key in hash){
     hash[key].total = hash[key].List.reduce((sum,item)=>{return ((sum*100) + (item.amount*100))/100},0)

    }
    return Object.entries(hash).sort((a,b)=>{
      if(a[0]===b[0])return 0;
      if(a[0]>b[0])return 1;
      if(a[0]<b[0])return -1;
      return 0
    })
  }

  return (
    <Layout>
      <TypesSectionWrapper>
      <TypesSection value={type} onChange={selectType} />
      </TypesSectionWrapper>
      {array().map(group=>(
        <div key={group[0]}>
          <Header>
          <div>{group[0]}</div><div>￥{group[1].total}</div>
            {/*group[1].reduce((sum,item)=>{return ((sum*100) + (item.amount*100))/100},0)*/}
          </Header>
          {group[1].List.map(recordItem=>
            <Item key={recordItem.createdAt}>
              <div  className='content'>
                <div>{findTag(recordItem.tagID).name}</div>
                <div className='note'>{recordItem.note}</div>
                <div>￥{recordItem.amount}</div>
              </div>
            </Item>)}
        </div>
      ))}
    </Layout>
  )
}

export default Statistics;