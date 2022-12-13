import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypesSection} from './Money/TypesSection';
import {useRecords} from '../Hooks/useRecords';
import DatePicker from '../components/DatePicker';
import dayjs from 'dayjs';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;  
`
const LayWrapper = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  >div:nth-child(2){
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`
// type Tag = {id:number,name:string}

const defaultRecordItem = {
  tagID: 0 ,
  note: '',
  type: '-' as Type,
  amount: 0,
  createdAt: ''
}
// const TypeSectionWrapper = styled.div`
//   >section{
//     >ol{
//       >li:nth-child(1){
//        //background-color: rgba(62, 181, 117,0.5);
//         background-color: #fff;
//         color: black;
//         &.selected{
//           background-color: rgb(62, 181, 117);
//           color: white;
//         }
//       }
//       >li:nth-child(2){
//         //background-color: rgba(227, 174, 0,0.5);
//         background-color: white;
//         color: black;
//         &.selected{
//           background-color: rgb(227, 174, 0);
//           color: white;
//         }
//       }
//     }
//   }
//   //background-color: #C4C4C4;
// `
const Money=()=>{
  const [recordItem,setRecordItem] = useState(defaultRecordItem)
  const {addRecord} = useRecords()
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
      <TagsSection value={recordItem.tagID} type={recordItem.type} onChange={(tagID)=>{onChange({tagID})}}/>
      <LayWrapper>
        <NotesSection value={recordItem.note} onChange={(note)=>{onChange({note})}}/>
        <DatePicker initDate={dayjs()} selectDate={(day)=>{onChange({createdAt:day.toISOString()})}} />
      </LayWrapper>
      <TypesSection value={recordItem.type} onChange={(type)=>{onChange({type})}}/>
      <NumberPadSection value={recordItem.amount} type={recordItem.type}
                        onChange={(amount)=>{onChange({amount})}}
                        onOK={()=>{submit()}}
      />
    </MyLayout>
  )
}

export default Money;