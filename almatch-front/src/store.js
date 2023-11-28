import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import logger from 'redux-logger';

const store = configureStore({
    reducer: authReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: false,
});
export default store;
