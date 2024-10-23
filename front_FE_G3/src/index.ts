
import React from 'react';
import Home from './pages/home';

export {Home}

export const Login = React.lazy(() => import('./pages/login'));
export const SelecReg = React.lazy(() => import('./pages/selec_reg'));