import { DataTypes, Model } from 'sequelize'

class Task extends Model {

  static init( sequelize ) {
    super.init( {
      description: DataTypes.STRING,
      doned: DataTypes.BOOLEAN,
      estimated: DataTypes.DATE
    }, {
      sequelize
    } )

    return this
  }

  static associate( models ) {
    this.belongsTo( models.User, { foreignKey: 'user_id', as: 'user' } )
  }

}

export default Task
