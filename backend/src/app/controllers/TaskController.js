import Task from './../models/Task'
import { parseISO } from 'date-fns'

class TaskController {

  async index( request, response ) {

    const id = request.userId
    const tasks = await Task.findAll( { where: { user_id: id } } )

    return response.status( 201 ).json( tasks )
  }

  async store( request, response ) {

    const { description, date } = request.body

    const task = await Task.create( {
      user_id: request.userId,
      description,
      estimated: parseISO( date )
    } )

    return response.status( 201 ).json( task )
  }

  async show( request, response ) {

    const { id } = request.params
    const task = await Task.findByPk( id, { where: { user_id: request.userId } } )

    return response.status( 201 ).json( task )
  }

  async update( request, response ) {

    const { id } = request.params
    const { description } = request.body
    const task = await Task.findByPk( id, { where: { user_id: request.userId } } )

    await task.update( { description } )
    await task.save()

    return response.status( 201 ).json( task )
  }

  async delete( request, response ) {

    const { id } = request.params
    const task = await Task.findByPk( id, { where: { user_id: request.userId } } )

    await task.destroy()
    await task.save()

    return response.status( 201 ).json()
  }
}

export default new TaskController()
