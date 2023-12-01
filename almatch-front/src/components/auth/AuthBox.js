import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/al-match-logo.png';
import '../../styles/auth.scss';

const AuthBox= ({children}) => {
  return (
  <div className='AuthTemplate'>
    <div className='Box'>
      <div className="logo-area">
      <Link to='/'> 
        <img src={Logo} alt="logo" className="logo" /> 
        </Link>
        {/* <h3>내 알레르기에 맞추다</h3> */}
      </div>
      {children}
      </div>
    </div >
    )
    ;

};

export default AuthBox;