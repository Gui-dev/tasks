import User from './../models/User'

class UserController {

  async store( request, response ) {
    const { name, email, password } = request.body

    const findUser = await User.findOne( { where: { email } } )

    if( findUser ) {
      return response.status( 400 ).json( { error: 'This user already exists' } )
    }

    const user = await User.create( { name, email, password } )
    return response.status( 201 ).json( user )
  }

  async update( request, response ) {

    const { id } = request.params
    const { name, oldPassword, confirmPassword, password } = request.body
    const user = await User.findByPk( id )

    if( !user ) {
      return response.status( 400 ).json( { error: 'User not found' } )
    }

    if( oldPassword && !( await user.comparePassword( oldPassword ) ) ) {
      return response.status( 400 ).json( { error: 'Your password does not match' } )
    }

    if( !( confirmPassword === password ) ) {
      return response.status( 400 ).json( { error: 'New password does not match' } )
    }

    await user.update( { name, password } )
    await user.save()

    return response.status( 201 ).json( user )
  }

  async delete( request, response ) {

    const { id } = request.params
    const user = await User.findByPk( id )

    if( !user ) {
      return response.status( 400 ).json( { error: 'User not found' } )
    }

    await user.destroy()
    await user.save()

    return response.status( 201 ).json( {} )
  }

}

export default new UserController()
