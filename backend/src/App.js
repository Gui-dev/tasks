import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import * as Sentry from '@sentry/node'
import Youch from 'youch'
import 'express-async-errors'

import './database/Database'
import sentryConfig from './config/sentry'

import routes from './routes'

class App {

  constructor() {
    this.app = express()

    Sentry.init( sentryConfig )
    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() {
    this.app.use( express.json() )
    this.app.use( cors() )
    this.app.use( Sentry.Handlers.requestHandler() )
  }

  routes() {
    this.app.use( routes )
    this.app.use( Sentry.Handlers.errorHandler() )
  }

  exceptionHandler() {

    this.app.use( async ( error, request, response, next ) => {

      if( process.env.NODE_ENV === 'development' ) {
        const errors = await new Youch( error, request ).toJSON()
        return response.status( errors.status ? errors.status: 500 ).json( { errors } )
      }

      return response.status( 500 ).json( { err: 'Internal server error' } )
    } )
  }

}

export default new App().app
