import {useRoutes} from 'react-router-dom'
import { Home } from './features/01-home/home'
import { Diary } from './features/02-diary/Diary'
import { CV } from './features/09-CV/CV'
import { Work } from './features/work/work'
import { Info } from './features/info/info'

export const RoutesObj = () => useRoutes([
    {path: '/', element: <Home/>},
    {path: '/diary', element: <Diary/>},
    {path: '/cv', element: <CV/>},
    {path: '/work', element: <Work/>},
    {path: '/info', element: <Info/>}
])