import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './../screens/Tasks/Home'
import AddTasks from './../screens/Tasks/AddTasks'
import DoneTasks from './../screens/Tasks/DoneTasks'
import CheckTasks from './../screens/Tasks/CheckTasks'
import UpdateTask from './../screens/Tasks/UpdateTask'

const Tasks = () => {

  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator()

  return (

    <Tab.Navigator
      tabBarOptions={ {
        activeTintColor: '#7B84DB',
        inactiveTintColor: '#FFF', 
        activeBackgroundColor: '#222',         
        inactiveBackgroundColor: '#333',
        labelStyle: { fontSize: 14 },
      } }
    >
      <Tab.Screen name="Home" component={ Home }
        options={ {
          tabBarLabel: 'Tasks',
          tabBarIcon: ( { color } ) => <Icon name="tasks" size={20} color={ color }/>
        } }
      />
      <Tab.Screen name="AddTasks" component={ AddTasks }
        options={ {
          tabBarLabel: 'Nova task',
          tabBarIcon: ( { color } ) => <Icon name="plus" size={20} color={ color }/>
        } }
      />

      <Tab.Screen name="DoneTasks" component={ DoneTasks }
        options={ {
          tabBarLabel: 'Completas',
          tabBarIcon: ( { color } ) => <Icon name="check" size={20} color={ color }/>
        } }
      />
      <Tab.Screen name="CheckTasks" component={ CheckTasks }
        options={ {
          tabBarLabel: 'Por fazer',
          tabBarIcon: ( { color } ) => <Icon name="bomb" size={20} color={ color }/>
        } }
      />    
    </Tab.Navigator>
  )
}

export default Tasks