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

const Money=()=>{
  const [record,setRecord] = useState({
    tag: '',
    note: '',
    type: '-',
    amount: 0
  })
  type Record = typeof record
  const onChange = (obj:Partial<Record>)=>{
    setRecord({...record, ...obj})
  }
  return (
    <MyLayout>
      <TagsSection value={record.tag} onChange={(tag)=>{onChange({tag})}}/>
      <NotesSection value={record.note} onChange={(note)=>{onChange({note})}}/>
      <TypesSection />
      <NumberPadSection />
    </MyLayout>
  )
}

export default Money;