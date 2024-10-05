import { Route, Routes } from "react-router-dom"
import { routes } from './router_config'

export const AppRouter = () =>{
    return (
        <Routes>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                routes.map((route: any, index:number) => (
                    <Route key={index} path={route.path} element={route.element}/>
                ))
            }
        </Routes>
    )
}