import styled from 'styled-components';
import Nav from './Nav';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
  text-align: center;
`

const Layout=(props:any)=>{
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav></Nav>
    </Wrapper>

  )
}

export default Layout;