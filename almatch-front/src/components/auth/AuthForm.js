import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import '../../styles/common.scss';

const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        color: grey;
        margin-bottom: 1rem;
    }
`;

const ButtonSignInUp = styled(Button)`
margin-top: 1rem;`

const StyledInput = styled.input`
    font-family: Pretendard-Regular;
    background-color: rgb(236, 236, 236);
    font-size:1rem;
    border:none;
    border-radius: 4px;
    padding-bottom: 0.6rem;
    padding-top: 0.6rem;
    outline: none;
    width: 100%;
    -webkit-appearance: none;
    &+&{
        margin-top: 1rem;
    }
`
const Footer = styled.div`
    font-family: Pretendard-Regular;
    margin-top: 2rem;
    text-align : right;
    a {
        color: inherit;
        text-decoration: none;
        &:hover{
            color:1px solid grey
        }
    }

`

const textMap = {
    login:'Sign In',
    register: 'Sign Up'
}

const AuthForm = ({type }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <form>
                <StyledInput 
                autoComplete="username" 
                name="username" 
                placeholder="Email"
                
                 />
                <StyledInput 
                autoComplete="password" 
                name="password" 
                placeholder="password" 
                type="password"
                
                
                />
                <ButtonSignInUp fullWidth>{text}</ButtonSignInUp>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/">Sign Up</Link>
                ):(
                    <Link to="/login">Sign In</Link>
                )
                }
               
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;