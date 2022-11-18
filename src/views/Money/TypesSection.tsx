import styled from 'styled-components';

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
export {TypeSection};