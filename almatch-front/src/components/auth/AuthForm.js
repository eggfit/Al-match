import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Button from '../common/Button';

const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        color: grey;
        margin-bottom: 1rem;
    }
`;

// button margin
// const ButtonWithMarinTop = styled(Button)`
// margin-top: 1rem;


const StyledInput = styled.input`
    font-size:1rem;
    border:none;
    border-bottom: 1px solid grey;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom:1px solid grey ;
    }
    &+&{
        margin-top: 1rem;
    }
`
const Footer = styled.div`
    margin-top:2rem;
    text-align : right;
    a {
        color : 1px solid grey;
        text-decoration:underline;
        &:hover{
            color:1px solid grey
        }
    }

`

const textMap = {
    login:'로그인',
    register : '회원가입'
}

const AuthForm = ({type }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput 
                autoComplete="username" 
                name="username" 
                placeholder="아이디"
                
                 />
                <StyledInput 
                autoComplete="current-password" 
                name="password" 
                placeholder="비밀번호" 
                type="password"
                
                
                />
                {type === 'register' &&(
                         <StyledInput autoComplete="new-password" name="passwordConfirm" placeholder="비밀번호 확인" type="password" />
                    )
                }
                {/* <ButtonWithMarinTop fullWidth>{text}</ButtonWithMarinTop> */}
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ):(
                    <Link to="/login">로그인</Link>
                )
                }
               
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;