import React from "react"
import Home from "../pages/home"
import Photo from "../pages/photo"
import Profile from "../pages/profile"
import Login from "../pages/login"
import Regist from "../pages/regist"
import Create from "../pages/create"


export interface IRoute {
 path: string
 element: React.ComponentType
 title: string
}

enum routes {
 Home = '/',
 Photo = '/photo/:id',
 Profile = '/profile/:id',
 Login = '/login',
 Regist = '/regist',
 Create = '/create'
}

export const routesApp: IRoute[] = [
 {
  path: routes.Home,
  element: Home,
  title: "Home"
 }, 
 {
  path: routes.Create,
  element: Create,
  title: "Create"
 },
 {
  path: routes.Photo, 
  element: Photo,
  title: "Photos"
 },
 {
  path: routes.Profile,
  element: Profile,
  title: "Profile"
 },
 {
  path: routes.Login,
  element: Login,
  title: "login"
 },
 {
  path: routes.Regist,
  element: Regist,
  title: "regist"
 }
]