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
  const addRecord=(newRecord:RecordItem)=>{
    if(newRecord.amount === 0){window.alert('请输入金额');return false}
    if(newRecord.tagID === 0){window.alert('请选择标签');return false}
    newRecord.createdAt || (newRecord.createdAt = new Date().toISOString())
    setRecordList([...recordList, {...newRecord}])
    return true
  }
  return {recordList,addRecord}
}

export {useRecords}