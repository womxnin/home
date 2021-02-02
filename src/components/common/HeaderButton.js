import React from 'react';
// import { Wrapper } from './style';
import styled from 'styled-components';

export default class HeaderButton extends React.Component {
  _handleClick = e => {
    window.location.href=this.props.url;
  };

  render() {
    return (
      <StyledButton onClick={this._handleClick}>{this.props.text}</StyledButton>
    );
  }
}

const StyledButton = styled.button`
        font-family: revert;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        display: block;
        background-color: white;
        cursor: pointer!important;
        border-radius: 5px;
        padding: 19px;
        align-items: center;
        box-sizing: border-box;

        :hover {
            background-color: #2EE59D;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: #fff;
            transform: translateY(-7px);
        }
`;