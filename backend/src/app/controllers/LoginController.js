import User from './../models/User'

class LoginController {

  async store( request, response ) {
    const { email, password } = request.body
    const user = await User.findOne( { where: { email } } )
    const { id, name } = user

    if( !id && !name ) {
      return response.status( 401 ).json( { error: 'Access denied, check your email and password' } )
    }

    if( !user ) {
      return response.status( 401 ).json( { error: 'Access denied, check your email and password' } )
    }

    if( !( await user.comparePassword( password ) ) ) {
      return response.status( 401 ).json( { error: 'Access denied, check your email and password' } )
    }

    return response.status( 201 ).json( {
      user: { id, name, email },
      token: user.generateToken( id )
    } )
  }

}

export default new LoginController()
