import Task from './../models/Task'

class TaskCompleteController {

  async update( request, response ) {
    const { id } = request.params
    const task = await Task.findByPk( id, { where: { user_id: request.userId } } )

    await task.update( { doned: !task.doned } )
    await task.save()

    return response.status( 201 ).json( task )
  }

}

export default new TaskCompleteController()
