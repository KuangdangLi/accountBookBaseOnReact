import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypesSection} from './Money/TypesSection';
import {useRecords} from '../Hooks/useRecords';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;  
`

// type Tag = {id:number,name:string}

const defaultRecordItem = {
  tagID: 0 ,
  note: '',
  type: '-' as Type,
  amount: 0
}
const TypeSectionWrapper = styled.div`
  background-color: #C4C4C4;
`
const Money=()=>{
  const [recordItem,setRecordItem] = useState(defaultRecordItem)
  const {recordList,addRecord} = useRecords()
  const onChange = (obj:Partial<RecordItem>)=>{
    setRecordItem({...recordItem, ...obj})
  }
  const submit=()=>{
    if(addRecord(recordItem)){
      alert('保存成功')
      setRecordItem(defaultRecordItem)
    }else {
      setRecordItem(defaultRecordItem)
    }
  }
  return (
    <MyLayout>
      {JSON.stringify(recordList)}
      <TagsSection value={recordItem.tagID} onChange={(tagID)=>{onChange({tagID})}}/>
      <NotesSection value={recordItem.note} onChange={(note)=>{onChange({note})}}/>
      <TypeSectionWrapper>
      <TypesSection value={recordItem.type} onChange={(type)=>{onChange({type})}}/>
      </TypeSectionWrapper>
      <NumberPadSection value={recordItem.amount}
                        onChange={(amount)=>{onChange({amount})}}
                        onOK={()=>{submit()}}
      />
    </MyLayout>
  )
}

export default Money;