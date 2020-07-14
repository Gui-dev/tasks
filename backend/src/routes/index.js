import { Router } from 'express'

import User from './../app/controllers/UserController'
import Login from './../app/controllers/LoginController'
import Task from './../app/controllers/TaskController'
import TaskComplete from './../app/controllers/TaskCompleteController'


import authentication from './../app/middlewares/auth'

const routes = Router()

routes.post( '/users', User.store )
routes.put( '/users/:id', User.update )
routes.delete( '/users/:id', User.delete )
routes.post( '/login', Login.store )

routes.use( authentication )

routes.get( '/tasks', Task.index )
routes.get( '/tasks/:id', Task.show )
routes.post( '/tasks', Task.store )
routes.put( '/tasks/:id', Task.update )
routes.delete( '/tasks/:id', Task.delete )

routes.post( '/tasks/:id', TaskComplete.update )


export default routes
