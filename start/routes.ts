/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('login', 'admin/AuthController.showLoginForm')
    Route.post('login', 'admin/AuthController.login')
  }).middleware('isGuest')

  Route.group(() => {
    Route.get('logout', 'admin/AuthController.logout')
    Route.get('/', 'admin/HomeController.show')
  }).middleware('isUser')
}).prefix('admin')

Route.post('/add', 'ListModulesController.addModule')

Route.get('/', 'ListModulesController.get')
