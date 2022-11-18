import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const TagsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px;
  ol{
    display: flex;
    flex-direction: row;
    >li{
      margin-right: 24px;
      background: #D9D9D9; 
      border-radius: 18px;
      display:inline-block;
      padding: 3px 18px;
      font-size: 14px;
    }
  }
  .button{
    color: #999;
    font-size: 14px;
    border-bottom: 1px solid #666;
    padding: 2px 4px;
    margin-top: 18px;
  }
`
const NotesSection = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    >span{
      color: #333;
      white-space: nowrap;
      margin-right: 16px;
    }
    >input{
      border: none;
      display: block;
      width: 100%;
      height: 72px;
      background:none;
    }  
  }
`
const TypeSection = styled.section`
  display: flex;
  flex-direction: row;
  >div{
    width: 50%;
    font-size: 24px;
    line-height: 64px;
    background-color: #C4C4C4;
    position: relative;
  &.selected::after{
    content: '';
    display: block;
    height: 4px;
    background-color: #333;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  }
`
const NumberPadSection =styled.section`
  >.output{
    font-family: Consolas , monospace;
    font-size: 36px;
    color: #333;
    line-height: 72px;
    text-align: right;
    padding-right: 16px;
  }
  >.pad{
  button{
    float: left;
    font-size: 18px;
    width: 25%;
    height: 64px;
    &.ok{
      height: 128px;
      float:right;
    }
    &.zero{
      width: 50%;
    }
    &:nth-child(1){
      background:#f2f2f2;
    }
    &:nth-child(2),
    &:nth-child(5) {
      background:#E0E0E0;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      background:#D3D3D3;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      background:#C1C1C1;
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13) {
      background:#B8B8B8;
    }
    &:nth-child(12) {
      background:#9A9A9A;
    }
    &:nth-child(14) {
      background:#A9A9A9;
    }
  } 
  }
`

const Money=()=>{
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button className="button">新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NotesSection>
      <TypeSection>
        <div className="selected">支出</div>
        <div>收入</div>
      </TypeSection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}

export default Money;