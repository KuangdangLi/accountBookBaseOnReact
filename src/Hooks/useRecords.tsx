import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useRecords = ()=>{
  const [recordList,setRecordList] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecordList(JSON.parse(window.localStorage.getItem('recordList') || '[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('recordList',JSON.stringify(recordList))
  },recordList)
  const addRecord=(newRecord:NewRecordItem)=>{
    console.log(newRecord);
    console.log(newRecord.amount);
    console.log(newRecord.tagID);
    if(newRecord.amount === 0){window.alert('请输入金额');return false}
    if(newRecord.tagID === 0){window.alert('请选择标签');return false}
    setRecordList([...recordList, {...newRecord,createdAt: new Date().toISOString()}])
    return true
  }
  return {recordList,addRecord}
}

export {useRecords}