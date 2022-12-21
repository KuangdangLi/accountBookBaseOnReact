import React, {useMemo, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import styled from 'styled-components';
import Icon from './icon';

const MonthPickerWrapper = styled.div`
  position: relative;
  align-items: center;
  font-size: 14px;
  -webkit-tap-highlight-color: rgba(255,255,255,0);

  >div.trigger{
    height: 100%;
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
      >svg{
        fill: #3eb575;
      }
    }
  }
  >.picker {
    position: absolute;
    top: 20px;
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
    >ol{
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      >li{
        padding: 10px 0;
        box-shadow: 0 3px 3px rgba(128, 128, 128, 0.1);
        background-color: transparent;
        position: relative;
        overflow: hidden;
        border-radius: 3px;
        &.selected{
          background-color: #3eb575;
          color: white;
        }
        //&::before {
        //  content: '';
        //  position: absolute;
        //  top: -10px;
        //  left: -10px;
        //  width: 150%;
        //  height: 150%;
        //  border-radius: 50%;
        //  background-color: rgba(62, 181, 117,0.2);
        //  transform: scale(0);
        //  transition: transform 500ms linear;
        //}
        //&:hover {
        //  ::before{
        //    transform: scale(1);
        //  }
        //}
      }
    }
  }
`

type Props = {
  initMonth:Dayjs
  selectMonth: (month:Dayjs)=>void
}

const MonthPicker:React.FC<Props> = (props)=>{
  const {initMonth,selectMonth} = props
  const [medium,setMedium] = useState(initMonth)
  const [selectedMonth,setSelectedMonth] = useState()
  const [pickerSwitch,setPickerSwitch] = useState(false)
  const monthList = useMemo(()=>{
    const x = []
    for(let i = 0;i<12;i++){
      x.push(medium.month(i))
    }
    return x
  },[medium])
  const printMonth= (e: React.MouseEvent<HTMLElement>)=>{
    const x = dayjs((e.target as HTMLOListElement).dataset.date)
    // if(selectedMonth.isSame(x,'month')){
    //    setSelectedMonth(nowMonth)
    // }else{
      setSelectedMonth(x)
      selectMonth(x)
    // }
    setPickerSwitch(false)
  }
  return (
    <MonthPickerWrapper>
      <div className={'trigger'} onClick={()=>{setPickerSwitch(!pickerSwitch)}}>
        <div className="iconWrapper">
          <Icon name='calendar'/>
        </div>
       <span>{initMonth.format('YYYY年MM月')}</span>
      </div>
      {pickerSwitch&&<div className={'picker'}>
        <div className={'head'}>
          <span onClick={() => {setMedium(medium.year(medium.year() - 1));}}>&lt;</span>
          <span>{medium.format('YYYY年')}</span>
          <span onClick={() => {setMedium(medium.year(medium.year() + 1));}}>&gt;</span>
        </div>
        <ol onClick={(e) => {printMonth(e);}}>
          {monthList?.map(item => <li key={item.toISOString()} data-date={item.toISOString()}
                                      className={item.isSame(selectedMonth, 'month') ? 'selected' : ' '}>{item.format('M月')}</li>)}
        </ol>
      </div>}
    </MonthPickerWrapper>
  )
}

export default MonthPicker