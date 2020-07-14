import { Sequelize } from 'sequelize'

import User from './../app/models/User'
import Task from './../app/models/Task'
import database from './../config/database'

class Database {

  constructor() {
    this.models = [ User, Task ]
    this.init()
  }

  init() {
    this.connection = new Sequelize( database )
    this.models
      .map( model => model.init( this.connection ) )
      .map( model => model.associate && model.associate( this.connection.models ) )
  }
}

export default new Database()
