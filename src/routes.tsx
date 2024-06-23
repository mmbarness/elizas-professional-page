import { useRoutes } from 'react-router-dom'
import { Home } from './features/01-home/home'
import { Info } from './features/03-info/info'

export const RoutesObj = () => useRoutes([
    {path: '/', element: <Home/>},
    {path: '/recently', element: <Home/>},
    {path: '/info', element: <Info/>}
])
