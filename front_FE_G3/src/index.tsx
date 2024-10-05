
import React from 'react';
import Home from './pages/home';

export {Home}

export const Login = React.lazy(() => import('./pages/login'));
export const AccountType = React.lazy(() => import('./pages/account_type'));