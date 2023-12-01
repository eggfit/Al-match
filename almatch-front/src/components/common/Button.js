import React from 'react';
import styled,{css} from 'styled-components';
import '../../styles/common.scss';

const StyledButton = styled.button`
    font-family: Pretendard-Medium;
    border: none;
    border-radius: 4px;
    font-size: 0.6rem;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: #D0DE41;
    &:hover {
        background: #dae46f;
    }
    ${props =>
    css`
    width: 101%;
    font-size: 1.0rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    `
  }
   
`;
const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;