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
  overflow: hidden;
  text-align: center;
`

const Layout=(props:any)=>{
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav></Nav>
    </Wrapper>

  )
}

export default Layout;