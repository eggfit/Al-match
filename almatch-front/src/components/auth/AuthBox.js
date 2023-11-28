import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthTemplate = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  right:0;
  background : #grey;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;


const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align:center;
    font-weight: bold;
    letter-spacing:2px;
  }
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`

const AuthBox= ({children}) => {
  return (
  <AuthTemplate >
    <WhiteBox>
      <div className="logo-area">
    <Link to='/'>Al-match</Link>
    </div>
    {children}
    </WhiteBox>
    </AuthTemplate >
    
    )
    ;

};

export default AuthBox;