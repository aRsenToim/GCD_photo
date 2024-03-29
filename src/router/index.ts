import React from "react"
import Home from "../pages/home"
import Photo from "../pages/photo"
import Profile from "../pages/profile"
import Login from "../pages/login"
import Regist from "../pages/regist"
import Create from "../pages/create"
import Settings from "../pages/settings"
import UserPage from "../pages/user"
import Search from "../pages/search"
import Users from "../pages/users"


export interface IRoute {
 path: string
 element: React.ComponentType
 title: string
}

enum routes {
 Home = '/',
 Photo = '/photo/:id',
 Profile = '/profile',
 Login = '/login',
 Regist = '/regist',
 Create = '/create',
 Settings = '/settings',
 UserPage = '/user/:id',
 Search = '/search/:id',
 Users = '/users',
}

export const routesApp: IRoute[] = [
 {
  path: routes.Home,
  element: Home,
  title: "Home"
 },
 {
  path: routes.Search,
  element: Search,
  title: "Search"
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
 },
 {
  path: routes.Settings,
  element: Settings,
  title: "settings"
 },
 {
  path: routes.UserPage,
  element: UserPage,
  title: "UserPage"
 },
 {
  path: routes.Users,
  element: Users,
  title: "Users"
 }
]