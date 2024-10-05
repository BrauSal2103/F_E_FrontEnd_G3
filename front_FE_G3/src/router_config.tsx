import { Home, Login, AccountType } from "./index.tsx"

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/account_type',
        element: <AccountType />
    },
]