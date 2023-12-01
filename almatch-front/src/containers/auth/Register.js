import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// auth module register import
import { changeField, initializeForm,register } from '../sagas/auth';
import AuthForm from '../components/auth/AuthForm';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
    }));

    // action dispatch
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
          changeField({
            form: 'register',
            key: name,
            value,
          }),
        );
      };

    // form submit event 로 register 함수에 username, userId, password 넣어서 dispatch 
    // 사가에 대한 API 요청 처리후, 이에 대한 결과를 auth/authError 통해 조회
    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = form;
        console.log(e);
        dispatch(register({ email, password }));
    };


    // 초기 렌더링> form 초기화
    useEffect(()=>{
        dispatch(initializeForm('register'));
    },[dispatch]);

    // auth, authError 값 중에서 무엇이 유효한지에 따라 다른 작업을 함.
    useEffect(()=>{
        if (authError){
            console.log('Register Error :(');
            console.log(authError);
            return;
        }
        if(auth){
            console.log('Register Success :)');
            console.log(auth);
        }
    },[auth,authError])

    return (
       <AuthForm
       type="register"
       form={form}
       onChange={onChange}
       onSubmit={onSubmit} 
       />
    );
};

export default RegisterForm;