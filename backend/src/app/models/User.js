import { DataTypes, Model } from 'sequelize'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class User extends Model {

  static init( sequelize ) {
    super.init( {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    }, {
      sequelize
    } )

    this.addHook( 'beforeSave', async ( user ) => {
      if( user.password ) {
        user.password_hash = await bcrypt.hash( user.password, 8 )
      }
    } )

    return this
  }

  comparePassword( password ) {
    return bcrypt.compare( password, this.password_hash )
  }

  generateToken( id ) {
    return jwt.sign( { id }, 'minhastasks', {
      expiresIn: '7d'
    } )
  }

  static associate( models ) {
    this.hasMany( models.Task )
  }

}

export default User
