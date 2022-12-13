import styled from 'styled-components';
import Nav from './Nav';
import React from 'react';

const Wrapper = styled.div`
  @media (min-width: 500px){
    width: 500px;
    margin: 0 auto;
  }
  display: flex;
  height: 100vh;
  flex-direction: column;
  transform: rotate(360deg);
`

const Main = styled.main`
  flex-grow: 1;
  overflow-y: hidden;
  text-align: center;
  background-color: #f5f5f5;
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