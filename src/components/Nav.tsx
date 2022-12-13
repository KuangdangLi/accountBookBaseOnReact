import { NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from './icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display:flex;
    > li{
      width: 33.3333%;
      text-align:center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 8px;
      padding-top: 7px;
      div{
        line-height: 8px;
        font-size: 12px;
        
      }
      .icon {
        width: 26px;
        height: 26px;
      }
      >a{
        &.selected{
          color: #3eb575;
          .icon{
            fill: #3eb575;
          }
        }  
      } 
    }
  }
`;

const Nav=() =>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money"  activeClassName="selected">
            <Icon name="money" />
            <div>money</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" exact activeClassName="selected">
            <Icon name="label" />
            <div>tags</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
            <div>statistics</div>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;