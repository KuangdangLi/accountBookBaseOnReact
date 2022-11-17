import {Link} from 'react-router-dom';
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
    }
  }
`;

const Nav=() =>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/money">
            <Icon name="money" />
            <div>money</div>
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <Icon name="label" />
            <div>tags</div>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics" />
            <div>statistics</div>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;