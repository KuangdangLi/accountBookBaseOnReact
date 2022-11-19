import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypesSection';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;  
`

const Money=()=>{
  return (
    <MyLayout>
      <TagsSection />
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
    </MyLayout>
  )
}

export default Money;