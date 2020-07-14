import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export default async ( request, response, next ) => {

  const authHeader = request.headers.authorization

  if( !authHeader ) {
    return response.status( 401 ).json( { error: 'Access denied, you are not allowed' } )
  }

  try {
    const [ , token ] = authHeader.split( ' ' )
    const decoded = await promisify( jwt.verify )( token, 'minhastasks' )
    request.userId = decoded.id

    return next()
  } catch (error) {
    return response.status( 401 ).json( { error: 'Access denied, you are not allowed' } )
  }

}
