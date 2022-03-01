import {useRoutes} from 'react-router-dom'
import { Home } from './features/01-home/home'
import { Diary } from './features/02-diary/Diary'
import { HobbyDeath } from './features/03-hobbyDeath/HobbyDeath'
import { MyFavoriteMonument } from './features/04-myFavoriteMonument/MyFavoriteMonument'
import { SelfMaintaining } from './features/05-selfMaintaining/SelfMaintaining'
import { SincerelyYours } from './features/06-sincerelyYours/SincerelyYours'
import { MusicVideos } from './features/07-musicVideos/MusicVideos'
import { MyHusband } from './features/08-myHusband/MyHusband'
import { CV } from './features/09-CV/CV'

export const RoutesObj = () => useRoutes([
    {path: '/', element: <Home/>},
    {path: '/diary', element: <Diary/>},
    {path: '/hobby-death', element: <HobbyDeath/>},
    {path: '/my-favorite-monument', element: <MyFavoriteMonument/>},
    {path: '/self-maintaining', element: <SelfMaintaining/>},
    {path: '/sincerely-yours', element: <SincerelyYours/>},
    {path: '/music-videos', element: <MusicVideos/>},
    {path: '/my-husband', element: <MyHusband/>},
    {path: '/cv', element: <CV/>},
])