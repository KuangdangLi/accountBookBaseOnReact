import styled from 'styled-components';

const Wrapper =styled.section`
  >.output{
    font-family: Consolas , monospace;
    font-size: 36px;
    color: #333;
    line-height: 72px;
    text-align: right;
    padding-right: 16px;
    background-color: #fff;
  }
  //>.pad{
  //button{
  //  float: left;
  //  font-size: 18px;
  //  width: 25%;
  //  height: 64px;
  //  &.ok{
  //    height: 128px;
  //    float:right;
  //  }
  //  &.zero{
  //    width: 50%;
  //  }
  //  &:nth-child(1){
  //    background:#f2f2f2;
  //  }
  //  &:nth-child(2),
  //  &:nth-child(5) {
  //    background:#E0E0E0;
  //  }
  //  &:nth-child(3),
  //  &:nth-child(6),
  //  &:nth-child(9) {
  //    background:#D3D3D3;
  //  }
  //  &:nth-child(4),
  //  &:nth-child(7),
  //  &:nth-child(10) {
  //    background:#C1C1C1;
  //  }
  //  &:nth-child(8),
  //  &:nth-child(11),
  //  &:nth-child(13) {
  //    background:#B8B8B8;
  //
  //  }
  //  &:nth-child(12) {
  //    background:#9A9A9A;
  //  }
  //  &:nth-child(14) {
  //    background:#A9A9A9;
  //  }
  //} 
  //}
  >.pad{
    padding-top: 5px;
    width: 100%;
    display: grid;
    grid-template-rows: 52px 52px 52px 52px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5px;
    grid-template-areas: 
    '1 2 3 delete'  
    '4 5 6 clear'  
    '7 8 9 OK'  
    'zero zero dot OK'  
  ;
    button{
      //float: left;
      background-color: white;
      font-size: 18px;
      border-radius: 5px;
      //width: 25%;
      //height: 64px;
      &.ok{
        //height: 128px;
        //float:right;
        grid-area: OK;
        color: white;
        &.minus{
          background-color: rgba(62, 181, 117,0.5);
            &.ready{
              background-color: rgb(62, 181, 117);
            }
        }
        &.plus{
          background-color: rgba(227, 174, 0,0.5);
          &.ready{
            background-color: rgb(227, 174, 0);
          }
        }
      }
      &.zero{
        grid-area: zero;
      }
    }
      //&:nth-child(1){
      //  background:#f2f2f2;
      //}
      //&:nth-child(2),
      //&:nth-child(5) {
      //  background:#E0E0E0;
      //}
      //&:nth-child(3),
      //&:nth-child(6),
      //&:nth-child(9) {
      //  background:#D3D3D3;
      //}
      //&:nth-child(4),
      //&:nth-child(7),
      //&:nth-child(10) {
      //  background:#C1C1C1;
      //}
      //&:nth-child(8),
      //&:nth-child(11),
      //&:nth-child(13) {
      //  background:#B8B8B8;
      //
      //}
      //&:nth-child(12) {
      //  background:#9A9A9A;
      //}
      //&:nth-child(14) {
      //  background:#A9A9A9;
      //}
    }
  `
export {Wrapper}