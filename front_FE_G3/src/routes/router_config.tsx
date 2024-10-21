import { Home, Login, SelecReg } from "../index.tsx"

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/selec_reg',
        element: <SelecReg/>
    },
]