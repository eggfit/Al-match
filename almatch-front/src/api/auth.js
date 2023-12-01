import client from "./client";

// 로그인
export const login = ({username, userId, password}) => 
    client.post('/api/auth/login', {username, userId, password});

// 회원가입
export const register = ({username, userId, password}) => 
    client.post('/api/auth/register',{username, userId, password});

// 로그인 상태 확인
// export const check = () => client.get('/api/auth/');