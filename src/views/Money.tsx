import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypesSection} from './Money/TypesSection';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;  
`
type Type = '-' | '+'
// type Tag = {id:number,name:string}

type Record = {
  tagID:number,
  note:string,
  type:Type,
  amount: number
}

const Money=()=>{
  const [record,setRecord] = useState<Record>({
    tagID: 0 ,
    note: '',
    type: '-' as Type,
    amount: 0
  })
  const onChange = (obj:Partial<Record>)=>{
    setRecord({...record, ...obj})
  }
  return (
    <MyLayout>
      <TagsSection value={record.tagID} onChange={(tagID)=>{onChange({tagID})}}/>
      <NotesSection value={record.note} onChange={(note)=>{onChange({note})}}/>
      <TypesSection value={record.type} onChange={(type)=>{onChange({type})}}/>
      <NumberPadSection value={record.amount}
                        onChange={(amount)=>{onChange({amount})}}
                        onOK={()=>{}}
      />
    </MyLayout>
  )
}

export default Money;