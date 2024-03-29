import { Routes, Route } from 'react-router-dom'
import { IRoute, routesApp } from '.'
import Layout from '../components/layout/layout'
import {FC} from 'react'
import Page404 from '../pages/404'

const RoutesApp: FC = () => {
 return <Routes>
  <Route path='/' element={<Layout />}>
   {routesApp.map((route: IRoute) => <Route path={route.path} key={route.path} element={<route.element />} />)}
  </Route>
  <Route path='*' element={<Page404/>}/> 
 </Routes>
}

export default RoutesApp