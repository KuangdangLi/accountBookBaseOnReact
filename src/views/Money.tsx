import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypesSection} from './Money/TypesSection';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;  
`

const Money=()=>{
  return (
    <MyLayout>
      <TagsSection />
      <NotesSection />
      <TypesSection />
      <NumberPadSection />
    </MyLayout>
  )
}

export default Money;