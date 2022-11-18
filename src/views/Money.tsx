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
      <section>numberPad</section>
    </Layout>
  )
}

export default Money;