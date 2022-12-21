import React, {useEffect, useMemo, useState} from 'react';

import dayjs, {Dayjs} from 'dayjs';
import styled from 'styled-components';
import Icon from './icon';

const DatePickerWrapper = styled.div`
  position: relative;
  align-items: center;
  font-size: 14px;

  >div.trigger{
    height: 100%;
    //width: 100px;
    //border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
    user-select: none;
    >.iconWrapper{
      margin-top: -3px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      > svg{
        fill: #3eb575;
      }
    }
  }
  >.picker {
    position: absolute;
    top: 40px;
    right: 10px;
    z-index: 99;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(128, 128, 128, 0.3);

    > div.head {
      height: 40px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 226px;
      background-color: #3eb575;
      color: #f7f7f7;

      > span {
        cursor: pointer;
        user-select: none;
      }
    }

    > table {
      margin-top: 10px;
      //width: 500px;
      //height: 200px;
      border-radius: 5px;

      > thead {
        > tr {
          > th {
            font-size: 12px;
            color: #c4c4c4;
          }
        }
      }

      > tbody {
        overflow: hidden;

        > tr {
          padding-top: 8px;

          > td {
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: white;
            cursor: pointer;
            &.selected {
              background-color: #3eb575;
            }

            &.notSelected {
              color: #c4c4c4;
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
`


type DayList = Dayjs[]

type Props = {
  initDate:Dayjs
  selectDate: (day:Dayjs)=>void
}

const DatePicker:React.FC<Props> = (props)=>{
  const {initDate,selectDate} = props
  const [mediumDate,setMediumDate] = useState(initDate)
  const [selectedDate,setSelectedDate] =useState()
  const [pickerSwitch,setPickerSwitch] = useState(false)
  const dateArr:DayList[] = useMemo(()=>{
    const month = mediumDate.month()
    const date1 = mediumDate.date(1)
    const date1Day = date1.day()
    let howMuchDay
    if(month === 1){
       howMuchDay = (6 - (date1.month(month+1).subtract(1,'d').day()))+(6-(6-date1Day)) >= 7 ? 35 : 28
    }else{
       howMuchDay =(6 - (date1.month(month+1).subtract(1,'d').day()))+(6-(6-date1Day)) >= 7 ? 42 : 35
    }
    let x:DayList = []
    const xxx:DayList[] =[]
    for(let i = -date1Day;i<howMuchDay;i++){
      x.push(date1.add(i,'d'))
      if(x.length === 7){
        xxx.push((JSON.parse(JSON.stringify(x)) as string[]).map(item=>dayjs(item)))
        x = []
      }
    }

    return xxx
  },[mediumDate])

  const printData = (e:any)=>{
    const x = dayjs(e.target.dataset.date)
    setSelectedDate(x)
    selectDate(x)
    setPickerSwitch(false)
  }
  const classes = useMemo(()=>{
    return (day: Dayjs) => {
      let x = ''
      if (!(day.isSame(mediumDate, 'month'))) {
        x = 'notSelected'
      }
      if (day.isSame(selectedDate, 'day')) {
        x = ' selected'
      }
      return x || ' '
    }
  },[selectedDate,mediumDate])
  useEffect(()=>{
   const xxx = document.getElementsByClassName('notSelected')
    if(xxx.length!==0){
      for(let i =0;i<xxx.length;i++){
        xxx.item(Number(i))?.addEventListener('click',(e)=>{
          e.stopPropagation()
        })
      }
    }
  })
  return (
    <DatePickerWrapper>
      <div className={'trigger'} onClick={()=>{setPickerSwitch(!pickerSwitch);}}>
        <div className="iconWrapper">
          <Icon name='calendar'/>
        </div>
        <span>{(selectedDate||initDate).format('YYYY-MM-DD')}</span>
      </div>
      {/*{pickerSwitch.current && }*/}
      {pickerSwitch && <div className={'picker'}>
        <div className={'head'}>
          <span onClick={() => {setMediumDate(mediumDate.month(mediumDate.month() - 1));}}>&lt;</span>
          <span>{mediumDate.format('YYYY-MM')}</span>
          <span onClick={() => {setMediumDate(mediumDate.month(mediumDate.month() + 1));}}>&gt;</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
          </thead>
          <tbody onClick={(e) => printData(e)}>
          {dateArr.map(DayList => <tr key={DayList[0].toISOString()}>
            {DayList.map(day => <td key={day.toISOString()} data-date={day.toISOString()}
                                    className={classes(day)}>{day.format('D')}</td>)}
          </tr>)}
          </tbody>
        </table>
      </div>}
    </DatePickerWrapper>
  )
}

export default  DatePicker