import {useEffect, useMemo, useRef} from 'react';
import React from 'react';
import * as echarts from 'echarts'
import styled from 'styled-components';
import {LineBetween} from './LineBetween';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  //height: 90%;
  .container{
    padding: 0 10px;
    width: 100%;
    height: 300px;
  }
`

type Props ={
  arr: ChartOption,
  type:Type
}

const MyEcharts:React.FC<Props> = (props)=>{
  const barContainer = useRef<HTMLDivElement>(null)
  const pieContainer = useRef<HTMLDivElement>(null)
  const {arr} = props
  const {dateArr,amountArr,pieChartOption} = arr
  const options = useMemo(()=>({dateArr,amountArr,pieChartOption}),[dateArr,amountArr,pieChartOption])
  useEffect(()=>{
    const myBarChart = echarts.init(barContainer.current as HTMLDivElement)
    myBarChart.setOption({
      title:{
        show:true,
        text:'每日对比',

      },
      tooltip: {
        show:true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label:{
            color:'black'
          }
        },
        extraCssText:'width:100px;height:50px',
      },
      grid: {
        left: 0,
        right: 0,
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: options.dateArr,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel:{
            show:true,
            interval:3
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine:{
            show:false
          },
          axisLabel:{
            margin: 10
          }
        }
      ],
      series: [
        {
          name: '金额',
          type: 'bar',
          barWidth: '50%',
          data: options.amountArr,
          itemStyle:{
            color: props.type === '-' ? '#38b478' : '#e3ae00'
          }
        }
      ]
    })
    const myPieChart = echarts.init(pieContainer.current as HTMLDivElement )
    myPieChart.setOption({
      title: {
        text: '支出构成',
        left: 'left'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b}:<br />{c}￥",
        textStyle: {width: '10px',height: '10px'},
        extraCssText:'width:100px;height:50px',
      },
      series: [
        {
          name: 'Amount Percent',
          type: 'pie',
          radius: '50%',
          data: options.pieChartOption,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outer', //标签的位置
                textStyle: {color: "#333", fontSize: "14"},
                formatter: function (val:any) {
                  //让series 中的文字进行换行
                  // return val.name;
                  return val.name + "\n(" + val.percent + "%)";
                },
              },
            }},
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  },[options,props.type])

  return (
    <Wrapper>
    <div ref={barContainer} className={'container'}>123</div>
      <LineBetween />
    <div ref={pieContainer} className={'container'}>123</div>
    </Wrapper>
  )
}

export default MyEcharts;