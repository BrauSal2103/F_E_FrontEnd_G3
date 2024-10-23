import { Home, Login, SelecReg } from "../index.ts"

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