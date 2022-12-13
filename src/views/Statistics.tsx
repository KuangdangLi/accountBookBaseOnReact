import React, {useEffect, useMemo, useState} from 'react';
import Layout from '../components/Layout';
import {TypesSection} from './Money/TypesSection';
import {useRecords} from '../Hooks/useRecords';
import styled from 'styled-components';
import {useTags} from '../Hooks/useTags';
import dayjs, {Dayjs} from 'dayjs';
import Icon from '../components/icon';
import MyEcharts from '../components/MyEcharts';
import NewButton from '../components/NewButton';
import MonthPicker from '../components/MonthPicker';

const TypesSectionWrapper = styled.div`
background-color: white;
`
// const Item = styled.div`
//   .content{
//   display:flex;
//   justify-content: space-between;
//   background: white;
//   font-size: 18px;
//   line-height: 20px;
//   padding: 10px 16px;
//   > .note{
//     margin-right: auto;
//     margin-left: 16px;
//     font: inherit;
//     color: #999;
//
//   }
//   }
// `;

// const Header = styled.h3`
//   text-align: left;
//   font-size: 18px;
//   line-height: 20px;
//   padding: 10px 16px;
//   margin-right: auto;
//   display: flex;
//   justify-content: space-between;
// `

const NoInformation = styled.div`
  margin-top: 200px;
  text-align: center;
`

const Wrapper = styled.div`
  height: 85%;
  overflow-y: auto;
  //position: relative;
  //transform: rotate(360deg);
  //filter: alpha();
  //filter: barn();
  &.minus{
    .iconWrapper{
      background-color: #4ead75;
    }
  }
  &.plus{
    .iconWrapper{
      background-color: #e3ae00;
    }
  }
  >.buttonWrapper{
    position: fixed;
    bottom: 15%;
    left: 1%;
    >.button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      >.iconWrapper{
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        >svg{
          width: 15px;
          height: 15px;
          fill: white;
        }
      }
      >span{
        display: inline-block;
      }
    }
  }
  >ul {
    background-color: white;
    margin: 5px 5px 0;
    border-radius: 5px;
    > li {
      > header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 15px;
        background-color: #fbfbfb;
      }

      > .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        > .aside {
          padding: 15px;

          > .iconWrapper {
            margin-bottom: 5px;
            padding: 8px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            > svg {
              width: 20px;
              height: 20px;
              fill: white;
            }
          }
        }

        > .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 15px 15px 0;
          width: 100%;
          border-bottom: 1px solid #f1f1f1;

          > .upItem {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 6px;
          }

          > .downItem {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            font-size: 14px;
            color: #cdcdcd;
          }
        }

        &:last-child {
          > .main {
            border-bottom: none;
          }
        }
      }
    }
  }
`

const LayerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
  font-size: 14px;
`

const Statistics=()=>{
  const [x,setX] = useState(false)
  const {recordList} = useRecords()
  const {findTag} = useTags()
  const [type,setType] = useState<Type>('-')
  const selectType = (value:Type)=>{
    setType(value)
  }
  const [selectedMonth,setSelectedMonth] =useState(dayjs())
  const selectMonth = (month:Dayjs)=>{
    setSelectedMonth(month)
  }
  ////////////
  // const nowDate = dayjs(new Date())
  // const date1 = nowDate.date(1)
  // const date1Day = date1.day()
  // const dateArr:Dayjs[] = []
  // const traverse = ()=>{
  //   for(let i = -date1Day;i<42-date1Day;i++){
  //     dateArr.push(date1.add(i,'d'))
  //   }
  //   console.log('dateArr');
  //   console.log(dateArr);
  //   const newArr = JSON.parse(JSON.stringify(dateArr))
  //   console.log('newArr');
  //   console.log(newArr);
  //   const newNewArr =  (newArr as string[]).map(item=>dayjs(item))
  //   console.log('newNewArr');
  //   console.log(newNewArr);
  //   console.log((new Date()).toISOString());
  // }
  // traverse()
  ///////////
  const selectedRecordList = recordList.filter((recordItem)=>recordItem.type === type).filter((recordItem)=>dayjs(recordItem.createdAt).isSame(selectedMonth,'month'))
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
      hash[key].List.sort((a,b)=>{
        if(a.createdAt === b.createdAt) return 0
        if(a.createdAt > b.createdAt) return -1
        if(a.createdAt < b.createdAt) return 1
        return 0
      })
      hash[key].total = hash[key].List.reduce((sum,item)=>{return ((sum*100) + (item.amount*100))/100},0)

    }
    return Object.entries(hash).sort((a,b)=>{
      if(a[0]===b[0])return 0;
      if(a[0]>b[0])return -1;
      if(a[0]<b[0])return 1;
      return 0
    })
  }
  const chartOption = useMemo(():ChartOption=>{
    const x:RecordItem[] = JSON.parse(JSON.stringify(selectedRecordList))
    x.sort((a,b)=>{
      if(a.createdAt===b.createdAt)return 0;
      if(a.createdAt>b.createdAt)return -1;
      if(a.createdAt<b.createdAt)return 1;
      return 0
    })
    const lastDay = dayjs(x[0]?.createdAt)
    const dateArr:Dayjs[] = []
    dateArr.push(lastDay)
    const amountArr:number[] = []
    let dataOfAMonth:RecordItem[] = []
    const pushAmount = (all:RecordItem[],uni:Dayjs)=>{
      const xxx = all.filter(item=>dayjs(item.createdAt).isSame(uni,'day'))
      dataOfAMonth=[...dataOfAMonth,...xxx]
      xxx[0] ? amountArr.push(xxx.reduce((sum,item)=>{return ((sum*100) + (item.amount*100))/100},0)) : amountArr.push(0)
    }
    pushAmount(x,lastDay)
    for(let i = 0;i<31;i++){
      if(i!==0){
        const xx = lastDay.subtract(i,'day')
        dateArr.push(xx)
        pushAmount(x,xx)
      }
    }
    const idAndAmount:IdAndAmount = {}
    dataOfAMonth.forEach(item=> {
      // const tagName = findTag(item.tagID).name
      if(!(idAndAmount[item.tagID])){
        idAndAmount[item.tagID] = item.amount
      }else{
        idAndAmount[item.tagID] = ((idAndAmount[item.tagID] *100 ) + (item.amount * 100)) / 100
      }
    })
    const pieChartOption:PieChartOption[] = []
    let medium = {name:'',value:0}
    for(let i in idAndAmount){
      medium.name = findTag(Number(i)).name
      medium.value = idAndAmount[i]
      pieChartOption.push(JSON.parse(JSON.stringify(medium)))
    }
    pieChartOption.sort((a,b)=>{
      if(a.value === b.value) return 0
      if(a.value > b.value) return -1
      if(a.value < b.value) return 1
      return 0
    }).forEach((a,index,array)=>a.itemStyle={color:`${type === '-' ? 'rgba(68, 199, 128' : 'rgba(227, 174, 0'},${(1/(array.length))*(array.length-index+1)})`})
    const newDate = dateArr.map(date=>date.format('MM-D'))
    return {dateArr:newDate,amountArr,pieChartOption}
  },[selectedRecordList,findTag,type])
  const modifyOpacity =()=>{
    const x = document.getElementsByClassName('buttonWrapper')[0] as HTMLDivElement
    const xx = document.getElementsByClassName('groupList')[0].scrollTop
    setTimeout(()=>{
      if(document.getElementsByClassName('groupList')[0].scrollTop === xx){
        (x).style.opacity = '1'
      }else {
        (x).style.opacity = '0.5'
      }
    },20)
  }
  useEffect(()=>{
    window.addEventListener('scroll',modifyOpacity,true)
    return ()=>{
      window.removeEventListener('scroll',modifyOpacity)
    }
  },[])
  return (
    <Layout>
      <TypesSectionWrapper>
        <TypesSection value={type} onChange={selectType} />
      </TypesSectionWrapper>
      {/*<DatePicker initDate={selectedMonth} selectDate={selectMonth}/>*/}
      <LayerWrapper>
      <MonthPicker initMonth={selectedMonth} selectMonth={selectMonth} />
        <div>{`总额：￥${selectedRecordList.reduce((sum,item)=>{return ((sum*100) + (item.amount*100))/100},0)}`}</div>
      </LayerWrapper>
      {/*<span>{selectedMonth.format('YYYY-MM-DD')}</span>*/}
      {/*{array().map(group=>(*/}
      {/*  <div key={group[0]}>*/}
      {/*    <Header>*/}
      {/*    <div>{group[0]}</div><div>￥{group[1].total}</div>*/}
      {/*      /!*group[1].reduce((sum,item)=>{return ((sum*100) + (item.amount*100))/100},0)*!/*/}
      {/*    </Header>*/}
      {/*    {group[1].List.map(recordItem=>*/}
      {/*      <Item key={recordItem.createdAt}>*/}
      {/*        <div  className='content'>*/}
      {/*          <div>{findTag(recordItem.tagID).name}</div>*/}
      {/*          <div className='note'>{recordItem.note}</div>*/}
      {/*          <div>￥{recordItem.amount}</div>*/}
      {/*        </div>*/}
      {/*      </Item>)}*/}
      {/*  </div>*/}
      {/*))}*/}
      {array()[0] ? <Wrapper className={type === '-' ? 'minus groupList' : 'plus groupList'}>
        {x || <ul>
          {array().map(group => (
            <li key={group[0]}>
              <header>
                <span>{group[0].split('年')[1]}</span>
                <span>￥{group[1].total}</span>
              </header>
              {group[1].List.map(recordItem => (
                <div className={'content'} key={recordItem.createdAt}>
                  <div className={'aside'}>
                    <div className={'iconWrapper'}>
                      <Icon ID={recordItem.tagID}/>
                    </div>
                  </div>
                  <div className={'main'}>
                    <div className={'upItem'}>
                      <div>{findTag(recordItem.tagID).name}</div>
                      <div>￥{recordItem.amount}</div>
                    </div>
                    <div className={'downItem'}>
                      <span>{dayjs(recordItem.createdAt).format('HH:mm')} &nbsp;</span>
                      <span>{`${recordItem.note}` ? `| ${recordItem.note}` : ''}</span>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>}
        {x  && <MyEcharts arr={chartOption} type={type}/>}
        <div className={'buttonWrapper'}>
          {x || <NewButton onClick={() => setX(!x)} iconName={'bar'}/>}
          {x && <NewButton onClick={() => setX(!x)} iconName={'detail'}/>}
        </div>
      </Wrapper> : <NoInformation><span>暂无信息</span></NoInformation>}

    </Layout>
  )
}

export default Statistics;